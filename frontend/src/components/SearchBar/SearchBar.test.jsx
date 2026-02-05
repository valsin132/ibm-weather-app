import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { useState } from 'react';
import SearchBar from './SearchBar';

const SearchBarWrapper = ({ initialSuggestions = [] }) => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleCitySearch = (value) => {
    setCity(value);

    if (value.length >= 2) {
      setSuggestions(initialSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <SearchBar
      city={city}
      handleCitySearch={handleCitySearch}
      citySuggestions={suggestions}
      fetchWeatherData={() => {}}
    />
  );
};

describe('SearchBar Component', () => {
  it('renders the search input', () => {
    render(<SearchBarWrapper />);

    expect(screen.getByPlaceholderText(/enter a city/i)).toBeInTheDocument();
  });

  it('updates input value when typing', async () => {
    render(<SearchBarWrapper />);

    const input = screen.getByPlaceholderText(/enter a city/i);
    await userEvent.type(input, 'Vilnius');

    expect(input).toHaveValue('Vilnius');
  });

  it('renders city suggestions after typing', async () => {
    const suggestions = [
      { name: 'Vilnius', country: 'Lithuania', lat: 54.6872 },
      { name: 'Kaunas', country: 'Lithuania', lat: 54.8972 },
    ];

    render(<SearchBarWrapper initialSuggestions={suggestions} />);

    const input = screen.getByPlaceholderText(/enter a city/i);
    await userEvent.type(input, 'Vi');

    expect(screen.getByText((text) => text.includes('Vilnius'))).toBeInTheDocument();

    expect(screen.getByText((text) => text.includes('Kaunas'))).toBeInTheDocument();
  });
});
