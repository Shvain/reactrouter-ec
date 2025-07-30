import { 
  useEffect, 
  useState,
} from 'react';
import { Link } from 'react-router';
import { useCart } from '~/contexts/CartItemContext';

interface Props {
  title?: string;
}

export default function Header({
  title = "My Site",
}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { state, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const checkScrolling = () => {
      setIsScrolled(50 < window.scrollY);
    };
    window.addEventListener('scroll', checkScrolling, { passive: true });
    checkScrolling();
    return () => {
      window.removeEventListener('scroll', checkScrolling);
    };
  }, []);

  const openDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${isScrolled || isDrawerOpen
            ? 'backdrop-blur-lg rounded-xl mx-10 mt-2' 
            : 'bg-white'
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`
            flex justify-between transition-all duration-300 ease-in-out
            ${isScrolled ? 'h-12' : 'h-16'}
          `}>
            <div className="flex items-center">
              <Link 
                to="/" 
                className={`
                  font-bold text-gray-900 transition-all duration-300 ease-in-out
                  ${isScrolled ? 'text-lg' : 'text-2xl'}
                `}
              >
                {title}
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                ホーム
              </Link>
              <button
                onClick={openDrawer}
                className="relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                カート
                {state.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/20"
          onClick={closeDrawer}
        />
      )}

      <div 
        className={`
          fixed top-0 right-0 z-60 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800
          ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <h5 
          id="drawer-right-label" 
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg 
            className="w-4 h-4 me-2.5" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
          </svg>
          ショッピングカート
        </h5>
        
        <button 
          type="button" 
          onClick={closeDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg 
            className="w-3 h-3" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 14 14"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        
        <div className="mb-6">
          {state.items.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              カートは空です
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg dark:border-gray-600">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-12 h-12 object-contain"
                  />
                  <div className="flex-1">
                    <h6 className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</h6>
                    <p className="text-xs text-gray-500">{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      className="w-6 h-6 text-gray-400 hover:text-gray-600 flex items-center justify-center"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button 
                      className="w-6 h-6 text-gray-400 hover:text-gray-600 flex items-center justify-center"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button 
                      className="ml-2 text-red-500 hover:text-red-700 text-xs"
                      onClick={() => removeFromCart(item.id)}
                    >
                      削除
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-t pt-4 dark:border-gray-600">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-900 dark:text-white">合計:</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">¥{state.totalPrice.toLocaleString()}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={closeDrawer}
              className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              買い物を続ける
            </button>
            <Link
              to='/payment'
              onClick={closeDrawer}
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
                state.items.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              レジに進む
              <svg 
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 14 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}