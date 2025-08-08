import { SideBar3 } from "@/components/NavBar";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-row">
      <SideBar3 className="min-w-60" />
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}