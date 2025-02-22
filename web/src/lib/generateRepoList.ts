import { REPO_TITLE, REPO_TYPE } from "@/constant";
import { Repo, UserRepos } from "@/lib/fetchUserDetails";

export type RepoListType = {
  repos: Repo[];
  title: string;
  forked: boolean;
};

export default function generateRepoList(
  repoType: string,
  repos: UserRepos,
): RepoListType {
  if (repoType === REPO_TYPE.original) {
    return {
      repos: repos.notForkedRepos,
      title: REPO_TITLE.original,
      forked: false,
    };
  }
  return {
    repos: repos.forkedRepos,
    title: REPO_TITLE.forked,
    forked: true,
  };
}
