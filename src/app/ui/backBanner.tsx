"use client";
import { useRouter } from "next/navigation";

export default function BackBanner() {
    let router = useRouter();
    const goBack = () => {
        router.back();
    };

    return (
        <div className="sticky top-0 bg-green-200">
            <button
                onClick={() => {
                    goBack();
                }}
            >
                <img
                    className="p-2"
                    src="/puzzles/backButton.png"
                    width={60}
                    height={50}
                    alt="back button"
                />
            </button>
        </div>
    );
}
