export default function runCanvas() {
    const canvas = document.getElementById("mycanvas");
    console.log(canvas);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, canvas.width - 50, canvas.height - 50);

    return "";
}
