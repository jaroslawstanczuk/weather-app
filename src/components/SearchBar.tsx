import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [ city, setCity ] = useState<string>('');
    
    const handleSearch = () => {
        if (city.length < 3) return;
        onSearch(city);
        setCity('');
    };

    const handleChange = (e: any) => {
        setCity(e.target.value);
    }

    const handleKeyDown = (e: any) => {
        if (e.key !== 'Enter') return;
        handleSearch();
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                value={city}
                onChange={e => handleChange(e)}
                onKeyDown={e => handleKeyDown(e)}
                placeholder="Wpisz miasto"
            />
            <span onClick={handleSearch}>Szukaj</span>
        </div>
    );
}

export default SearchBar;