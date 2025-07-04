import { useEffect, useState } from 'react';
import { ProductsCard } from '../../../components/Products/products-card';
import data from '../../../data/services/products.json';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export function ServicesPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 990) {
        setCardsPerPage(1);
      } else if (width < 1440) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = data.products.length;

  const handleNext = () => {
    if (currentIndex + cardsPerPage < total) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const visibleProducts = data.products.slice(
    currentIndex,
    currentIndex + cardsPerPage,
  );

  return (
    <div className="mt-24 flex w-full max-w-[1432px] flex-col justify-between px-8 sml:px-[60px]">
      <div className="mb-6 flex flex-col gap-2 sml:mb-[60px]">
        <span className="w-fit self-center rounded-[20px] bg-yellow px-5 py-2.5 sml:self-start">
          Pacotes
        </span>
        <div className="flex flex-col items-center justify-between sml:flex-row">
          <span className="mb-2 text-center text-4xl sml:text-left md:text-title-L">
            Confira nossos pacotes
          </span>
          <div className="flex gap-5">
            <span
              onClick={handlePrev}
              className={clsx('rounded-button border p-[15px]', {
                'cursor-not-allowed border-dark-blue bg-transparent opacity-40':
                  currentIndex === 0,
                'cursor-pointer border-dark-blue bg-dark-blue text-white':
                  currentIndex !== 0,
              })}
            >
              <ArrowLeft />
            </span>
            <span
              onClick={handleNext}
              className={clsx('rounded-button border p-[15px]', {
                'cursor-not-allowed border-dark-blue bg-transparent opacity-40':
                  currentIndex + cardsPerPage >= total,
                'cursor-pointer border-dark-blue bg-dark-blue text-white':
                  currentIndex + cardsPerPage < total,
              })}
            >
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {visibleProducts.map((product) => {
          return (
            <div className="flex-1" key={product.id}>
              <ProductsCard
                id={product.id}
                productName={product.productName}
                productType={product.productType}
                serviceType={product.serviceType}
                servicePicture={product.servicePicture}
                timeOfService={product.timeOfService}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
