export const metadata = {
  title: 'Viet Long E-commerce API',
  description: 'Backend API for Viet Long e-commerce platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
