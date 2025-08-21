import type { Author, Startup } from "@sanity/types";
import StartupCard from "./_components/StartupCard";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

export default function UserFeed() {
  const posts = [
    {
      _id: 1,
      _createdAt: "2025.08.21",
      views: 69,
      author: { _id: 1 },
      description: "Who tf knows...",
      image:
        "https://images.unsplash.com/photo-1619491202102-088c4afb271c?ixid=M3w4ODczOHwwfDF8Y29sbGVjdGlvbnw4OHxiSERoNEFlN084b3x8fHx8Mnx8MTc0Mjk3ODk5MHw&ixlib",
      category: "Existence",
      title: "The inevitable Void of Nothingness",
    },
  ];
  return (
    <div>
      <section className="section_container">
        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
