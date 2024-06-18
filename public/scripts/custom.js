window.onload = () => {
    window.onerror = function (msg, url, lineNo, columnNo, error) {
        document.getElementById("debug").innerHTML += 
            `<span style="background-color:#ffa7a7; padding:5px; border:1px solid black; margin:15px 15px; display:block;">${msg} ${url} ${lineNo} ${columnNo} ${error}</span>`;
    };

    const debug = document.getElementById("debug");
    const canvas = document.getElementById("customCanvas");

    const ctx = canvas.getContext("2d");
    let quality = 1;

    setCanvasQuality(canvas, window.innerWidth, window.innerWidth, quality);
    setCanvasSize(canvas, canvas.width * 0.6, canvas.height * 0.6);
    ctx.fillStyle = "#00ffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    document
        .getElementById("customFile")
        .addEventListener("change", (event) => {
            debug.innerHTML += "Running Listener";
            readImage(event.target);
        });
    function readImage(input) {
        console.log(input.value);
        if (input.files && input.files[0]) {
            debug.innerHTML += "File Selected";

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00ffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const img = new Image();
            img.src = window.URL.createObjectURL(input.files[0]);
            debug.innerHTML += `<a href="${img.src}">${img.src}</a>`;

            img.onload = function () {
                debug.innerHTML += "File Loaded";

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const data = canvas.toDataURL("image/jpeg", 1);
                localStorage.setItem("customPuzzle", data);

                debug.innerHTML += `<p>${data}</p>`;
            };
        } else {
            debug.innerHTML += "No File Selected";
        }
    }
};
