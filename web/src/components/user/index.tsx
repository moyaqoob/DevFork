import { SmallUserCard } from "@/components/user/small-card"
import { UserCard } from "@/components/user/user-card"
import { fetchUserData, fetchUserStarCount } from "@/lib/fetchUserDetails";

export const User = async ({ query, small }: { query: string, small?: boolean }) => {
    await new Promise(r => setTimeout(r, 1000));
    const user = await fetchUserData(query);
    const userStars = await fetchUserStarCount(query);

    if (small) {
        return (
            <SmallUserCard user={user} userStars={userStars} />
        )
    }

    return (
        <UserCard user={user} userStars={userStars} />
    )
}
