import CartPlus from "../icons/CartPlus";

export default function ProductCard({ product }) {
  return (
    <div className="max-w-[250px] snap-start">
      <div className="bg-blue-200 rounded-lg p-4 grid place-items-center">
        <img src={product.picture} alt={product.name} width={200} height={300} />
      </div>
      <div className="flex flex-col justify-between mt-2">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="text-gray-800 text-xl">${product.price}</p>
      </div>
      <p>{product.description}</p>
      <div className="flex justify-between mt-3">
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
        <button className="bg-slate-700 text-white px-4 py-1 rounded-lg" title="Add to cart"><CartPlus /></button>
      </div>
    </div>
  );
}