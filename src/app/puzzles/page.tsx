import PuzzleCard from "@/app/ui/puzzleCard";
import { importAllOfType } from "@/app/lib/puzzleDefs";
import clsx from "clsx";
import Link from "next/link";

export default function Puzzles({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    let puzzleType = searchParams?.type;
    let puzzles: string[] = [];
    if (typeof puzzleType === "string") {
        puzzles = importAllOfType(puzzleType);
    }

    let HTMLContent;
    if (puzzles.length) {
        HTMLContent = puzzles.map((image: string, index: number) => {
            return (
                <PuzzleCard
                    key={`${image}${index}`}
                    image={puzzleType ? puzzleType.toString() : ""}
                    index={index}
                    href="/puzzles/pieces"
                />
            );
        });
    } else {
        HTMLContent = (
            <>
                <span className="mb-2 w-full border-b-2 border-b-black">
                    No Puzzles Found
                </span>
                <Link
                    className="rounded-xl border-4 border-green-500 bg-gradient-to-tr from-slate-100 via-blue-300 to-slate-100 p-2 text-center text-[0.8em] text-gray-800"
                    href="/"
                >
                    Choose New Category
                </Link>
            </>
        );
    }

    return (
        <main>
            {/* <div className={clsx("bg-amber-500", {
                "grid gap-2 bg-amber-100 p-2 text-center text-2xl sm:grid-cols-2 md:grid-cols-3": true
            })}> */}
            <div
                className={clsx(
                    {
                        "grid gap-2 bg-amber-100 sm:grid-cols-2 md:grid-cols-3":
                            puzzles.length > 0,
                        "flex flex-col items-center bg-amber-200":
                            puzzles.length === 0,
                    },
                    "p-2 text-center text-2xl",
                )}
            >
                {HTMLContent}
            </div>
        </main>
    );
}
