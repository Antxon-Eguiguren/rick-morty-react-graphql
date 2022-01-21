import { useMediaQuery } from 'react-responsive';

export const useMediaQueries = () => {
  const isMobileScreen = useMediaQuery({ maxWidth: 767 });

  return { isMobileScreen };
};
