// pages/_app.tsx
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import pokemonTheme from './theme';
import '@mantine/core/styles.css'; 
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={pokemonTheme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
