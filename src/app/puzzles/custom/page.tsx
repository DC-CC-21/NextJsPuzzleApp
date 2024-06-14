"use_client";

import PieceSelection from "@/app/ui/PieceSelection";

export default function Custom() {
    return (
        <div className="mx-auto flex items-center flex-col">
            <div>Choose a Puzzle</div>
            <label>
                Choose File
                <input type="file" id="customFile" />
            </label>
            <canvas suppressHydrationWarning={true} className="border-2 border-black" id="customCanvas"></canvas>
            <PieceSelection image="custom" index="0" />
            <script src="/scripts/utils.js"></script>
            <script src="/scripts/custom.js"></script>
        </div>
    );
}
