import React, { useState, createContext, useCallback } from 'react';

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(false);

  const menuOnShow = useCallback(() => {
    setHideMenu(false);
  }, []);

  const menuOnHide = useCallback(() => {
    setHideMenu(true);
  }, []);
  return (
    <UiContext.Provider
      value={{
        hideMenu,
        menuOnShow,
        menuOnHide,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
