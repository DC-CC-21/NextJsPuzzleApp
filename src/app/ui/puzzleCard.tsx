import PuzzleImage from "@/app/ui/puzzleImage";
import Link from "next/link";

export default function PuzzleCard({
    image,
    index,
    href,
}: {
    image: string;
    index: number;
    href: string;
}) {
    return (
        <Link
            className="rounded-lg  hover:scale-[1.03] hover:bg-blue-400 lg:hover:scale-[1.01]"
            href={
                href.includes("pieces")
                    ? `${href}?type=${image}&index=${index}`
                    : `${href}?type=${image}`
            }
            aria-label="Puzzle Image"
        >
            <PuzzleImage image={image} index={index} />
        </Link>
    );
}
