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
    return fs.readdirSync(`${puzzlePath}/${type}`).filter((file: string) => {
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