import { CardContent } from "@/components/ui/card";
import { BaseUserCard } from "@/components/user/base-card";
import { StatsCard } from "@/components/user/stats-card";
import { fetchUserData, fetchUserStarCount } from "@/lib/fetchUserDetails";
import Image from "next/image";
import { Suspense } from "react";
import { ForkStatsCard } from "@/components/user/suspense-fork";
import { StatsSkeleton } from "@/components/ui/skeletons";
import { NoUser } from "@/components/user/no-user";

export const UserCard = async ({ query }: { query: string }) => {
    const [user, userStars] = await Promise.all([
        fetchUserData(query),
        fetchUserStarCount(query),
    ]);
    if (!user || !userStars) return <NoUser />;
    return (
        <BaseUserCard>
            <CardContent className="p-0 grid grid-rows-[20px_8rem_1fr]">
                <Image
                    width={564}
                    height={564}
                    src={user.avatarUrl}
                    alt="Profile"
                    priority
                    loading="eager"
                    className="w-32 h-32 mx-6 rounded-lg z-10 shadow-sm border border-primary row-start-1 row-end-3 col-start-1"
                />
                <div className="p-6 border border-muted-foreground/30 rounded-xl grid gap-6 items-start row-start-2 row-end-4 col-start-1 grid-rows-subgrid">
                    <div />
                    <div className="grid grid-cols-2 sm:grid-cols-[1fr_2fr] gap-4">
                        <h2 className="text-2xl font-bold col-span-full">{user.name}</h2>
                        <p className="text-gray-600 col-span-full text-balance">{
                            user.bio ??
                            <span className="italic text-gray-400">~No bio... YOU must think very highly of yourself~</span>
                        }</p>
                        <StatsCard icon={"book"} label="Repositories" value={user.publicRepos} />
                        <StatsCard icon={"users"} label="Followers" value={user.followers} />
                        <Suspense fallback={<StatsSkeleton animate />}>
                            <ForkStatsCard query={user.username} />
                        </Suspense>
                        <StatsCard icon={"star"} label="Stars" value={userStars.totalStars} />
                    </div>
                </div>
            </CardContent>
        </BaseUserCard>
    );
}
