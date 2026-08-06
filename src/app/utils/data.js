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
      slug: "t-shirt-with-tape-details",
      category: "t-shirts",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      image: "/assests/home/NewArrivalsProducts/image1.png",
      title: "T-shirt with Tape Details",
      rating: 4.5,
      maxRating: 5,
      price: 120,
      oldPrice: 300,
      discountPercent: 40,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colorOptions: ["#4A3F35", "#1F5C4E", "#2A2A5C"],
    },
    {
      id: 2,
      slug: "skinny-fit-jeans",
      category: "jeans",
      image: "/assests/home/NewArrivalsProducts/image2.png",
      title: "Skinny Fit Jeans",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      rating: 3.5,
      maxRating: 5,
      price: 240,
      oldPrice: 260,
      discountPercent: 20,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colorOptions: ["#4A3F35", "#1F5C4E", "#2A2A5C"],
    },
    {
      id: 3,
      slug: "checkered-shirt",
      category: "shirts",
      image: "/assests/home/NewArrivalsProducts/image3.png",
      title: "Checkered Shirt",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      rating: 4.5,
      maxRating: 5,
      price: 180,
      oldPrice: null,
      discountPercent: null,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colorOptions: ["#4A3F35", "#1F5C4E", "#2A2A5C"],
    },
    {
      id: 4,
      slug: "sleeve-striped-t-shirt",
      category: "t-shirts",
      image: "/assests/home/NewArrivalsProducts/image1.png",
      title: "Sleeve Striped T-shirt",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      rating: 4.5,
      maxRating: 5,
      price: 130,
      oldPrice: 160,
      discountPercent: 30,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colorOptions: ["#4A3F35", "#1F5C4E", "#2A2A5C"],
    },
    {
      id: 5,
      slug: "oversized-graphic-tee",
      category: "t-shirts",
      image: "/assests/home/NewArrivalsProducts/image2.png",
      title: "Oversized Graphic Tee",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      rating: 4.6,
      maxRating: 5,
      price: 95,
      oldPrice: 120,
      discountPercent: 21,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colorOptions: ["#4A3F35", "#1F5C4E", "#2A2A5C"],
    },
    {
      id: 6,
      slug: "vintage-denim-jacket",
      category: "jackets",
      image: "/assests/home/NewArrivalsProducts/image3.png",
      title: "Vintage Denim Jacket",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      rating: 4.9,
      maxRating: 5,
      price: 280,
      oldPrice: 340,
      discountPercent: 18,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colorOptions: ["#4A3F35", "#1F5C4E", "#2A2A5C"],
    },
    {
      id: 7,
      slug: "casual-linen-shirt",
      category: "shirts",
      image: "/assests/home/NewArrivalsProducts/image4.png",
      title: "Casual Linen Shirt",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      rating: 4.5,
      maxRating: 5,
      price: 160,
      oldPrice: null,
      discountPercent: null,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colorOptions: ["#4A3F35", "#1F5C4E", "#2A2A5C"],
    },
    {
      id: 8,
      slug: "athletic-jogger-pants",
      category: "pants",
      image: "/assests/home/NewArrivalsProducts/image2.png",
      title: "Athletic Jogger Pants",
      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      rating: 4.7,
      maxRating: 5,
      price: 185,
      oldPrice: 230,
      discountPercent: 20,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colorOptions: ["#4A3F35", "#1F5C4E", "#2A2A5C"],
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
    images: [
      "/assests/home/BrowseByDressStyle/Frame1.png",
      "/assests/home/BrowseByDressStyle/Frame2.png",
      "/assests/home/BrowseByDressStyle/Frame3.png",
      "/assests/home/BrowseByDressStyle/Frame4.png",
    ],
  },

  ClientTestimonials: {
    heading: <> OUR HAPPY CUSTOMERS </>,
    cards: [
      {
        name: "John J.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "Dow D.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "Alex K.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "James L.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "James L.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "James L.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "James L.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "James L.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "James L.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
      {
        name: "James L.",
        description:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        starImage: "/assests/home/ClientTestimonials/stars.png",
        image: "/assests/home/ClientTestimonials/greenTick.png",
      },
    ],
  },

  ClientReviews: [
    {
      id: 1,
      rating: 4.5,
      maxRating: 5,
      name: "Samantha D.",
      verifiedIconImage: "/assests/home/ClientTestimonials/greenTick.png",
      description: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDate: "August 14, 2026",
      verified: true
    },
    {
      id: 2,
      rating: 4.5,
      maxRating: 5,
      name: "Samantha D.",
      image: "/assests/home/ClientTestimonials/greenTick.png",
      description: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDate: "August 14, 2026",
      verified: true
    },
    {
      id: 3,
      rating: 4.5,
      maxRating: 5,
      name: "Samantha D.",
      image: "/assests/home/ClientTestimonials/greenTick.png",
      description: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDate: "August 14, 2026",
      verified: true
    },
    {
      id: 4,
      rating: 4.5,
      maxRating: 5,
      name: "Samantha D.",
      image: "/assests/home/ClientTestimonials/greenTick.png",
      description: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDate: "August 14, 2026",
      verified: true
    },
    {
      id: 5,
      rating: 4.5,
      maxRating: 5,
      name: "Samantha D.",
      image: "/assests/home/ClientTestimonials/greenTick.png",
      description: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDate: "August 14, 2026",
      verified: false
    },
    {
      id: 6,
      rating: 4.5,
      maxRating: 5,
      name: "Samantha D.",
      image: "/assests/home/ClientTestimonials/greenTick.png",
      description: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDate: "August 14, 2026",
      verified: false
    }
  ],

  FAQs: [
    {
      id: 1,
      question: "What sizes are available for this product?",
      answer:
        "This product is available in Small, Medium, Large, and X-Large. You can check the size chart on the product page to find your perfect fit before ordering.",
    },
    {
      id: 2,
      question: "How do I know which size to order?",
      answer:
        "We recommend checking our detailed size guide, which compares your body measurements with each size. If you're between sizes, we suggest sizing up for a more comfortable fit.",
    },
    {
      id: 3,
      question: "What is your return and exchange policy?",
      answer:
        "We offer a 30-day return and exchange policy on all unworn items with original tags attached. Simply visit our returns page to initiate the process.",
    },
    {
      id: 4,
      question: "How long does shipping usually take?",
      answer:
        "Standard shipping typically takes 3-5 business days, while express shipping takes 1-2 business days. Delivery times may vary depending on your location.",
    },
    {
      id: 5,
      question: "Is this product true to size?",
      answer:
        "Yes, this product generally fits true to size. However, fabric type and cut can slightly affect fit, so we recommend reviewing customer reviews and the size chart for extra confidence.",
    },
    {
      id: 6,
      question: "How should I wash and care for this item?",
      answer:
        "We recommend machine washing in cold water with similar colors, and avoiding bleach. Tumble dry on low heat or hang to air dry for best results.",
    },
  ],
};

export default HomeData;
