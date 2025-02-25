import Icon from "@/components/icon";
import { IconKey } from "@/lib/icons";
import { cn } from "@/lib/utils";

export const StatsCard = (
    {
        label,
        value,
        icon,
        small
    }: {
        label: string,
        value: number,
        icon?: IconKey,
        small?: boolean
    }) => (
    <div className={cn(
        "grid gap-x-1.5 md:gap-x-3 rounded-lg grid-cols-[auto_1fr] items-center",
        small && "grid-x-1 grid-flow-dense"
    )}>
        {icon &&
            <div className="p-2 bg-blue-50 dark:bg-blue-700/20 text-blue-600 rounded-lg row-start-1 row-end-3">
                <Icon icon={icon} className="md:w-8 md:h-8" />
            </div>
        }
        <div className={cn("text-xs md:text-sm text-secondary-foreground", small && "col-start-2")}>{label}</div>
        <div className={cn("text-xs md:text-base font-bold", small && "col-start-1")}>{value}</div>
    </div>
);
