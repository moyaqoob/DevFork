import { API_URL } from "@/constant";

export interface Repo {
  name: string;
  description: string;
  fork: boolean;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  language: string;
  html_url: string;
}

export interface UserData {
  username: string;
  avatarUrl: string;
  name: string;
  bio: string;
  followers: number;
  publicRepos: number;
}

export interface UserStars {
  totalStars: number;
}

export interface UserRepos {
  forkedRepos: Repo[];
  notForkedRepos: Repo[];
}

export interface UserDetails extends UserData, UserStars, UserRepos {}

export const fetchUserData = async (
  username: string,
): Promise<UserData | null> => {
  const userUrl = `${API_URL}/${username}`;
  const userResponse = await fetch(userUrl, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 5,
    },
  });
  if (!userResponse.ok) return null;
  const userData = await userResponse.json();

  return {
    username: userData.login,
    avatarUrl: userData.avatar_url,
    name: userData.name,
    bio: userData.bio,
    followers: userData.followers,
    publicRepos: userData.public_repos,
  };
};

export const fetchUserStarCount = async (
  username: string,
): Promise<UserStars | null> => {
  const starsUrl = `${API_URL}/${username}/starred?page=1&per_page=1`;
  const starsResponse = await fetch(starsUrl, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 5,
    },
  });
  if (!starsResponse.ok) return null;
  const linkHeader = starsResponse.headers.get("link");
  if (!linkHeader) return { totalStars: 0 };

  const lastPageLink = linkHeader
    .split(",")
    .find((link) => link.includes('rel="last"'));
  if (!lastPageLink) throw new Error("No last page link found");

  const noOfStars = new URLSearchParams(
    lastPageLink.split("?")[1].split(">")[0],
  ).get("page");
  if (!noOfStars) throw new Error("No no of stars found");

  return {
    totalStars: Number(noOfStars),
  };
};

export const fetchUserRepos = async (
  username: string,
): Promise<UserRepos | null> => {
  const reposUrl = `${API_URL}/${username}/repos`;
  const perPage = 100;

  const userData = await fetchUserData(username);
  if (!userData) return null;
  const totalRepoPages = Math.ceil(userData.publicRepos / perPage);

  const repoRequests = Array.from({ length: totalRepoPages }, async (_, i) => {
    const res = await fetch(
      `${reposUrl}?page=${i + 1}&per_page=${perPage}&sort=updated`,
      {
        cache: "force-cache",
        next: {
          revalidate: 60 * 5,
        },
      },
    );
    return await res.json();
  });

  const repoResponses = await Promise.allSettled(repoRequests);

  const allRepos = repoResponses
    .flatMap((res) => {
      if (res.status === "fulfilled") {
        return res.value;
      }
      return [];
    })
    .reduce<{ forkedRepos: Repo[]; notForkedRepos: Repo[] }>(
      (acc, curr) => {
        const repo = {
          name: curr.name,
          description: curr.description,
          fork: curr.fork,
          forks_count: curr.forks_count,
          stargazers_count: curr.stargazers_count,
          updated_at: curr.updated_at,
          language: curr.language,
          html_url: curr.html_url,
        };
        if (repo.fork) {
          acc.forkedRepos.push(repo);
        } else {
          acc.notForkedRepos.push(repo);
        }
        return acc;
      },
      { forkedRepos: [], notForkedRepos: [] },
    );
  return allRepos;
};
