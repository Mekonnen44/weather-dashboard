import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = React.useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
