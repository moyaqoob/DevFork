import { CardContent } from "@/components/ui/card";
import { BaseUserCard } from "@/components/user/base-card";
import Icon from "@/components/icon";

export const NoUser = () => {
    return (
        <BaseUserCard>
            <CardContent className="p-0 grid grid-rows-[20px_6rem_1fr] md:grid-rows-[20px_8rem_1fr]">
                <Icon
                    icon="github"
                    className="bg-secondary w-20 md:w-32 h-20 md:h-32 p-2 md:p-4 mx-6 rounded-lg z-10 shadow-sm border border-muted-foreground/30 row-start-1 row-end-3 col-start-1"
                />
                <div className="p-6 border border-muted-foreground/30 rounded-xl grid gap-6 items-start row-start-2 row-end-4 col-start-1 grid-rows-subgrid">
                    <div />
                    <p className="text-muted-foreground col-span-full text-balance italic">No github user found</p>
                </div>
            </CardContent>
        </BaseUserCard>
    );
}
