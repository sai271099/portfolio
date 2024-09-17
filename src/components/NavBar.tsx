import Name from '@/components/elements/Name';
import NavItem from '@/components/elements/NavItem';
import ThemeChanger from '@/components/elements/ThemeChanger';

const NavBar = () => {
  return (
    <nav className="fixed px-8 py-4 w-full flex flex-row backdrop-blur-xl bg- z-50 bg-inherit bg-opacity-40">
      <div className={'flex flex-row items-center justify-start w-1/5'}>
        <Name />
      </div>
      <ul className={'flex flex-row items-center justify-center p-2 w-3/5'}>
        <NavItem name={'About'} link={'#about'} icon={'account_circle'} />
        <NavItem name={'Work'} link={'#work'} icon={'code_blocks'} />
        <NavItem name={'Projects'} link={'#projects'} icon={'assignment'} /> 
        <NavItem name={'Education'} link={'#education'} icon={'school'} />
        <NavItem name={'Contact'} link={'#contact'} icon={'alternate_email'} />
      </ul>
      <div className={'flex flex-row items-center justify-end w-1/5'}>
        <ThemeChanger />
      </div>
    </nav>
  );
};

export default NavBar;
