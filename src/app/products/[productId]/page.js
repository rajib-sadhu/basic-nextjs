const DynamicProductPPage = async ({ params, searchParams }) => {
  const { productId } = await params;
  const { category } = await searchParams;

  return (
    <div>
      <h1>Dynamic Page - {productId}</h1>
      <h1>Dynamic category - {category}</h1>
    </div>
  );
};

export default DynamicProductPPage;
