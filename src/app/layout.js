import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Doodle",
  description: "google clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
