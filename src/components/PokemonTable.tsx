import React from 'react';
import { useMemo } from 'react';
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';
import { Pokemon } from '../types/types';
import pokemonData from '../data/pokemonData.json';
import { Badge, Box, Container, Image } from '@mantine/core';
import './pokemonTable.css';

const PokemonTable = () => {
    const columns = useMemo<MRT_ColumnDef<Pokemon>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'Pokemon No.',
                Cell: ({ renderedCellValue, row }) => (
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'right',
                        gap: '16px',
                      }}
                    >
                      <Image
                        alt={row.original.name}
                        height={60}
                        src={row.original.imageUrl}
                      />
                      <span>{renderedCellValue}</span>
                    </Box>
                  ),
            },
            {
                accessorKey: 'name',
                header: 'Name',
            },
            {
                accessorKey: 'type',
                header: 'Type',
                mantineFilterSelectProps: {
                    data: ['Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy', 'Stellar'],
                },
                filterVariant: 'multi-select',
                Cell: ({ renderedCellValue, row }) => (
                    <Box>
                        {row.original.type.map((type, index) => (
                            <Badge key={type} className={`badge badge-${type.toLowerCase()}`}>
                                {type}
                            </Badge>
                        ))}
                    </Box>
                ),
            },
            {
                accessorKey: 'height',
                header: 'Height',
                filterFn: 'range',
                filterVariant: 'range',
                Cell: ({ renderedCellValue, row }) => (
                    <span>{row.original.height} m</span>
                ),
            },
            {
                accessorKey: 'weight',
                header: 'Weight',
                filterFn: 'range',
                filterVariant: 'range',
                Cell: ({ renderedCellValue, row }) => (
                    <span>{row.original.weight} kg</span>
                ),
            },
            {
                accessorKey: 'moves.level_up_moves',
                header: 'Level Up Moves',
                filterVariant: 'text',
            },
            {
                accessorKey: 'moves.egg_moves',
                header: 'Egg Moves',
                filterVariant: 'text',
            },
            {
                accessorKey: 'moves.tm_moves',
                header: 'TM Moves',
                filterVariant: 'text',
            },
            {
                accessorKey: 'resistances',
                header: 'Resistances',
                filterVariant: 'text',
                Cell: ({ renderedCellValue, row }) => (
                    <Box>
                        {row.original.resistances.length > 0 ? (
                            row.original.resistances.map((type, index) => (
                                <Badge key={type} className={`badge badge-${type.toLowerCase()}`}>
                                    {type}
                                </Badge>
                            ))
                        ) : (
                            <span>None</span>
                        )}
                    </Box>
                ),
            },
            {
                accessorKey: 'weaknesses',
                header: 'Weaknesses',
                filterVariant: 'text',
                Cell: ({ renderedCellValue, row }) => (
                    <Box>
                        {row.original.weaknesses.length > 0 ? (
                            row.original.weaknesses.map((type, index) => (
                                <Badge key={type} className={`badge badge-${type.toLowerCase()}`}>
                                    {type}
                                </Badge>
                            ))
                        ) : (
                            <span>None</span>
                        )}
                    </Box>
                ),
            },
            {
                accessorKey: 'immunities',
                header: 'Immunities',
                filterVariant: 'text',
                Cell: ({ renderedCellValue, row }) => (
                    <Box>
                        {row.original.immunities.length > 0 ? (
                            row.original.immunities.map((type, index) => (
                                <Badge key={type} className={`badge badge-${type.toLowerCase()}`}>
                                    {type}
                                </Badge>
                            ))
                        ) : (
                            <span>None</span>
                        )}
                    </Box>
                ),
            },
            {
                accessorKey: 'evolutionStage',
                header: 'Evolution Stage',
                filterVariant: 'select',
            },
            {
                accessorKey: 'legendaryStatus',
                header: 'Legendary Status',
                filterVariant: 'checkbox',
            },
            {
                accessorKey: 'region',
                header: 'Region',
                filterVariant: 'checkbox',
            },
        ],
        [],
    );

    return (
        <Container size="xl">
            <MantineReactTable
                columns={columns}
                data={(pokemonData as unknown) as Pokemon[]}
                columnFilterDisplayMode="popover"
            />
        </Container>
    );
};

export default PokemonTable;