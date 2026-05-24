'use client';

type Props = {
  monthsAgo: number;
  className?: string;
};

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

function formatPreviousMonth(monthsAgo: number, now = new Date()): string {
  const date = new Date(now.getFullYear(), now.getMonth() - monthsAgo, 1);

  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export default function ReviewDate({ monthsAgo, className }: Props) {
  return (
    <p className={className} suppressHydrationWarning>
      {formatPreviousMonth(monthsAgo)}
    </p>
  );
}
