import products from "@/app/data/products.json";
import { Product } from "@/app/types/product";
import Image from "next/image";


type Props = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const category = params.slug.toLowerCase();

  const items = products.filter( (p: Product) => p.category.toLowerCase() === category );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6 capitalize">{params.slug}</h1>

      {items.length === 0 && <p>Tidak ada produk.</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              className="w-full h-40 object-contain"
            />
            <h2 className="mt-2 font-medium">{item.title}</h2>
            <p className="font-semibold text-[#cd6582]">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
