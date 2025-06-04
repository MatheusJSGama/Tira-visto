import { ProductsCard } from '../../../components/Products/products-card';
import data from '../../../data/services/products.json';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function ServicesPackages() {

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
              className="cursor-pointer rounded-button border border-dark-blue bg-transparent p-[15px]"
            >
              <ArrowLeft />
            </span>
            <span
              className="cursor-pointer rounded-button border border-dark-blue bg-dark-blue p-[15px] text-white"
            >
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {data.products.map((product) => {
          return (
            <div className="w-[256px] flex-shrink-0 sml:w-[424px]">
              <ProductsCard
                key={product.id}
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
