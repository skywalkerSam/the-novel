export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-transparent via-[var(--green)] to-transparent">
        {children}
      </main>
    </>
  );
}
