// theme.ts
import { createTheme } from '@mantine/core';

const pokemonTheme = createTheme({
//   colorScheme: 'light', // or 'dark'
  colors: {
    pikachuYellow: ['#FFF6DC', '#FFF1C2', '#FFEC9E', '#FFE679', '#FFD933', '#FFCC00', '#E6B800', '#CCA300', '#B38F00', '#8C7300'],
    charizardOrange: ['#FFE2CC', '#FFD1A6', '#FFB073', '#FF8C40', '#FF690D', '#E65000', '#CC4700', '#B23F00', '#993600', '#802E00'],
    bulbasaurBlue: ['#F0F9E8', '#DAF2C4', '#B9E599', '#95D776', '#74C962', '#4FB848', '#3DA135', '#2C8A25', '#1C7318', '#145C0F'],
    squirtleBlue: ['#E6F2FF', '#B3D9FF', '#80C0FF', '#4DA6FF', '#1A8CFF', '#0073E6', '#005BB8', '#00468B', '#00365E', '#002633'],
    pokeballRed: ['#FFE6E6', '#FFB8B8', '#FF8A8A', '#FF5C5C', '#FF2E2E', '#FF0000', '#CC0000', '#990000', '#660000', '#330000'],
    // Add more custom colors if needed
  },
  // Customize other theme properties as needed
});

export default pokemonTheme;
