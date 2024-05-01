import PuzzleCards from "@/app/ui/puzzleCards";

export default function Home() {
    return (
        <main className="flex-1 bg-amber-100">
            <div className="mx-auto grid max-w-[1200px] gap-2 p-2 text-center text-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <PuzzleCards href="/puzzles" />
            </div>
        </main>
    );
}
