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
        <div className='grid w-fit mx-auto items-center justify-items-center justify-center content-start gap-y-2 gap-x-4 mt-[35%] md:mt-[15%] grid-cols-2'>
            <Icon icon="github" className="col-span-full w-16 h-16  md:w-24 md:h-24" />
            <p className='text-xl md:text-3xl col-span-full'>Some issue with Github API</p>
            <Button
                className="justify-self-end"
                onClick={
                    () => reset()
                }
            >
                Try again
            </Button>
            <Link href="/" className="justify-self-start underline underline-offset-2 text-accent font-medium">Go back home</Link>
        </div>
    )
}
