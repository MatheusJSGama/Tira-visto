import { Clock, PhoneCall, Plus } from 'lucide-react';
import { useIsLargeScreen } from '../../../components/Header/is-large-screen';
import clsx from 'clsx';

export function WhyChooseUs() {
  const isLargeScreen = useIsLargeScreen();

  return (
    <div
      className={clsx('mb-24', {
        'w-[1432px]': isLargeScreen,
      })}
    >
      <div
        className={clsx(
          'mt-4 flex flex-col gap-4 bg-gray-100 p-8 px-8 sml:px-[60px] sml:pt-[70px] sml:pb-[72px]',
          {
            'translate-y-[-70px]': isLargeScreen,
          },
        )}
      >
        <div className="flex gap-8 sml:gap-16">
          <span className="max-w-[854px] text-base font-medium uppercase sml:text-4xl md:text-title-L">
            Consultoria completa para tirar seu visto
          </span>
          <span
            className={clsx('h-fit rotate-12 rounded-[10px] bg-white p-3', {
              'translate-x-[70px] translate-y-[-10px]': isLargeScreen,
              'self-center': !isLargeScreen,
            })}
          >
            <PhoneCall />
          </span>
        </div>

        <div className="flex items-center justify-end gap-8 font-medium italic sml:gap-16">
          <span
            className={clsx('-rotate-12 rounded-[10px] bg-white p-3', {
              'translate-x-[-180px] translate-y-[40px]': isLargeScreen,
            })}
          >
            <Clock />
          </span>
          <span className="self-end text-base uppercase sml:text-4xl md:text-title-L">
            você esta em boas mãos!
          </span>
        </div>
      </div>

      <div
        className={clsx('flex flex-col px-8 sml:px-[60px]', {
          'mt-0 gap-[60px]': isLargeScreen,
          'mt-8 gap-4 sml:mt-24': !isLargeScreen,
        })}
      >
        <div className="flex flex-col gap-3">
          <button className="self-start rounded-[20px] bg-yellow p-2.5 px-5">
            Veja como funciona
          </button>
          <div
            className={clsx('flex items-baseline justify-between', {
              'sml:-4 flex-col gap-2': !isLargeScreen,
            })}
          >
            <span
              className={clsx(
                'text-2xl font-medium tracking-[-0.03em] sm:text-4xl sml:text-title-L',
                {
                  'max-w-[420px]': isLargeScreen,
                  'w-full': !isLargeScreen,
                },
              )}
            >
              Sua tranquilidade não tem preço!
            </span>
            <p
              className={clsx('tracking-[-0.2px] text-gray-300', {
                'max-w-[826px]': isLargeScreen,
                'w-full': !isLargeScreen,
              })}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div
          className={clsx('flex items-center justify-between', {
            'flex-col': !isLargeScreen,
          })}
        >
          <img
            src="/happy-tourist.svg"
            alt="Família feliz no aeroporto"
            className={clsx('rounded-[26px]', {
              'w-full': !isLargeScreen,
            })}
          />
          <div
            className={clsx({
              'max-w-[528px]': isLargeScreen,
              'mt-4 w-full': !isLargeScreen,
            })}
          >
            <div className="flex flex-1 flex-col gap-3">
              <span className="text-2xl font-medium sm:text-3xl md:text-4xl xxl:text-subtitle">
                Etapa Inicial
              </span>
              <p className="tracking-[-0.2px] text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <hr className="mt-5 mb-5 text-gray-200" />

            <div className="flex-1">
              <span className="text-2xl font-medium sm:text-3xl md:text-4xl xxl:text-subtitle">
                Processo de Entrevista
              </span>
              <span className="flex items-center gap-2">
                <Plus />
                <p>Leia mais</p>
              </span>
            </div>

            <hr className="mt-5 mb-5 text-gray-200" />

            <div className="flex-1">
              <span className="text-2xl font-medium sm:text-3xl md:text-4xl xxl:text-subtitle">
                Entrega de documentos
              </span>
              <span className="flex items-center gap-2 self-end">
                <Plus />
                <p>Leia mais</p>
              </span>
            </div>
            <hr className="mt-5 text-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
