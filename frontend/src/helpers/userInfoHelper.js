export const getUserFromStorage = () => {
  const userInfo = {
    agent: localStorage.getItem('agent') || null,
    table: localStorage.getItem('table') || null,
  };

  return userInfo;
};
