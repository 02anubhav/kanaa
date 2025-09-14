import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

export default function Home() {
  const { query } = useSearch(); 

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-neutral-700">Most Popular</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id}>
              <ProductCard.Image src={p.image} alt={p.title} />

              {p.rating && (
                <ProductCard.Rating rating={p.rating} reviews={p.reviews} />
              )}

              {p.badges && (
                <ProductCard.Badges>
                  {p.badges.map((b, i) => (
                    <ProductCard.Badge
                      key={i}
                      color={b.color || "bg-gray-200 text-gray-800"}
                    >
                      {b.label}
                    </ProductCard.Badge>
                  ))}
                </ProductCard.Badges>
              )}

              <ProductCard.Title>{p.title}</ProductCard.Title>

              <ProductCard.Price>﷼ {p.price}</ProductCard.Price>

              {p.delivery && (
                <ProductCard.Delivery
                  date={p.delivery.date}
                  timeLeft={p.delivery.timeLeft}
                />
              )}

              <ProductCard.Button>
                <Link to={`/product/${p.id}`}>View Details</Link>
              </ProductCard.Button>
            </ProductCard>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
}
