import ProductDetailInfo  from "@/app/components/ProductDetailSection/ProductDetail.jsx";
import HomeData from "../../../utils/data.js";
import RelatedProducts from "@/app/components/RelatedProducts/RelatedProducts.jsx";
import ProductTabs from "@/app/components/ProductTabs/ProductTabs.jsx";

const ProductPage = async ({ params }) => {
  const { slug } = await params;
 const data = HomeData;
  const product = HomeData?.NewArrivalsProducts.find(
    (item) => item.slug === slug,
  );

  return (
    <div className="container">
      <ProductDetailInfo  product={product} />
      <ProductTabs product={product} clientReviews={data.ClientTestimonials.cards} faqs={data.FAQs}/>
      <RelatedProducts heading={"YOU MIGHT ALSO LIKE"} product={HomeData?.NewArrivalsProducts} slug={slug}/>
    </div>
  );
};

export default ProductPage;
