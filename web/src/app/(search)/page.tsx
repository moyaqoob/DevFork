import { Repo } from "@/components/repo";
import { Suspense } from "react";
import { RepoSkeleton, UserCardSkeleton } from "@/components/ui/skeletons";
import { UserCard } from '@/components/user/user-card';


export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ name: string }>;
}) {
    const q = (await searchParams).name;
    if (!q) return;

    return (
        <>
            <Suspense key={q + "user"} fallback={<UserCardSkeleton />}>
                <UserCard query={q} />
            </Suspense>
            <Suspense key={q + "repo"} fallback={<RepoSkeleton />}>
                <Repo query={q} />
            </Suspense>
        </>
    );
}
