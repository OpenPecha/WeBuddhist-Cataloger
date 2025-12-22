import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/atoms/breadcrumb";

export type BreadcrumbItemType = {
    label: string;
    path?: string;
    id?: string;
};

type Crumb =
    | { kind: "item"; id: string; label: string; path?: string }
    | { kind: "ellipsis"; id: string };

function buildCrumbs(items: BreadcrumbItemType[]): Crumb[] {
    if (!items?.length) return [];

    const normalize = (it: BreadcrumbItemType, idx: number): Crumb => ({
        kind: "item",
        id: it.id ?? `${it.label}-${it.path ?? "nop"}-${idx}`,
        label: it.label,
        path: it.path,
    });

    if (items.length <= 3) return items.map(normalize);

    const first = normalize(items[0], 0);
    const secondLast = normalize(items[items.length - 2], items.length - 2);
    const last = normalize(items[items.length - 1], items.length - 1);

    return [first, { kind: "ellipsis", id: "breadcrumb-ellipsis" }, secondLast, last];
}

export default function BreadcrumbComponent({
    items,
    maxLastWidth = 200,
}: {
    items: BreadcrumbItemType[];
    maxLastWidth?: number;
}) {
    const crumbs = buildCrumbs(items);
    if (!crumbs.length) return null;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {crumbs.map((crumb, idx) => {
                    const isLast = idx === crumbs.length - 1;

                    return (
                        <span key={crumb.id} className="inline-flex items-center">
                            <BreadcrumbItem>
                                {crumb.kind === "ellipsis" ? (
                                    <BreadcrumbEllipsis />
                                ) : isLast ? (
                                    <BreadcrumbPage
                                        className="truncate"
                                        style={{ maxWidth: `${maxLastWidth}px` }}
                                        title={crumb.label}
                                    >
                                        {crumb.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={crumb.path || "#"}>{crumb.label}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                            {!isLast && <BreadcrumbSeparator />}
                        </span>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
