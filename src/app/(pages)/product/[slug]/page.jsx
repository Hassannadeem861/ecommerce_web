import ProductDetail from "@/app/components/ProductDetailSection/ProductDetail.jsx";
import HomeData from "../../../utils/data.js";
import RelatedProducts from "@/app/components/RelatedProducts/RelatedProducts.jsx";

const ProductPage = async ({ params }) => {
  const { slug } = await params;
//   console.log("slug: ", slug);

  const product = HomeData?.NewArrivalsProducts.find(
    (item) => item.slug === slug,
  );

  return (
    <div className="container">
      <ProductDetail product={product} />
      <RelatedProducts heading={"YOU MIGHT ALSO LIKE"} product={HomeData?.NewArrivalsProducts} slug={slug}/>
    </div>
  );
};

export default ProductPage;
