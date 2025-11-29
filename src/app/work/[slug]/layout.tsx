import { SideBarMinimal } from "@/components/NavBar";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/*<NavBarGrid className="h-6 26" />*/}
      <div className="w-full min-h-screen flex flex-row">
        <SideBarMinimal className="" />
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}