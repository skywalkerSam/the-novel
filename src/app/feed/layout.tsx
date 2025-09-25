export default function FeedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-transparent via-[var(--green)] to-transparent">
      {children}
    </main>
  );
}
