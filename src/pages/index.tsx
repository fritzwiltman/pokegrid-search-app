import { Pokemon } from '../types/types';
import PokemonTable from '../components/PokemonTable';
import { Header } from '../components/Header/Header';

interface HomePageProps {
  pokemonData: Pokemon[];
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <Header />
      <PokemonTable />
    </div>
  );
};

export default HomePage;