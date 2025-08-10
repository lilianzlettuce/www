import { NavBar, SideBar2, SideBar3 } from "@/components/NavBar";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/*<NavBar />*/}
      <div className="w-full min-h-screen flex flex-row">
        <SideBar2 className="min-w-60" />
        <div className="w-full">
            {children}
        </div>
      </div>
    </div>
  );
}