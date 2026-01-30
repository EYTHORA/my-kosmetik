import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./components/CartProvider";
import WishlistProvider from "./components/WishlistProvider";
import "./styles/product.css";
import { AuthProvider } from './components/AuthProvider';
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <WishlistProvider>
          <CartProvider>
            <Header />
            <AuthProvider>
            <main>{children}</main>
            </AuthProvider>
            <Footer />
          </CartProvider>
        </WishlistProvider>

        {/* Toaster untuk notifikasi */}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
