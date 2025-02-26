import { fetchUserData } from '@/lib/fetchUserDetails';
import { ImageResponse } from 'next/og'

export const alt = 'Git Fork'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ searchParams }: { searchParams: { name: string } }) {

    const q =  searchParams.name;

    if (!q) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 128,
                        background: 'white',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    Git Fork
                </div>
            ),
            // ImageResponse options
            {
                ...size,
            }
        )
    }
    const user = await fetchUserData(q);
    if (!user) return;
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    alignItems: 'center',
                }}
            >
                <p>{user.name}</p>
                <img src={user.avatarUrl} alt={user.name} />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
