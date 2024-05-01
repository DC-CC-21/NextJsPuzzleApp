import Link from "next/link";
export default function Header() {
    return (
        <div className="flex min-h-20 flex-row bg-green-400">
            <Link href="/">
                <img
                    className="size-50 m-2 rounded-3xl"
                    src="/puzzles/logo_xsmall.webp"
                    alt="logo"
                    width="80"
                    height="80"
                />
            </Link>
            <h1 className="my-auto ml-2 text-center text-3xl font-bold">
                Puzzles
            </h1>
        </div>
    );
}
