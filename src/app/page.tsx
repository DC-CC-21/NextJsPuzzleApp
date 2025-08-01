import PuzzleCards from "@/app/ui/puzzleCards";
import Header from "./ui/header";
import Footer from "./ui/footer";
import PuzzleCard from "@/app/ui/puzzleCard";

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-amber-100">
                <div className="mx-auto grid max-w-[1200px] gap-2 p-2 text-center text-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <PuzzleCards href="/puzzles" />
                    {/* <Link href="/create?type=camera">
                        <PuzzleImage image="camera" index={0} />
                    </Link> */}
                    <PuzzleCard
                        href="/puzzles/custom"
                        image="custom"
                        index={0}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
