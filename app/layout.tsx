export const metadata = {
  title: 'Narsent AI',
  description: 'AI destekli tahsilat ve içgörü platformu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body style={{ backgroundColor: '#000', color: '#fff', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
