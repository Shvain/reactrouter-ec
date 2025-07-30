import type { Route } from "./+types/_index";
import ProductList from "~/components/ProductList";
import { MockData } from '@models/item'; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return  (
    <div className="w-full bg-gray-50 min-h-screen">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">モバイルオーダー</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col items-center pb-10 gap-y-7">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              商品一覧
            </h2>
          </div> 
          <ProductList products={MockData} />
        </div>
      </section>
    </div>
  )
}
