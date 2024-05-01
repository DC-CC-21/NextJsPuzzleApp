import PuzzleImage from "@/app/ui/puzzleImage";
import PieceSelection from "@/app/ui/PieceSelection";
import { importAllOfType } from "@/app/lib/puzzleDefs";

export default function ChoosePieces({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    let puzzles = importAllOfType(searchParams?.type as string);
    let index = 0;
    if (searchParams?.index) {
        index = +searchParams?.index;
    }
    return (
        <div className="mx-auto mt-4 w-[90%] max-w-[400px]">
            <PuzzleImage image={searchParams?.type as string} index={index} />
            <PieceSelection
                image={searchParams?.type as string}
                index={puzzles[index]}
            />
        </div>
    );
}
