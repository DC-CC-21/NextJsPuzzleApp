// "use client";
import PieceSelection from "@/app/ui/PieceSelection";
import Canvas from "./Canvas";
// import { useState } from "react";

export default function Custom() {
    return (
        <div className="mx-auto flex flex-col items-center">
            <div className="p-2 text-3xl">Choose a Puzzle</div>
            {/* <Suspense> */}
            <div
                id="debug"
                className="w-[500px] [&>p]:max-h-[200px] [&>p]:w-[500px] [&>p]:overflow-y-auto [&>p]:break-all"
            >
            </div>
            {/* </Suspense> */}
            <label>
                Choose File
                <input type="file" id="customFile" />
            </label>
            <Canvas props={{}} />
            {/* <canvas
                suppressHydrationWarning={true}
                className="border-2 border-black"
                id="customCanvas"
            ></canvas> */}
            <PieceSelection image="custom" index="0" />
            {/* <script src="/scripts/utils.js"></script> */}
            {/* <script src="/scripts/custom.js"></script> */}
        </div>
    );
}
