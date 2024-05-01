import { getAllDirectories, importAllOfType } from "../lib/puzzleDefs";
import PuzzleCard from "./puzzleCard";

export default function PuzzleCards({ href }: { href: string }) {
    const images: Array<string> = getAllDirectories();
    return images.map((image: string) => {
        return <PuzzleCard key={image} image={image} index={0} href={href} />;
    });
}
