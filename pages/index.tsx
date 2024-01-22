// pages/index.tsx
import { GetStaticProps } from 'next';
import { Table } from '@mantine/core';
import { Pokemon } from '../types/types';

import './index.css';
import '@mantine/core/styles.css';

interface HomePageProps {
  pokemonData: Pokemon[];
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch the remote data from the GitHub repository
  const res = await fetch('https://raw.githubusercontent.com/fritzwiltman/pokemon-data-scraper/main/pokemon_data.json');
  const pokemonData: Pokemon[] = await res.json();

  return {
    props: {
      pokemonData,
    },
  };
};

const HomePage: React.FC<HomePageProps> = ({ pokemonData }) => {
    const rows = pokemonData.map((pokemon) => (
        <Table.Tr key={pokemon.id}>
          <Table.Td>
            <div>
                <img src={pokemon.imageUrl} alt={pokemon.name} className="pokemon-image" />
                {pokemon.id}
            </div>
          </Table.Td>
          <Table.Td>{pokemon.name} {pokemon.category}</Table.Td>
          <Table.Td>{pokemon.types}</Table.Td>
          <Table.Td>{pokemon.height}</Table.Td>
          <Table.Td>{pokemon.weight}</Table.Td>
          <Table.Td>{pokemon.abilities}</Table.Td>
          <Table.Td>{pokemon.resistances}</Table.Td>
          <Table.Td>{pokemon.weaknesses}</Table.Td>
          <Table.Td>{pokemon.immunities}</Table.Td>
        </Table.Tr>
    ));
  return (
        <Table verticalSpacing="xl">
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>#</Table.Th>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Type</Table.Th>
                    <Table.Th>Height</Table.Th>
                    <Table.Th>Weight</Table.Th>
                    <Table.Th>Abilities</Table.Th>
                    <Table.Th>Resistances</Table.Th>
                    <Table.Th>Weaknesses</Table.Th>
                    <Table.Th>Immunities</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
  );
};

export default HomePage;
