import { cn } from "@/lib/utils";
import WishlistButton from "./WishlistButton";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  alt?: string;
  className?: string;
  showWishlist?: boolean;
  isWishlisted?: boolean;
  onWishlistToggle?: (productId: string, isWishlisted: boolean) => void;
}

const ProductCard = ({
  id,
  imageUrl,
  title,
  price,
  alt = "",
  className,
  showWishlist = true,
  isWishlisted = false,
  onWishlistToggle
}: ProductCardProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      {/* Product Image Container */}
      <div className="relative w-full group">
        <Link to={`/product/${id}`} className="block w-full">
          <div className="relative w-full aspect-[421/553] overflow-hidden">
            <img
              src={imageUrl}
              alt={alt || title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        
        {/* Wishlist Button */}
        {showWishlist && (
          <div className="absolute top-2.5 right-2.5">
            <WishlistButton
              productId={id}
              isWishlisted={isWishlisted}
              onToggle={onWishlistToggle}
              className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white/90"
            />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-black text-center font-normal text-xl leading-[30px] uppercase">
          <span style={{ 
            fontFamily: 'Helvetica, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            color: 'rgba(0,0,0,1)'
          }}>
            {title}
          </span>
        </h3>
        <p className="text-black text-center font-normal text-xl leading-[30px] uppercase mt-1">
          <span style={{ 
            fontFamily: 'Helvetica, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            color: 'rgba(0,0,0,1)'
          }}>
            {price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
