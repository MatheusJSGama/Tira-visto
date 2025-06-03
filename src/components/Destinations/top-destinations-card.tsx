import clsx from 'clsx';

interface TopDestinationsCardProps {
  destination: string;
  destinationPicture: string;
  id: number;
}

export function TopDestinationsCard(props: TopDestinationsCardProps) {
  const isSecondorFith = props.id === 2 || props.id === 5;
  const isfirstorThird = props.id === 1 || props.id === 3;
  const isFourthorSixth = props.id === 4 || props.id === 6;

  return (
    <div
      className={clsx(
        'flex h-[240px] w-full items-end justify-center rounded-[28px] bg-cover bg-center p-4 sm:h-80 md:h-[240px] md:w-[240px] xxl:w-[280px]',
        {
          'md:h-[240px] xxl:h-[280px]': isSecondorFith,
          'self-end': isfirstorThird,
          'self-start': isFourthorSixth,
        },
      )}
      style={{ backgroundImage: `url(${props.destinationPicture})` }}
    >
      <span className="rounded-[30px] bg-white/10 px-4 py-1.5 font-light tracking-[-0.2px] text-white backdrop-blur-md">
        {props.destination}
      </span>
    </div>
  );
}
