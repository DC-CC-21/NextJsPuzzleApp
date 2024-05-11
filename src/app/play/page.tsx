"use client";
import Link from "next/link";

export default function Play() {
    return (
        <div className="max-h-[100vh] w-screen select-none overflow-hidden bg-slate-300">
            <div className="flex max-h-20 flex-row justify-between bg-slate-300 pr-2 [&>label]:flex [&>label]:flex-row [&>label]:items-center [&>label]:p-2">
                <label>
                    Show Minimap:{" "}
                    <input
                        className="ml-2 size-5 rounded-md text-green-600 checked:bg-green-600"
                        type="checkbox"
                        id="minimap"
                    />
                </label>
                <label>
                    Edges Only:{" "}
                    <input
                        className="ml-2 size-5 rounded-md text-green-600 checked:bg-green-600"
                        type="checkbox"
                        id="check"
                    />
                </label>
                <label className="!hidden">
                    Fps:{" "}
                    <span id="fps" className="text-xl text-green-700">
                        245
                    </span>
                </label>
                <button
                    id="shuffle"
                    type="button"
                    className="my-auto flex h-5 items-center justify-center rounded-md bg-slate-500 p-4 hover:bg-slate-400 active:bg-slate-500"
                >
                    Shuffle
                </button>
            </div>
            <div
                id="finish"
                className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded-2xl border-2 border-black bg-slate-100 p-2 text-xl"
            >
                <p>Congratulations</p>
                <Link
                    href="/"
                    className=" rounded-xl border-2 border-purple-400 bg-green-400 p-2"
                >
                    Choose another puzzle
                </Link>
            </div>
            <canvas id="mycanvas" suppressHydrationWarning={true}></canvas>
            <canvas
                id="createCanvas"
                suppressHydrationWarning={true}
                className="hidden"
            ></canvas>
            <script src="/scripts/utils.js"></script>
            <script src="/scripts/Piece.js"></script>
            <script src="/scripts/sketch.js"></script>
            <script src="/scripts/events.js"></script>
        </div>
    );
}
