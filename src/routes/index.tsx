import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from '../pages/Home';
import { PokemonContextProvider } from '../contexts/PokemonContext';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <PokemonContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PokemonContextProvider>
        
    </BrowserRouter>
  );
}
