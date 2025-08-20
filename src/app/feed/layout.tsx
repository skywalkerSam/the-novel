export default function FeedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-transparent via-[var(--green)] to-transparent">
        {children}
      </div>
    </>
  );
}
