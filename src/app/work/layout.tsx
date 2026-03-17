//import { SideBar3 } from "@/components/NavBar";

export async function generateMetadata() {
  const title = `Work | Lilian Zhao`;
  const description =  "All past and in progress works across code, design, art, and more.";

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [],
    },
  };
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-row">
      {children}
      {/*<SideBar3 className="min-w-60" />
      <div className="w-full">
        {children}
      </div>*/}
    </div>
  );
}