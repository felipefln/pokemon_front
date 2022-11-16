import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from '../pages/Home';
import {NotFound} from '../pages/NotFound';
import { PokemonContextProvider } from '../contexts/PokemonContext';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <PokemonContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PokemonContextProvider>
        
    </BrowserRouter>
  );
}
