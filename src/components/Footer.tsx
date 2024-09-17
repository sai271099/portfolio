import NavItem from '@/components/elements/NavItem';

export const Footer = () => {
  return (
    <footer className={'sep-border mx-6 px-2 py-16'}>
      <div className={'flex flex-col justify-center max-w-5xl mx-auto gap-4'}>
        <div className={'flex flex-row justify-between items-start gap-4'}>
          <div className={'flex flex-row gap-4 items-center mt-3 ml-2 w-1/2'}>
            <span className={'material-symbols-rounded scale-[200%]'}>code</span>
            <div className={'flex flex-col font-bold text-2xl gap-1 leading-5'}>
              <span>Sai</span>
              <span>Yada</span>
            </div>
          </div>

          <div className={'flex flex-row gap-5 w-2/3 opacity-75'}>
            <ul className={'flex flex-col'}>
              <h2 className={'text-xl font-semibold mb-5 ml-4'}>Site Map</h2>
              <NavItem name={'About'} link={'#about'} icon={'account_circle'} />
              <NavItem name={'Work'} link={'#work'} icon={'code_blocks'} />
              <NavItem name={'Projects'} link={'#projects'} icon={'assignment'} /> 
              <NavItem name={'Education'} link={'#education'} icon={'school'} />
              <NavItem name={'Contact'} link={'#contact'} icon={'alternate_email'} />
            </ul>
            <ul className={'flex flex-col'}>
              <h2 className={'text-xl font-semibold mb-5 ml-4'}>Connect</h2>
              <li
                className={
                  'py-2 px-4 rounded-full flex flex-row gap-1 items-center hover:bg-white hover:bg-opacity-10 hover:transition-colors whitespace-nowrap'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-2 -2 24 24"
                  className={'scale-[170%] ml-1 mr-1'}
                >
                  <g fill="currentColor">
                    <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" />
                    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
                  </g>
                </svg>

                <a
                  href={'https://www.linkedin.com/in/sai-yada27/'}
                  className={'font-medium'}
                >
                  LinkedIn
                </a>
              </li>
              <li
                className={
                  'py-2 px-4 rounded-full flex flex-row gap-1 items-center hover:bg-white hover:bg-opacity-10 hover:transition-colors whitespace-nowrap'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className={'scale-150 ml-1 mr-1'}
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
                    <path d="M9 20.027c-3 .973-5.5 0-7-3" />
                  </g>
                </svg>

                <a href={'https://github.com/sai271099'} className={'font-medium'}>
                  GitHub
                </a>
              </li>
              <NavItem
                name={'saiyada1027@gmail.com'}
                link={'mailto:saiyada1027@gmail.com'}
                icon={'mail'}
              />
              <NavItem name={'+1 (352)-283-5750'} link={'tel:+13522835750'} icon={'call'} />
            </ul>
          </div>
        </div>
        <span
          className={
            'text-xs opacity-50 mt-16 text-center font-medium flex flex-col items-center gap-1'
          }
        >
          &copy; 2024 Sai yada - All rights reserved{' '}
          <span>
            Built using <span className={'font-bold'}>Next.js, TailwindCSS and TypeScript</span>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
