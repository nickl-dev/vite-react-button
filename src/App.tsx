import './App.css';
import collections from './collections';
import Collection from './components/collection/collection.component';
import reactLogo from './assets/react.svg';
import tailwindCSSLogo from './assets/tailwind-css.png';
import viteLogo from '/vite.svg';

const App = (): JSX.Element => {
  return (
    <>
      <h1 className='text-2xl text-center font-bold p-4 tracking-tight'>
        Do you need a button?
      </h1>

      <h2 className='text-lg text-center font-semibold text-slate-400'>
        I will develop a clean, responsive button for you with Vite, React and
        Tailwind CSS.
      </h2>

      <div className='flex justify-center items-center p-8 gap-2'>
        <a
          href='https://vitejs.dev'
          target='_blank'
        >
          <img
            src={viteLogo}
            className='logo w-14'
            alt='Vite logo'
          />
        </a>

        <a
          href='https://react.dev'
          target='_blank'
        >
          <img
            src={reactLogo}
            className='logo react w-14'
            alt='React logo'
          />
        </a>

        <a
          href='https://tailwindcss.com/'
          target='_blank'
        >
          <img
            src={tailwindCSSLogo}
            className='logo react w-14'
            alt='Tailwind CSS llogo'
          />
        </a>
      </div>

      {collections?.map((collection) => {
        return (
          <Collection
            key={collection.title}
            title={collection.title}
            items={collection.items}
          />
        );
      })}
    </>
  );
};

export default App;
