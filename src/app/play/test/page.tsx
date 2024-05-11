"use client";
export default function Play() {
    return (
        <div className="max-h-[100vh] w-screen select-none overflow-hidden bg-slate-300">
            <canvas id="mycanvas" suppressHydrationWarning={true}></canvas>
            {/* <canvas
                id="createCanvas"
                suppressHydrationWarning={true}
                className="hidden"
            ></canvas> */}
            <script src="/scripts/utils.js"></script>
            <script src="/scripts/test.js"></script>
            {/* <script src="/scripts/Piece.js"></script>
            <script src="/scripts/sketch.js"></script>
            <script src="/scripts/events.js"></script> */}
        </div>
    );
}
