export const getLatestTickets = async () => {
  const url = 'http://localhost:8080/latest';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.latestTickets);
  return data.latestTickets;
};
