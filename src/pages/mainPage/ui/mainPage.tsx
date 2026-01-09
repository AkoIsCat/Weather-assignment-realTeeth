import { Header } from '../../../widgets/Header';
import { useEffect } from 'react';
import { getLocation } from '../lib/getLocation';
import { getAddress } from '../lib/getAddress';

export const MainPage = () => {
  useEffect(() => {
    getLocation().then((data) => getAddress(data));
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};
