import { 
  useState,
} from 'react';
import { Link } from 'react-router';
import type { 
  Item, 
} from '@models/item';
import { useCart } from '~/contexts/CartItemContext';

interface ProductListProps {
  products: Item[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('全て');
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === '全て' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const categories = ['全て', 'フード', 'ドリンク', 'サイド'];

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 text-sm font-medium border border-gray-200 
               hover:text-blue-700 focus:z-10 
                ${index === 0 ? 'rounded-l-lg' : ''}
                ${index === categories.length - 1 ? 'rounded-r-lg' : ''}
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:text-white' 
                  : 'bg-white text-gray-900'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-xl w-full">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 mx-auto"
            >
              <Link to={`/${product.id}`}>
                <img
                  className="p-8 rounded-t-lg w-full h-48 object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </Link>
              <div className="px-5 pb-5">
                <Link to={`/${product.id}`}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {product.title}
                  </h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                      <svg
                        key={`full-${i}`}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                      </svg>
                    ))}
                    {Array.from({ length: 5 - Math.floor(product.rating) }, (_, i) => (
                      <svg
                        key={`empty-${i}`}
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-200"
                  >
                    カートに追加
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;