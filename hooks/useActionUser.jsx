import { useEffect, useState } from 'react';

import { useRouterCustom } from './useNavigate';
import { balance } from '../src/api/walletAPI';
import { formatter } from '../helpers/formatter';
import { notifyError } from '../helpers/notification';

export const useActionUser = (initialState) => {
  const [navigateToRoute] = useRouterCustom();
  const [state, setState] = useState(initialState);

  const handleRedirect = (routeName) => {
    if (routeName === '/payment/topup') {
      navigateToRoute(routeName);
    } else if (localStorage.access_token) {
      localStorage.clear();
      navigateToRoute('/login');
    } else {
      navigateToRoute('/login');
    }
  };

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const isBalance = await balance();
        setState(formatter.format(isBalance));
      } catch (err) {
        notifyError('Something wrong');
      }
    };
    fetchBalance();
  }, []);

  return [state, handleRedirect];
};
