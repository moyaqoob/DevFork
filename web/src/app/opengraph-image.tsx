import Icon from '@/components/icon'
import { ImageResponse } from 'next/og'

export const alt = 'Git Fork'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {


    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 80,
                    background: 'white',
                    width: 1200,
                    height: 630,
                    display: 'grid',
                    padding: 28
                }}
            >
                <h1 style={{ alignSelf: 'end', fontSize: 48 }}>Git Fork</h1>
                <p>GitHub Data, Simplified</p>
                <Icon icon='gitFork' style={{ width: 600, height: 600, gridRow: '1 / 3', gridColumn: 2, alignSelf: 'center' }} />
            </div >
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
