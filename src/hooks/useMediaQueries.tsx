import { useMediaQuery } from 'react-responsive';

export const useMediaQueries = () => {
  const isMobileScreen = useMediaQuery({ maxWidth: 767 });
  const isLaptopScreen = useMediaQuery({ maxWidth: 1023 });

  return { isMobileScreen, isLaptopScreen };
};
