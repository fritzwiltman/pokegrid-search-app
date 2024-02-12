// pages/_app.tsx
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import '@mantine/core/styles.css'; 
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
