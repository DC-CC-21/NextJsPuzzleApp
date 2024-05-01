import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex h-[100%] flex-1 flex-col bg-amber-100 p-5">
            <h2 className="p-2 text-center text-2xl">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </h2>
            <img src="404.png" alt="404" />
            <Link
                href="/"
                className="m-4 mx-auto w-2/3 rounded-xl border-4 border-green-500 bg-gradient-to-tr from-slate-100 via-blue-300 to-slate-100 p-2 text-center text-gray-800"
            >
                Go back home
            </Link>
        </div>
    );
}
