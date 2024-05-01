import BackBanner from "../ui/backBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[100%] flex-1 bg-amber-100">
            <BackBanner />
            {children}
        </div>
    );
}
