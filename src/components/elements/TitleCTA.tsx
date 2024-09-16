import Link from 'next/link';

const TitleCTA = ({
  title,
  icon,
  link,
  styles = '',
}: {
  title: string;
  icon: string;
  link: string;
  styles?: string;
}) => (
  <Link href={link} className={'flex flex-row gap-1 items-center px-6 py-3 rounded-full ' + styles}>
    <span className={'material-symbols-rounded scale-110'}>{icon}</span>
    <h1 className={'text-lg font-medium'}>{title}</h1>
  </Link>
);

export default TitleCTA;
