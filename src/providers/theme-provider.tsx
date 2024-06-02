"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import EndpointProvider from "@/context/endpoint-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider {...props}>
        <EndpointProvider>{children}</EndpointProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
};

export default ThemeProvider;
