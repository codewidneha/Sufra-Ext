import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, DollarSign, Percent, Clock, Filter, ChevronDown, ChevronUp, Utensils } from 'lucide-react';

const CloudKitchenMVP = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchKitchens = async (location) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/kitchens/search?location=${location}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setKitchens(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKitchens('Delhi'); // Default location
  }, []);

  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Cloud Kitchen Finder</h1>
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="border p-2" />
          <button className="ml-2 bg-blue-500 text-white p-2">Search</button>
        </div>
      </header>
      <main>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kitchens.map(kitchen => (
            <div key={kitchen.id} className="border p-4 rounded">
              <h2 className="font-bold">{kitchen.name}</h2>
              <p>Rating: {kitchen.rating}</p>
              <p>{kitchen.description}</p>
              <button className="bg-green-500 text-white p-2 mt-2">View Details</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CloudKitchenMVP;