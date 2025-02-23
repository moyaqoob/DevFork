import Form from 'next/form';
import Icon from "@/components/icon";
import { ThemeChange } from "@/components/ui/theme-change";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Form action="/" className="grid grid-cols-1 grid-flow-col gap-2 items-center">
                <div className="has-[:focus]:text-muted-foreground animate-rotate flex items-center gap-2 w-full rounded-lg border border-transparent bg-shiny-border text-secondary px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1">
                    <Icon icon="search" className="text-secondary-foreground" size={24} />
                    <input name="name" placeholder="Enter your github username" autoComplete="off" className="text-foreground bg-transparent w-full outline-none border-none" />
                </div>
                <ThemeChange />
            </Form>
            {children}
        </>
    );
}
