import BrandLogosSection from "./components/BrandLogosSection/BrandLogosSection";
import Testimonials from "./components/ClientTestimonials/Testimonials";
import Banner from "./components/HeroSection/Banner";
import Products from "./components/ProductsSection/Products";
import ShopByStyle from "./components/ShopByStyle/ShopByStyle";
import UnderLine from "./components/UnderLineSection/UnderLine";
import colors from "./utils/color";
import HomeData from "./utils/data";
export default function Home() {
  const data = HomeData;
  // console.log("data: ", data);
  return (
    <>
      <Banner slides={HomeData.BannerData} />
      <BrandLogosSection images={data.BrandLogosSection} />
      <Products heading={"NEW ARRIVALS"} products={data.NewArrivalsProducts} />
      <UnderLine />
      {/* <Products heading={"TOP SELLERS"} products={data.TopSellerProducts} /> */}
      <ShopByStyle heading={data.ShopByStyle.heading} images={data.ShopByStyle.images}/>
      <Testimonials heading={data.ClientTestimonials.heading} ClientTestimonialsData={data.ClientTestimonials.cards} />
    </>
  );
}
