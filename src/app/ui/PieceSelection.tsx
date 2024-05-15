"use client";
import { useState } from "react";
import clsx from "clsx";

export default function PieceSelection({
    image,
    index,
}: {
    image: string;
    index: string;
}) {
    const [pieceCount, setPieceCount] = useState(0);
    const [active, setActive] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <div className="mx-auto flex w-80 flex-row items-center gap-2 p-2">
                {[9, 25, 64, 100, 144, 196].map((pieceCount: number) => {
                    return (
                        <label
                            key={pieceCount}
                            className="flex w-full flex-row items-center text-lg"
                        >
                            <input
                                className="form-radio m-2 h-6 w-6 text-green-700 checked:bg-green-700"
                                type="radio"
                                name="pieces"
                                value={pieceCount}
                                onChange={(e) => {
                                    e.target.checked = true;
                                    setPieceCount(pieceCount);
                                    setActive(true);
                                }}
                            />
                            {pieceCount}
                        </label>
                    );
                })}
            </div>
            <a
                className={clsx(
                    "w-1/3 rounded-md border-2 p-2 text-center text-gray-400 hover:scale-105",
                    {
                        "pointer-events-none w-1/3 cursor-not-allowed border-gray-600  bg-gray-500":
                            !active,
                        "border-sky-500 bg-gradient-to-tl from-slate-300 via-blue-300 text-gray-800":
                            active,
                    },
                )}
                href={`/play?type=${image}&index=${index}&pieceCount=${pieceCount}`}
            >
                Play
            </a>
        </div>
    );
}
