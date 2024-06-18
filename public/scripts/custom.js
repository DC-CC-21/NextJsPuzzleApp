const canvas = document.getElementById("customCanvas");

const ctx = canvas.getContext("2d");
let quality = 1;

setCanvasQuality(canvas, window.innerWidth, window.innerWidth);
setCanvasSize(canvas, canvas.width * 0.6, canvas.height * 0.6);
ctx.fillStyle = "#00ffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// document.getElementById("customFile").addEventListener("change", (event) => {
//     // const file = event.target.files[0];
//     // const url = URL.createObjectURL(file);
//     // const img = new Image();
//     // img.src = url;
//     // img.onload = () => {
//     //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     //     const data = canvas.toDataURL("image/jpeg", 1);
//     //     localStorage.setItem("customPuzzle", data);
//     // };
//     readImage(event.target);
// });
function readImage(input) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let imgSrc = "";
    if (input.value !== "") {
        imgSrc = window.URL.createObjectURL(input.files[0]);
    }
    const img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const data = canvas.toDataURL("image/jpeg", 1);
        localStorage.setItem("customPuzzle", data);
    };
    img.src = imgSrc;
}
