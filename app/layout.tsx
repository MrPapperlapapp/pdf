import '@mantine/core/styles.css';
import './globals.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, createTheme } from '@mantine/core';
import { Providers } from '@/components/Providers';

const theme = createTheme({
  primaryColor: 'red',
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
});

export const metadata = {
  title: 'pdf.net - Professional All-In-One Online PDF Editor',
  description:
    'Effortlessly upload your PDF files to securely sign, edit, annotate, merge, and do much more with them using our online PDF editor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
