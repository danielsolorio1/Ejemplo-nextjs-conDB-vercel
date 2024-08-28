import "@/app/ui/global.css";
import { monserrat, lusitana } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
       {children}
       <footer className='py-10 flex justify-center items-center'>
        Hecho con ❤️ by Daniel Solorio
       </footer>
      </body>

      
    </html>
  );
}
