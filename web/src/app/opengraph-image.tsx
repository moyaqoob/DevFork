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
                    display: 'flex',
                    padding: 28
                }}
            >
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{ fontSize: 48 }}>Git Fork</div>
                    <div>GitHub Data,</div>
                    <div>Simplified</div>
                </div>
                <Icon icon='gitFork' style={{ width: 500, height: 500, alignSelf: 'center' }} />
            </div >
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
