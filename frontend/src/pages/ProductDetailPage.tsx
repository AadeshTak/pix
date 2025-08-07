import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WishlistButton from "@/components/WishlistButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock product data
const mockProductDetails = {
  "1": {
    id: "1",
    title: "SIGNATURE Collection Piece 1",
    price: "120000/-",
    description: "Exquisite craftsmanship meets timeless elegance in this signature piece from our premium collection.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/6714f073aacab712b21f60fbf4e61031c285fc0d?width=841",
      "https://api.builder.io/api/v1/image/assets/TEMP/0efc5ea89a5ee8e0294affd324731a2314beb84b?width=841",
      "https://api.builder.io/api/v1/image/assets/TEMP/bdbf39600435e40a6f9b6e8648985bdc886f117b?width=841"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    details: [
      "Premium fabric composition",
      "Hand-finished details",
      "Made in India",
      "Dry clean only"
    ]
  },
  "2": {
    id: "2",
    title: "SIGNATURE Collection Piece 2",
    price: "120000/-",
    description: "A masterpiece that embodies sophistication and luxury in every thread.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/0efc5ea89a5ee8e0294affd324731a2314beb84b?width=841",
      "https://api.builder.io/api/v1/image/assets/TEMP/6714f073aacab712b21f60fbf4e61031c285fc0d?width=841"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    details: [
      "Premium fabric composition",
      "Hand-finished details",
      "Made in India",
      "Dry clean only"
    ]
  }
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = id ? mockProductDetails[id as keyof typeof mockProductDetails] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/collection")}>
            Back to Collection
          </Button>
        </div>
      </div>
    );
  }

  const handleWishlistToggle = (productId: string, isWishlisted: boolean) => {
    setIsWishlisted(isWishlisted);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24">
        <div className="container mx-auto px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Product Gallery */}
            <div className="space-y-8">
              {/* Main Image */}
              <div className="relative aspect-[421/553] overflow-hidden bg-gray-100">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Wishlist Button */}
                <div className="absolute top-4 right-4">
                  <WishlistButton
                    productId={product.id}
                    isWishlisted={isWishlisted}
                    onToggle={handleWishlistToggle}
                    className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white/90"
                  />
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all",
                        currentImageIndex === index
                          ? "border-black"
                          : "border-gray-200 hover:border-gray-400"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              {/* Title and Price */}
              <div>
                <h1 
                  className="text-black font-normal uppercase mb-4"
                  style={{
                    fontSize: '32px',
                    fontFamily: 'Helvetica, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: 400,
                    lineHeight: '40px',
                    color: 'rgba(0,0,0,1)'
                  }}
                >
                  {product.title}
                </h1>
                <p 
                  className="text-black font-normal"
                  style={{
                    fontSize: '24px',
                    fontFamily: 'Helvetica, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: 400,
                    color: 'rgba(0,0,0,1)'
                  }}
                >
                  {product.price}
                </p>
              </div>

              {/* Description */}
              <div>
                <p 
                  className="text-gray-700"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Helvetica, -apple-system, Roboto, Helvetica, sans-serif',
                    lineHeight: '24px'
                  }}
                >
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-medium mb-3">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-4 py-2 border text-sm font-medium transition-all",
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-medium mb-3">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-4 py-2 border text-sm font-medium transition-all",
                        selectedColor === color
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-4">
                <Button 
                  className="w-full h-12 text-lg font-medium bg-black text-white hover:bg-gray-800"
                  disabled={!selectedSize || !selectedColor}
                >
                  ADD TO CART
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-lg font-medium border-black text-black hover:bg-gray-50"
                >
                  BUY NOW
                </Button>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="text-lg font-medium mb-3">Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li 
                      key={index}
                      className="text-gray-700"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Helvetica, -apple-system, Roboto, Helvetica, sans-serif',
                        lineHeight: '20px'
                      }}
                    >
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
