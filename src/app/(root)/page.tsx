export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black text-white">
      <div className="container flex flex-col items-center justify-center">
        <p className="text-2xl font-extrabold tracking-tight md:text-[2rem]">
          <span className="text-gray-950">Welcome</span> to
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-[5rem]">
          The <span className="text-gray-950">Novel</span>
        </h1>
      </div>
    </main>
  );
}
