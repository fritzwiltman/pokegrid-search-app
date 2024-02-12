export type PokemonVariation = {
    name: string;
    types: string[];
    resistances: string[];
    weaknesses: string[];
    immunities: string[];
    imageUrl: string;
}

export type Pokemon = {
    id: number;
    name: string;
    type: string[];
    height: number;
    weight: number;
    category: string;
    abilities: string[];
    moves: string[];
    resistances: string[];
    weaknesses: string[];
    immunities: string[];
    evolution_stage: number[];
    imageUrl: string;
    legendaryStatus: boolean;
    variations: PokemonVariation[];
}