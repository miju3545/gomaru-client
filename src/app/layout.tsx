'use client';

import '@/styles/globals.css';

import { PropsWithChildren, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FNB } from '@/components/FNB';

export default function RootLayout({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <body>
            {children}
            <FNB />
          </body>
        </QueryClientProvider>
      </ThemeProvider>
    </html>
  );
}
