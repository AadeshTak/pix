import { cn } from "@/lib/utils";
import { useState } from "react";

interface WishlistButtonProps {
  className?: string;
  productId?: string;
  isWishlisted?: boolean;
  onToggle?: (productId: string, isWishlisted: boolean) => void;
}

const WishlistButton = ({ 
  className, 
  productId = "",
  isWishlisted = false,
  onToggle 
}: WishlistButtonProps) => {
  const [isLiked, setIsLiked] = useState(isWishlisted);

  const handleClick = () => {
    const newState = !isLiked;
    setIsLiked(newState);
    onToggle?.(productId, newState);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center justify-center transition-all duration-200 hover:scale-110",
        className
      )}
      aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
    >
      <svg
        width="21"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M1.52148 7.14813C1.52167 14.7411 7.59578 18.5377 12.1515 21.9545C16.3276 18.5377 22.4019 14.741 22.4019 7.14823C22.4019 -0.444532 12.1515 0.518484 12.1515 6.389C12.1515 0.138746 1.5213 -0.444835 1.52148 7.14813Z"
          stroke="black"
          strokeWidth="3"
          strokeLinejoin="round"
          fill={isLiked ? "black" : "none"}
        />
      </svg>
    </button>
  );
};

export default WishlistButton;
