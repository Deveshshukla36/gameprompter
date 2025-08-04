
import { useEffect, useState } from 'react';

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className={`py-8 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="font-minecraft text-primary text-2xl md:text-3xl tracking-wider text-center">
        GAME PROMOTER
      </h1>
    </header>
  );
};

export default Header;
