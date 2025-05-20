export function Header() {
  return(
        <header className='w-full h-[420px] bg-zinc-900'>
          <div className='background-div'>
            <div className='burger-div'></div>
            <span className='title-font'>Red Burger</span>
            <span className='sub-title-font'>Rua dev sucesso, 12, Campo Grande, MS</span>
            <div className='frame-date'>
              <span className='text-white'>Seg a Dom - 18h as 22h</span>
            </div>
          </div>
        </header>
  );
}