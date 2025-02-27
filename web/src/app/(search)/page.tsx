import { Repo } from "@/components/repo";
import { Suspense } from "react";
import { RepoSkeleton, UserCardSkeleton } from "@/components/ui/skeletons";
import { UserCard } from '@/components/user/user-card';
import { fetchUserData } from "@/lib/fetchUserDetails";
import { Metadata, ResolvingMetadata,  } from "next";

type Props = {
    searchParams: Promise<{ name: string }>;
};

export async function generateMetadata({ searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const q = (await searchParams).name;
    if (!q) return {}
    const user = await fetchUserData(q);
    if (!user) return {};

    const description = `Check out ${q}'s profile on Git Fork`;
    const ogImage = (await parent).openGraph?.images || [];
    return {
        title: q,
        description,
        openGraph: {
            title: `${q}| View Github Repositories`,
            description,
            type: "website",
            siteName: "Git Fork",
            images: ogImage,
        }
    };
}

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
