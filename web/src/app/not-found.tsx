import Icon from '@/components/icon'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='grid justify-center justify-items-center content-start h-full gap-2 mt-[35%] md:mt-[15%]'>
            <h1 className='flex items-center gap-4 text-7xl md:text-[10rem] leading-[1.2] font-bold animate-pulse'>404<Icon icon='gitFork' /></h1>
            <p className='text-xl md:text-3xl'>Are you lost baby girl?</p>
            <p>You can head back to <Link href='/' className='underline underline-offset-2 text-accent font-medium'>home</Link></p>
        </div>
    )
}
