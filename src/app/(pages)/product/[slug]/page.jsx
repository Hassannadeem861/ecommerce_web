
const ProductPage = async ({ params }) => {
  // console.log("params: ",params)
  const { slug } = await params;
  console.log("slug :", slug);

  return (
    <div className="container">
      <h1>dsddsddsdsdsdsd</h1>
    </div>
  );
};

export default ProductPage;
