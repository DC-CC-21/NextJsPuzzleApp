import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex min-h-10 select-none flex-row items-center bg-green-400">
                <Link href="/">
                    <img
                        className="ml-2 rounded-3xl"
                        src="/puzzles/logo_xsmall.webp"
                        alt="logo"
                        width="25"
                        height="25"
                    />
                </Link>
                <h1 className="my-auto ml-2 text-center font-bold">Puzzles</h1>
            </div>
            <div className="flex-1 bg-amber-100">{children}</div>
        </>
    );
}
