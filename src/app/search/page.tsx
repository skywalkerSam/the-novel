import SearchForm from "./_components/SearchForm";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  //   const params = { search: query || null };
  return (
    <>
      <div className="mt-10">
        <SearchForm query={query}></SearchForm>
      </div>
    </>
  );
}
