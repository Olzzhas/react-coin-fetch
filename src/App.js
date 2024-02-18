import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1'
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="container mx-auto mt-5">
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Symbol</th>
            <th className="border p-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <tr
              key={coin.id}
              className={
                index < 5 ? (coin.symbol === 'usdt' ? 'bg-green-300' : 'bg-blue-300') : 'bg-yellow-300'
              }
            >
              <td className="border p-2">{coin.id}</td>
              <td className="border p-2">{coin.symbol}</td>
              <td className="border p-2">{coin.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
