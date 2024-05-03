export default function Footer() {
    return (
        <div className="flex flex-col items-center bg-green-400 p-2 md:grid md:grid-cols-2">
            <a href="/">
                <img
                    className="rounded-lg"
                    src="/puzzles/logo_xsmall.webp"
                    alt="logo"
                    width="50"
                    height="20"
                />
            </a>
            <p>©{new Date().getFullYear()} DC-CC-21</p>
            <a href="/about">About</a>
            <a href="/">Home</a>
        </div>
    );
}
