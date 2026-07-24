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
          designed to bring out your individuality and cater to your sense of
          style
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
          Discover our latest collection featuring trendy designs and premium
          quality fabrics for every occasion
        </>
      ),
      btnText: <>Explore Now</>,
      image: "/assests/home/banner/bannerImg2.png",
    },
  ],

  BrandLogosSection: [
    "/assests/home/BrandLogosSection/image1.webp",
    "/assests/home/BrandLogosSection/image2.webp",
    "/assests/home/BrandLogosSection/image3.webp",
    "/assests/home/BrandLogosSection/image3.webp",
    // "/assests/home/BrandLogosSection/image4.webp",
    "/assests/home/BrandLogosSection/image5.webp",
  ],

  NewArrivalsProducts: [
    {
      id: 1,
      image: "/assests/home/NewArrivalsProducts/image1.png",
      title: "T-shirt with Tape Details",
      rating: 4.5, // number rakho, taake stars dynamically calculate ho sakein (5 stars mein se filled kitne)
      maxRating: 5,
      price: 120,
      oldPrice: null, // discount nahi hai is product pe, isliye null
      discountPercent: null,
    },
    {
      id: 2,
      image: "/assests/home/NewArrivalsProducts/image2.png",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      maxRating: 5,
      price: 240,
      oldPrice: 260,
      discountPercent: 20,
    },
    {
      id: 3,
      image: "/assests/home/NewArrivalsProducts/image3.png",
      title: "Checkered Shirt",
      rating: 4.5,
      maxRating: 5,
      price: 180,
      oldPrice: null,
      discountPercent: null,
    },
    {
      id: 4,
      image: "/assests/home/NewArrivalsProducts/image1.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      maxRating: 5,
      price: 130,
      oldPrice: 160,
      discountPercent: 30,
    },

    {
      id: 5,
      image: "/assests/home/NewArrivalsProducts/image2.png",
      title: "Oversized Graphic Tee",
      rating: 4.6,
      maxRating: 5,
      price: 95,
      oldPrice: 120,
      discountPercent: 21,
    },
    {
      id: 6,
      image: "/assests/home/NewArrivalsProducts/image3.png",
      title: "Vintage Denim Jacket",
      rating: 4.9,
      maxRating: 5,
      price: 280,
      oldPrice: 340,
      discountPercent: 18,
    },
    {
      id: 7,
      image: "/assests/home/NewArrivalsProducts/image4.png",
      title: "Casual Linen Shirt",
      rating: 4.5,
      maxRating: 5,
      price: 160,
      oldPrice: null,
      discountPercent: null,
    },
    {
      id: 8,
      image: "/assests/home/NewArrivalsProducts/image2.png",
      title: "Athletic Jogger Pants",
      rating: 4.7,
      maxRating: 5,
      price: 185,
      oldPrice: 230,
      discountPercent: 20,
    },
  ],

  TopSellerProducts: [
    {
      id: 1,
      image: "/assests/home/TopSellerProducts/image1.png",
      title: "T-shirt with Tape Details",
      rating: 4.5, // number rakho, taake stars dynamically calculate ho sakein (5 stars mein se filled kitne)
      maxRating: 5,
      price: 120,
      oldPrice: null, // discount nahi hai is product pe, isliye null
      discountPercent: null,
    },
    {
      id: 2,
      image: "/assests/home/TopSellerProducts/image2.png",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      maxRating: 5,
      price: 240,
      oldPrice: 260,
      discountPercent: 20,
    },
    {
      id: 3,
      image: "/assests/home/TopSellerProducts/image3.png",
      title: "Checkered Shirt",
      rating: 4.5,
      maxRating: 5,
      price: 180,
      oldPrice: null,
      discountPercent: null,
    },
    {
      id: 4,
      image: "/assests/home/TopSellerProducts/image1.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      maxRating: 5,
      price: 130,
      oldPrice: 160,
      discountPercent: 30,
    },

    {
      id: 5,
      image: "/assests/home/TopSellerProducts/image2.png",
      title: "Oversized Graphic Tee",
      rating: 4.6,
      maxRating: 5,
      price: 95,
      oldPrice: 120,
      discountPercent: 21,
    },
    {
      id: 6,
      image: "/assests/home/TopSellerProducts/image3.png",
      title: "Vintage Denim Jacket",
      rating: 4.9,
      maxRating: 5,
      price: 280,
      oldPrice: 340,
      discountPercent: 18,
    },
    {
      id: 7,
      image: "/assests/home/TopSellerProducts/image4.png",
      title: "Casual Linen Shirt",
      rating: 4.5,
      maxRating: 5,
      price: 160,
      oldPrice: null,
      discountPercent: null,
    },
    {
      id: 8,
      image: "/assests/home/TopSellerProducts/image2.png",
      title: "Athletic Jogger Pants",
      rating: 4.7,
      maxRating: 5,
      price: 185,
      oldPrice: 230,
      discountPercent: 20,
    },
  ],

  ShopByStyle: {
    heading: <>BROWSE BY DRESS STYLE</>,
    images:[
      "/assests/home/BrowseByDressStyle/Frame1.png",
      "/assests/home/BrowseByDressStyle/Frame2.png",
      "/assests/home/BrowseByDressStyle/Frame3.png",
      "/assests/home/BrowseByDressStyle/Frame4.png",
    ]
  },
};

export default HomeData;
