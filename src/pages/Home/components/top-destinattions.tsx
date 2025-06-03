import { TopDestinationsCard } from '../../../components/Destinations/top-destinations-card';
import { useIsLargeScreen } from '../../../components/Header/is-large-screen';
import data from '../../../data/destinations/top-destinations.json';

export function TopDestinations() {
  const isLargeScreen = useIsLargeScreen();

  return (
    <div className="justify-cente relative flex w-full max-w-[1432px] flex-col items-center px-8 sml:px-[60px]">
      {isLargeScreen && (
        <>
          <div className="absolute top-0 left-0 z-0 h-20 w-110 rounded-br-[60px] border-b-1 border-gray-600"></div>
          <div className="absolute top-0 right-0 z-0 h-20 w-110 rounded-bl-[60px] border-b-1 border-gray-600"></div>
          <div className="absolute bottom-140 left-0 z-0 h-40 w-70 rounded-tr-[100px] border-t-1 border-gray-600"></div>
          <div className="absolute right-0 bottom-140 z-0 h-40 w-70 rounded-tl-[100px] border-t-1 border-gray-600"></div>
        </>
      )}

      <div className="relative md:mt-[82px]">
        <div className="mb-[60px] flex flex-col items-center">
          <span className="mb-2 w-fit rounded-[20px] bg-yellow px-5 py-2.5 font-medium">
            Top destinos
          </span>
          <span className="mb-3 text-center text-4xl font-medium md:text-title-L">
            Destinos mais procurados
          </span>
          <p className="mb-10 max-w-[584px] text-center text-gray-600">
            Confira os destinos mais procurados por nossos clientes nos últimos
            meses, qual seria o seu novo destino?
          </p>
          <button className="cursor-pointer rounded-button bg-dark-blue px-5 py-4 text-white">
            Conheça mais
          </button>
        </div>
        <div className="odd: flex max-w-[880px] flex-wrap items-center justify-center gap-5">
          {data.destinations.map((destination) => {
            return (
              <TopDestinationsCard
                key={destination.id}
                id={destination.id}
                destination={destination.destination}
                destinationPicture={destination.destinationPicture}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
