import { importAllOfType } from "@/app/lib/puzzleDefs";

export default function PuzzleImage({
    image,
    index,
}: {
    image: string;
    index: number;
}) {
    let imagePath = importAllOfType(image)[index]
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-lg border-[3px] border-fuchsia-500 bg-blue-500">
            <div className="h-full w-full">
                <img
                    src={imagePath?`/puzzles/${image}/${imagePath}` : "/puzzles/noImageFound_medium.webp"}
                    alt={`No image found for ${image}`}
                />
            </div>
            <h2 className="p-2 text-center">{image}</h2>
        </div>
    );
}
