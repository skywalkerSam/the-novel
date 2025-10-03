import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/search" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search..."
      />

      <div className="flex gap-1">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}
