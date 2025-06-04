import { formatedValue } from '../../utils/formater';

interface ProductsCardProps {
  productName: string;
  productType: string;
  serviceType: string;
  servicePicture: string;
  timeOfService: number;
  id: number;
  price: number;
}

export function ProductsCard(props: ProductsCardProps) {
  const formatedPrice = formatedValue.format(props.price);

  const basicId = `${props.productName}-basic`;
  const premiumId = `${props.productName}-premium`;
  const formId = `form-${props.productName}`;

  return (
    <div className="justify-center rounded-3xl border-1 border-gray-200 p-4">
      <img
        src={props.servicePicture}
        alt="Imagem do serviço prestado"
        className="mb-8 w-full"
      />

      <form className="flex justify-center gap-4 sml:justify-start" id="formId">
        <div>
          <input
            type="radio"
            name={`plan-${props.productName}`}
            id={basicId}
            className="peer hidden"
          />
          <label
            htmlFor={basicId}
            className="cursor-pointer rounded-[40px] border border-gray-600 px-5 py-[5px] text-gray-600 duration-300 peer-checked:border-black peer-checked:text-black hover:border-black hover:text-black"
          >
            Basic
          </label>
        </div>

        <div>
          <input
            type="radio"
            name={`plan-${props.productName}`}
            id={premiumId}
            className="peer hidden"
          />
          <label
            htmlFor={premiumId}
            className="cursor-pointer rounded-[40px] border border-gray-600 px-5 py-[5px] text-gray-600 duration-300 peer-checked:border-black peer-checked:text-black hover:border-black hover:text-black"
          >
            Premium
          </label>
        </div>
      </form>

      <div className="mt-5 self-end">
        <span className="font-semibold sm:text-base sml:text-card-title">
          {props.productName}
        </span>
        <div className="mt-4 flex flex-col justify-between gap-2 sml:flex-row">
          <div className="flex min-w-[154px] flex-col sml:gap-2">
            <span className="text-xs font-medium sm:text-base">
              Atendimento
            </span>
            <span className="text-gray-600">{props.serviceType}</span>
          </div>

          <div className="flex flex-col sml:gap-2">
            <span className="text-xs font-medium sm:text-base">Tempo</span>
            <span className="text-gray-600">{props.timeOfService} dias</span>
          </div>
        </div>

        <div className="">
          <hr className="mt-5 mb-5 text-gray-200" />

          <div className="flex items-end justify-between sm:items-center">
            <div className="flex flex-col gap-1">
              <span className="text-gray-600">A partir de</span>
              <span className="text-2xl font-semibold sm:text-card-price">
                {formatedPrice}
              </span>
            </div>
            <button
              type="submit"
              form={formId}
              className="cursor-pointer self-end rounded-[40px] bg-dark-blue p-1 text-white sml:self-center sm:px-5 sm:py-4"
            >
              Contratar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
