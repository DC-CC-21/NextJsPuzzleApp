import { importAllOfType } from "@/app/lib/puzzleDefs";
import PuzzleImageSkeleton from "./puzzleImageSkeleton";

export default async function PuzzleImage({
    image,
    index,
}: {
    image: string;
    index: number;
}) {
    let imagePath = "custom";
    if (image !== "custom") {
        imagePath = (await importAllOfType(image))[index];
    }
    return (
        // <div className="flex h-full flex-col overflow-hidden rounded-lg border-[3px] border-fuchsia-500 bg-blue-500">
            // <div className="h-full w-full">
            <PuzzleImageSkeleton image={image}>
                <img
                    src={
                        imagePath
                        ? imagePath.includes("custom")
                        ? "/puzzles/camera_medium.webp"
                        : `/puzzles/${image}/${imagePath}`
                        : "/puzzles/noImageFound_medium.webp"
                    }
                    alt={`No image found for ${image}`}
                    loading="lazy"
                    />
            </PuzzleImageSkeleton>
            // </div>
            // <h2 className="p-2 text-center">{image}</h2>
            // </div>
    );
}
