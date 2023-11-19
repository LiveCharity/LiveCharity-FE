import { useNavigate } from 'react-router';

export const useNavigateCustome = () => {
  const navigate = useNavigate();

  const navigateToRoute = (routeName) => {
    navigate(routeName);
  };

  return [navigateToRoute];
};
