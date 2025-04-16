import Image from "next/image";

const dataFetchPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    // cache:'force-cache'
    cache:'no-store'
    // next: {
    //   revalidate: 30,
    // },
  });
  const products = await res.json();

  return (
    <div>
      <h1 className="my-5 text-2xl text-center">
        Data Fetching, Caching, Revalidating
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10 p-5">
        {products.map((laptop) => {
          return (
            <div
              key={laptop.id}
              className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={laptop.image}
                  alt={laptop.productName}
                  fill
                  className="object-cover p-4 rounded-2xl overflow-hidden"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {laptop.productName}
                </div>
                <p className="text-gray-400 text-base mb-2">
                  <span className="font-semibold">Brand:</span> {laptop.brand}
                </p>
                <p className="text-gray-400 text-base mb-2">
                  <span className="font-semibold">Category:</span>{" "}
                  {laptop.category}
                </p>
              </div>
              <div className="px-6 pt-2 pb-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-300">
                  ${laptop.price}
                </span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default dataFetchPage;
