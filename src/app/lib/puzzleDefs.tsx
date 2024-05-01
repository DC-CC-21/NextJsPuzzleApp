const fs = require("fs");
const path = require("path");
const puzzlePath = "./public/puzzles";

export function getAllDirectories() {
    return fs
        .readdirSync(puzzlePath, { withFileTypes: true })
        .filter((dirent: any) => dirent.isDirectory())
        .map((dirent: any) => dirent.name);
}
export function importAllOfType(type: string): string[] {
    console.log(__dirname)
    console.log(process.cwd())
    const publicDir = path.join(process.cwd(), "public");
    const puzzleDir = path.join(publicDir, "puzzles");
    const files = fs.readdirSync(path.join(puzzleDir, type));
    return files.filter((file: string) => {
        const fileExtension = path.extname(file).toLowerCase();
        return (
            // fileExtension === ".png" ||
            // fileExtension === ".jpg" ||
            // fileExtension === ".jpeg" ||
            // fileExtension === ".svg" ||
            fileExtension === ".webp"
        );
    });
}

export function fetchPuzzles() {}
