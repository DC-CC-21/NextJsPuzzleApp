"use client";
import { useEffect, useRef } from "react";
import { setCanvasQuality, setCanvasSize } from "@/app/lib/canvasUtils";

function readImage(
    input: HTMLInputElement,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
) {
    if (input.files && input.files[0]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const img = new Image();
        img.src = window.URL.createObjectURL(input.files[0]);

        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const data = canvas.toDataURL("image/jpeg", 1);
            localStorage.setItem("customPuzzle", data);
        };
    }
}

type Props = React.CanvasHTMLAttributes<HTMLCanvasElement>;
function Canvas({ props }: { props: Props }) {
    const canvasRef: any = useRef(null);
    const quality = 1;

    useEffect(() => {
        const canvas = canvasRef.current;
        setCanvasQuality(canvas, window.innerWidth, window.innerWidth, quality);
        setCanvasSize(canvas, canvas.width * 0.6, canvas.height * 0.6);
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#00ffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let customFileEl = document.getElementById(
            "customFile",
        ) as HTMLInputElement;
        customFileEl.addEventListener("change", (e) => {
            console.log("readImage");
            readImage(e.target as HTMLInputElement, ctx, canvas);
        });
    });

    return <canvas ref={canvasRef} {...props} />;
}
export default Canvas;
