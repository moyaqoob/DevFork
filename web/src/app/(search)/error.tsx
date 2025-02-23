'use client'
import Icon from "@/components/icon"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Error({
    reset,
}: {
    reset: () => void
}) {

    return (
        <div className='grid w-fit mx-auto items-center justify-items-center justify-center content-start gap-2 mt-[15%] grid-cols-2'>
            <Icon icon="github" size={100} className="col-span-full" />
            <p className='text-3xl col-span-full'>User does not exist</p>
            <Button
                className="justify-self-end"
                onClick={
                    () => reset()
                }
            >
                Try again
            </Button>
            <Link href="/" className="underline underline-offset-2 text-blue-400 font-medium">Go back home</Link>
        </div>
    )
}
