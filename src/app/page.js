import BrandLogosSection from "./components/BrandLogosSection/BrandLogosSection";
import Banner from "./components/HeroSection/Banner";
import Products from "./components/ProductsSection/Products";
import HomeData from "./utils/data";
export default function Home() {
  const data = HomeData;
  // console.log("data: ", data);
  return (
    <>
      <Banner slides={HomeData.BannerData} />
      <BrandLogosSection images={data.BrandLogosSection} />
      <Products />
    </>
  );
}
