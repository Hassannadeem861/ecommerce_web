import ProductDetail from "@/app/components/ProductDetailSection/ProductDetail.jsx";
import HomeData from "../../../utils/data.js";

const ProductPage = async ({ params }) => {
  const { slug } = await params;
//   console.log("slug: ", slug);

  const product = HomeData?.NewArrivalsProducts.find(
    (item) => item.slug === slug,
  );

  return (
    <div className="container">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
