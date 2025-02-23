import { CardContent } from "@/components/ui/card";
import { BaseUserCard } from "@/components/user/base-card";
import Icon from "@/components/icon";

export const NoUser = () => {
    return (
        <BaseUserCard>
            <CardContent className="p-0 grid grid-rows-[20px_8rem_1fr]">
                <Icon
                    icon="github"
                    className="bg-neutral-900 w-32 h-32 p-4 mx-6 rounded-lg z-10 shadow-sm border border-primary row-start-1 row-end-3 col-start-1"
                />
                <div className="p-6 border border-muted-foreground/30 rounded-xl grid gap-6 items-start row-start-2 row-end-4 col-start-1 grid-rows-subgrid">
                    <div />
                    <div className="grid grid-cols-2 sm:grid-cols-[1fr_2fr] gap-4">
                        <p className="text-gray-200 col-span-full text-balance italic">No github user found</p>
                    </div>
                </div>
            </CardContent>
        </BaseUserCard>
    );
}
