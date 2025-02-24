import { NO_OF_REPOS } from "@/constant";
import { cn } from "@/lib/utils";

const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 dark:before:via-black/30 before:to-transparent before:z-10';

export const StatsSkeleton = ({ animate = false }: { animate?: boolean }) => {
    return <div className={cn(
        { shimmer: animate },
        { "relative overflow-hidden": animate },
        "h-[46px] w-60 rounded-md bg-secondary/50"
    )} />
};

export function UserCardSkeleton() {
    return (
        <div className={cn(
            shimmer,
            "relative overflow-hidden rounded-xl shadow my-6 grid grid-rows-[20px_8rem_1fr]",

        )} >
            <div className="w-32 h-32 mx-6 rounded-lg z-[1] bg-secondary/50 row-start-1 row-end-3 col-start-1" />
            <div className="border border-secondary/50 p-6 rounded-xl grid gap-6 items-start row-start-2 row-end-4 col-start-1 grid-rows-subgrid">
                <div />
                <div className="grid grid-cols-2 sm:grid-cols-[1fr_2fr] gap-4">
                    <div className="h-8 w-20 rounded-md bg-secondary/50 col-span-full" />
                    <div className="h-6 w-80 rounded-md bg-secondary/50 col-span-full" />
                    {Array(4).fill("").map((_, i) => (
                        <StatsSkeleton key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const RepoCardSkeleton = () => {
    return (
        <div className={cn(
            shimmer,
            "relative overflow-hidden rounded-xl p-5 border *:rounded-md *:bg-secondary/50",
        )}>
            <div className="h-7 w-40" />
            <div className="h-6 w-56 mt-2" />
            <div className="h-5 w-full mt-4" />
        </div>
    )
}

const RepoListSkeleton = ({length = NO_OF_REPOS}: { length?: number }) => {
    return (
        <div className="space-y-6">
            <div className="h-[30px] w-60 rounded-md bg-secondary/50" />
            {Array.from({ length }).map((_, i) => (
                <RepoCardSkeleton key={i} />
            ))}
        </div>
    )
}

export const RepoSkeleton = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <RepoListSkeleton />
            <RepoListSkeleton />
        </div>
    )
}

const SmallCardSkeleton = () => {
    return (
        <div className={cn(
            shimmer,
            "relative overflow-hidden rounded-md shadow my-6 grid grid-cols-[auto_1fr] gap-x-6",
            "*:bg-secondary/50 *:rounded-md",
        )} >
            <div className="w-16 h-16 row-start-1 row-end-3" />
            <div className="h-8 w-20 col-start-2 row-start-1" />
            <div className="h-5 w-1/2 mt-1 col-start-2 row-start-2" />
        </div>
    )
}

export const RepoLoadingSkeleton = () => {
    return (
        <>
            <SmallCardSkeleton />
            <RepoListSkeleton length={7}/>
        </>
    )
}
