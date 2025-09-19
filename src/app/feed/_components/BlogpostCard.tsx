import { cn, formatDate } from "~/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "~/components/ui/button";
import type { Author, Blogpost } from "sanity.types.ts";
import { Skeleton } from "./Skeleton";

export type BlogpostCardType = Omit<Blogpost, "author"> & {
  author?: Author;
};

// const BlogpostCard = ({ post }: { post: Partial<Blogpost> }) => {
const BlogpostCard = ({ post }: { post: BlogpostCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="blogpost-card group">
      <div className="flex-between">
        <p className="blogpost-card_date text-black">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-black" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          {/* <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link> */}
          <Link href={`/blogpost/${_id}`}>
            <h3 className="text-26-semibold text-primary">{title}</h3>{" "}
            {/* line-clamp-1 */}
          </Link>
        </div>
        <Link href={`/author/${author?._id}`}>
          <img
            src={author?.image ?? "https://github.com/starboy-inc.png"}
            alt={author?.name ?? "Author"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/blogpost/${_id}`}>
        <p className="blogpost-card_desc">{description}</p>

        <img
          src={image ?? "https://github.com/starboy-inc.png"}
          alt="Cover image"
          className="blogpost-card_img"
        />
      </Link>

      <div className="flex-between mt-5 gap-3">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="blogpost-card_btn" asChild>
          <Link href={`/blogpost/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const BlogpostCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="blogpost-card_skeleton" />
      </li>
    ))}
  </>
);

export default BlogpostCard;
