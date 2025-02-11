import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; 
import NavBar from '@/app/components/NavBar';
 
export default function Layout ({children} : {children: React.ReactNode}){
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />

        {children}
      </body>
    </html>
  )
}
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }