const HomeData = {
  BannerData: [
    {
      heading: (
        <>
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </>
      ),
      description: (
        <>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense
          of style
        </>
      ),
      btnText: <>Shop Now</>,
      image: "/assests/home/banner/bannerImg2.png",
    },
    {
      heading: (
        <>
          NEW ARRIVALS <br /> FOR THIS <br /> SEASON
        </>
      ),
      description: (
        <>
          Discover our latest collection featuring trendy designs and
          premium quality fabrics for every occasion
        </>
      ),
      btnText: <>Explore Now</>,
      image: "/assests/home/banner/bannerImg2.png",
    },
  ],

  BrandLogosSection:[
    "/assests/home/BrandLogosSection/image1.webp",
    "/assests/home/BrandLogosSection/image2.webp",
    "/assests/home/BrandLogosSection/image3.webp",
    "/assests/home/BrandLogosSection/image3.webp",
    // "/assests/home/BrandLogosSection/image4.webp",
    "/assests/home/BrandLogosSection/image5.webp",
  ],

    NewArrivalsProducts: [
    {
      image: "/assests/home/products/tshirt-tape-details.png",
      title: "T-shirt with Tape Details",
      rating: 4.5,        // number rakho, taake stars dynamically calculate ho sakein (5 stars mein se filled kitne)
      maxRating: 5,
      price: 120,
      oldPrice: null,      // discount nahi hai is product pe, isliye null
      discountPercent: null,
    },
    {
      image: "/assests/home/products/skinny-fit-jeans.png",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      maxRating: 5,
      price: 240,
      oldPrice: 260,
      discountPercent: 20,
    },
    {
      image: "/assests/home/products/checkered-shirt.png",
      title: "Checkered Shirt",
      rating: 4.5,
      maxRating: 5,
      price: 180,
      oldPrice: null,
      discountPercent: null,
    },
    {
      image: "/assests/home/products/sleeve-striped-tshirt.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      maxRating: 5,
      price: 130,
      oldPrice: 160,
      discountPercent: 30,
    },
  ],
};

export default HomeData;