import TabBar from './TabBar';

export default function TabLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TabBar />
      {children}
    </>
  );
}
