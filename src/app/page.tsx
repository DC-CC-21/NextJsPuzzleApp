import Header from "./ui/header";
import PuzzleCards from "./ui/puzzleCards";

export default function Home() {
    return (
        <main>
            <div className="grid gap-2 bg-amber-100 p-2 text-center text-2xl sm:grid-cols-2 md:grid-cols-3">
                <PuzzleCards href="/puzzles" />
            </div>
        </main>
    );
}
