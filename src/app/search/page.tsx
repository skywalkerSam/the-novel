import SearchForm from "./_components/SearchForm";

// export default async function Search({
//   searchParams,
// }: {
//   searchParams: Promise<{ query?: string }>;
// }) {
//   const query = (await searchParams).query;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string | string[] }>;
}) {
  const raw = (await searchParams)?.query;
  const query = Array.isArray(raw) ? raw[0] : raw;

  return (
    <>
      <div className="mt-10">
        <SearchForm query={query}></SearchForm>
      </div>
    </>
  );
}
