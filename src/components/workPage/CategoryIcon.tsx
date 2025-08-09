import { getCategoryIcon } from "@/lib/data";
import { ArtIcon, DesignIcon, DevIcon, SquareIcon, PixelatedXIcon } from "../svg/Icons";

// Component to render the appropriate icon for a category
const CategoryIcon = ({ 
    category, 
    className = "w-3 h-3", 
    strokeWidth = 0,
}: { 
    category: string; 
    className?: string; 
    strokeWidth?: number; 
}) => {
  const iconName = getCategoryIcon(category);
  
  switch (iconName) {
    case "DevIcon":
      return <DevIcon className={className} strokeWidth={strokeWidth} />;
    case "DesignIcon":
      return <DesignIcon className={className} strokeWidth={strokeWidth} />;
    case "ArtIcon":
      return <ArtIcon className={className} strokeWidth={strokeWidth} />;
    case "SquareIcon":
      return <SquareIcon className={className} strokeWidth={strokeWidth} />;
    case "PixelatedXIcon":
      return <PixelatedXIcon className={className} strokeWidth={strokeWidth} />;
    default:
      return null;
  }
};

export default CategoryIcon;