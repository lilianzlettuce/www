import { SideBar3, NavBarMinimal } from "@/components/NavBar";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <SideBar3 className="hidden sm:block min-w-50" />
      <NavBarMinimal className="block sm:hidden h-8 sm:h-6 absolute inset-0 top-0 left-0"/>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}