import { cn } from "@/lib/utils";

export function IconWrapper({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-sm border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background",
                "[&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            aria-hidden="true"
            {...props}
        />
    );
}