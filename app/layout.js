import { Poppins } from "next/font/google";
import "./globals.css";
import { CarrinhoProvider } from "./_contexts/CarrinhoContext";
import ProviderToast from "./_components/ProviderToast";
import Header from "./_components/ui/Header";
import Footer from "./_components/ui/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s / Bella Pizza",
    default: "Bem-Vindo / Bella Pizza",
  },
  description: "Bella Pizza é a melhor pizzaria da cidade de Franca/SP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-primary-950 text-primary-100 relative flex min-h-screen w-full flex-col text-sm antialiased`}
      >
        <CarrinhoProvider>
          <Header />
          <ProviderToast>
            <main className="flex w-full flex-1 flex-col bg-stone-50 pt-[72px]">
              {children}
            </main>
          </ProviderToast>
        </CarrinhoProvider>
        <Footer />
      </body>
    </html>
  );
}
