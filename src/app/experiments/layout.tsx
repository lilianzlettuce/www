import { NavBar } from "@/components/NavBar";

export default function ExperimentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            <NavBar className="h-6" />
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}