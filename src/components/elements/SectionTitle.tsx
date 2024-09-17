import React from 'react';

const SectionTitle = ({ title, icon, id }: { title: string; icon: string; id: string }) => {
  return (
    <div className={'flex flex-row gap-4 items-center mb-8'}>
      <span className={'material-symbols-rounded mr-1 scale-[200%] mx-1'}>{icon}</span>
      <h1 className={'text-5xl font-semibold'} id={id}>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
