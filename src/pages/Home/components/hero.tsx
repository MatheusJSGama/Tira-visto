import { ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '../../../utils/animatedCounter';

export function Hero() {
  return (
    <div className="wrap flex flex-wrap px-8 sml:px-[60px]">
      <div className="max-h-screen text-center xxxl:max-w-[550px] xxxl:text-start">
        <h1 className="mb-4 text-2xl font-medium tracking-[-0.03em] sm:mb-8 sm:text-4xl md:text-[54px]">
          Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
        </h1>
        <hr className="mb-5 text-gray-200 md:mb-[60px] xxxl:w-[538px]" />
        <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:justify-between xxxl:mb-[100px] xxxl:max-w-[538px] xxxl:gap-0">
          <div className="flex max-w-[335px] flex-col gap-10">
            <p className="tracking-[-0.1px] text-gray-600">
              Com uma equipe altamente treinada, nós temos todos os
              procedimentos para que seu processo seja o mais tranquilo e
              rápido. Uma consultoria completa para você e sua família não ter
              nenhuma preocupação na sua viagem.
            </p>

            <button className="flex cursor-pointer items-center justify-center gap-3 rounded-button bg-dark-blue p-2 px-5 text-xs text-white sm:py-4 sm:text-base xxxl:w-[160px] xxxl:justify-start">
              <span>Saiba mais</span>
              <ArrowRight />
            </button>
          </div>

          <div className="flex flex-col gap-4 xxxl:self-end">
            <img
              src="/vídeo-thumb.svg"
              alt="Iamgem da funcionária Bruna"
              className="w-2xs rounded-2xl xxxl:w-[191px]"
            />
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <span className="font-semibold">Conheça a Bruna</span>
                <span className="text-gray-600">Ver vídeo</span>
              </div>
              <button className="cursor-pointer rounded-full bg-dark-blue p-[6px] text-white">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 flex md:gap-7">
          <div className="jus flex flex-1 flex-col gap-2 border-r border-gray-200">
            <span className="xs:text-xl font-medium sm:text-3xl md:text-subtitle">
              <AnimatedCounter targetNumber={509} />
            </span>
            <span className="text-xs text-gray-600 sm:text-base">
              Vistos Tirados
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-2 border-r border-gray-200">
            <span className="xs:text-xl font-medium sm:text-3xl md:text-subtitle">
              <AnimatedCounter targetNumber={602} />
            </span>
            <span className="text-xs text-gray-600 sm:text-base">
              Passaportes Tirados
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <span className="xs:text-xl font-medium sm:text-3xl md:text-subtitle">
              <AnimatedCounter targetNumber={634} />
            </span>
            <span className="text-xs text-gray-600 sm:text-base">
              Famílias felizes
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between rounded-3xl bg-[url(/background-card-visto.svg)] bg-cover bg-top p-4 sm:bg-center sml:min-h-[900px] md:bg-top xxxl:w-[762px] xxxl:translate-x-[55px] xxxl:translate-y-[-90px]">
        <div className="flex justify-center sm:justify-end">
          <button className="cursor-pointer place-self-end rounded-2xl bg-yellow px-5 py-3 text-xs font-semibold duration-300 hover:opacity-90 sm:text-base">
            Tirar meu visto agora!
          </button>
        </div>

        <div className="m-2 max-w-[522px] text-white sm:m-6">
          <span className="xs:text-3xl mb-2 font-semibold sm:text-subtitle">
            Realize o seu sonho com a ajuda da Tirar Visto!
          </span>
          <p className="text-xs sm:text-base">
            Com um serviço profissional, você não terá dor de cabeça para todo o
            processo do visto e entrevistas no consulado.
          </p>
        </div>
      </div>
    </div>
  );
}
