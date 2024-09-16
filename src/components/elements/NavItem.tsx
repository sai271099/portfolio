'use client';
const NavItem = ({ name, link, icon }: { name: string; link: string; icon?: string }) => {
  const scrollToView = (link: string) => {
    const julie = document.getElementById(link.slice(1));
    console.log('scrolling to', link);

    if (!julie) return;
    julie.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <li
      onClick={e => scrollToView(link)}
      className={
        'py-2 px-4 rounded-full flex flex-row gap-1 items-center hover:bg-white hover:bg-opacity-10 hover:transition-colors whitespace-nowrap cursor-pointer'
      }
    >
      {icon && <span className={'material-symbols-rounded'}>{icon}</span>}
      <div className={'font-medium'}>{name}</div>
    </li>
  );
};

export default NavItem;
