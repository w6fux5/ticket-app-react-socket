import { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiContext';

const useHideMenu = (hide) => {
  const { menuOnHide, menuOnShow } = useContext(UiContext);

  useEffect(() => {
    if (hide) {
      menuOnHide();
    } else {
      menuOnShow();
    }
  }, [hide, menuOnHide, menuOnShow]);
};

export default useHideMenu;
