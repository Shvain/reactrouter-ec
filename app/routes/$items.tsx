import { MockData, type Item } from '@models/item';
import { useParams, Link } from 'react-router';
import type { Route } from "./+types/$items";
import { useCart } from '~/contexts/CartItemContext';

export default function ItemsPage() {
  const { items } = useParams<{ items: string }>();
  const { addToCart } = useCart();
  
  // URLパラメータから商品を検索
  const product = MockData.find(item => item.id === items);
  
  // 商品が見つからない場合の処理
  if (!product) {
    return (
      <div className="w-full bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">商品が見つかりません</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">ホームに戻る</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="mx-auto max-w-7xl px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-blue-600">ホーム</Link></li>
          <li>/</li>
          <li className="text-gray-900">{product.title}</li>
        </ol>
      </div>
    </nav>
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                      <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                      </svg>
                    ))}
                    {Array.from({ length: 5 - Math.floor(product.rating) }, (_, i) => (
                      <svg className="w-5 h-5 text-gray-200" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600">({product.rating})</span>
                </div>
                <div className="text-4xl mb-6 font-bold text-gray-900">{product.price}</div>
                <div className="prose mb-8">
                  <p className="text-gray-600 text-lg">
                    {product.description || "高品質な商品をお手頃価格でご提供します。"}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
                >
                  カートに入れる
                </button>
                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold mb-4">商品詳細</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">商品ID:</span>
                      <span>{product.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">カテゴリ:</span>
                      <span>{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">在庫状況:</span>
                      <span className="text-green-600">在庫あり</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}