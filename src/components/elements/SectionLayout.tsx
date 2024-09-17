import React from 'react';

const SectionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={'sep-border mx-7 px-2 py-16'}>
      <div className={'flex flex-col max-w-5xl mx-auto'}>
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
