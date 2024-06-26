import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script src="http://localhost:8097"></script>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
