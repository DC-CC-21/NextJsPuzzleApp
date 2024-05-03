import BackBanner from "@/app/ui/backBanner";
import Header from "../ui/header";
import Footer from "../ui/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="h-[100%] flex-1 bg-amber-100">
                <BackBanner />
                {children}
            </div>
            <Footer />
        </>
    );
}
