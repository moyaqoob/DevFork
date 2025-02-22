import { fetchUserData, fetchUserRepos, fetchUserStarCount } from "@/lib/fetchUserDetails";
import { parseParams, parseSearchParams } from "@/lib/url-state";
import { redirect } from "next/navigation";
import generateRepoList from "@/lib/generateRepoList";
import pageMeta from "@/lib/pagination";
import { SmallUserCard } from "@/components/user/small-card";
import { RepoPagination } from "./repo-pagination";
import { RepoList } from "@/components/repo/repo-list";

export default async function Page(
    props: {
        params: Promise<Record<string, string>>
        searchParams: Promise<Record<string, string>>
    }) {
    const parsedParams = parseParams(await props.params);
    const parsedSearchParams = parseSearchParams(await props.searchParams);

    if (!parsedParams.isValid) {
        return (
            <h1>Something went wrong, path: {parsedParams.type}</h1>
        );
    }

    const { name: q, page } = parsedSearchParams;

    if (!q) {
        return (
            <h1>Something went wrong, no query</h1>
        );
    }

    await new Promise(r => setTimeout(r, 3000));
    const [user, userStars, repos] = await Promise.all([
        fetchUserData(q),
        fetchUserStarCount(q),
        fetchUserRepos(q),
    ]);
    const repoList = generateRepoList(parsedParams.type, repos);

    const { totalPages, currentPage, pageStart, pageEnd, isOutofbounds } = pageMeta(repoList.repos.length, page);
    if (isOutofbounds) {
        redirect(`/repos/${parsedParams.type}?name=${q}`);
    }

    repoList.repos = repoList.repos.slice(pageStart, pageEnd);
    return (
        <>
            <SmallUserCard user={user} userStars={userStars} />
            <RepoList
                title={repoList.title}
                repos={repoList.repos}
                forked={repoList.forked}
            />
            <RepoPagination
                currentPage={currentPage}
                totalPages={totalPages}
                params={parsedParams}
                searchParams={parsedSearchParams}
            />
        </>
    );
}
