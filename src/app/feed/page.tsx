import type { Author, Startup } from "~/sanity/types";
import { sanityFetch } from "~/sanity/lib/live";
import { BLOGPOSTS_QUERY } from "~/sanity/lib/queries";
import StartupCard, { type BlogpostTypeCardDef } from "./_components/StartupCard";
import type BlogpostTypeCardDef from "./_components/StartupCard";
import { client } from "~/sanity/lib/client";

// export type BlogpostTypeCardDef = Omit<Startup, "author"> & { author?: Author };

export default async function UserFeed() {
  const posts: BlogpostTypeCardDef = await client.fetch(BLOGPOSTS_QUERY);

  console.log(JSON.stringify(posts, null, 2))

  // const posts = await sanityFetch({ query: BLOGPOSTS_QUERY });

  // const posts = [
  //   {
  //     _id: 1,
  //     _createdAt: "2025.08.21",
  //     views: 69,
  //     author: { _id: 1, name: "Starboy" },
  //     description: "Who tf knows...",
  //     image:
  //       "https://images.unsplash.com/photo-1619491202102-088c4afb271c?ixid=M3w4ODczOHwwfDF8Y29sbGVjdGlvbnw4OHxiSERoNEFlN084b3x8fHx8Mnx8MTc0Mjk3ODk5MHw&ixlib",
  //     category: "Existence",
  //     title: "The inevitable Void of Absolute Nothingness",
  //   },
  // ];
  return (
    <div>
      <section className="section_container">
        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts.map((post: typeof BlogpostTypeCardDef) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results text-3xl text-red-400/60">
              no blogposts found .(
            </p>
          )}
        </ul>
      </section>
    </div>
  );
}
