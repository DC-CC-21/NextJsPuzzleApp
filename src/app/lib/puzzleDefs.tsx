const fs = require("fs");
const path = require("path");
const puzzlePath = "./public/puzzles";

export function getAllDirectories() {
    return fs
        .readdirSync(puzzlePath, { withFileTypes: true })
        .filter((dirent: any) => dirent.isDirectory())
        .map((dirent: any) => dirent.name);
}
// export function importAllOfType(type: string): string[] {
export async function importAllOfType(type: string): Promise<string[]> {
    // console.log(__dirname)
    // console.log(process.cwd())
    const publicDir = path.join(process.cwd(), "public");
    const puzzleDir = path.join(publicDir, "puzzles");
    const files = fs.readdirSync(path.join(puzzleDir, type));

    //! simulated slow response
    // await new Promise((resolve) => setTimeout(resolve, 5000));
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
