export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-transparent via-[var(--green)] to-transparent">
      <div className="container flex flex-col items-center justify-center">
        <p className="text-2xl font-extrabold tracking-tight md:text-[2rem] text-green-100">
          <span className="text-black">
            <strong>Welcome</strong>
          </span>{" "}
          to
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-green-100 md:text-[5rem]">
          The{" "}
          <span className="text-black">
            <strong>Novel</strong>
          </span>
        </h1>
      </div>
    </main>
  );
}
