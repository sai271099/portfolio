'use client';
const Name = () => {
  const scrollToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  return (
    <div
      className={'flex flex-row gap-3 items-center cursor-pointer'}
      onClick={() => scrollToTop()}
    >
      <span className={'material-symbols-rounded scale-150'}>code</span>
      <div className={'font-bold text-base leading-4 flex flex-col'}>
        <span>SAI</span>
        <span>Yada</span>
      </div>
    </div>
  );
};

export default Name;
