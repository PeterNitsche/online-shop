import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";

import { Container } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "My Online Shop",
  description: "My Personal Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Container maxWidth="lg">{children}</Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
