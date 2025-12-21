import { cn } from "@/lib/utils";

export const Separator = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "h-full w-full border-x border-edge",
                "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/70",
                className
            )}
        />
    );
}
