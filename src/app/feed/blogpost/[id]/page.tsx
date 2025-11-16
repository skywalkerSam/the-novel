import MarkdownIt from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "~/lib/utils";
import { client } from "~/sanity/lib/client";
import { BLOGPOST_BY_ID_QUERY } from "~/sanity/lib/queries";

export default async function BlogpostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const post = await client.fetch(BLOGPOST_BY_ID_QUERY, { id });

  const md = MarkdownIt();
  const parsedContent = md.render(post?.content ?? "");

  return (
    <>
      <section className="flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div>
          <h1 className="mt-6 mb-6 text-7xl font-semibold">{post?.title}</h1>
          <p>{post?.description}</p>
        </div>
        <Image
          src={post?.image}
          alt="Cover image"
          width={900}
          height={600}
          className="rounded-lg"
        ></Image>
      </section>
      <section className="p-4 md:p-8 lg:p-12">
        {/* <Image src={post?.author?.image?.asset?._ref ?? ""} alt="Author image" width={60} height={60}/> */}
        <div className="flex-inline flex">
          <Link href={`/user/${post?.author?._id}`}>
            <Image
              src={post?.author?.image ?? ""}
              alt="Author image"
              width={60}
              height={60}
              className="drop-shadow-accent rounded-full drop-shadow-lg"
            />
          </Link>
          {/* <p>{post?.author?.name}</p> */}
          {/* Check for undefined to avoid TSBS.) */}
          <div className="mt-4 ml-4">
            <p>
              <span className="mr-1 font-bold">•</span>
              {post?._createdAt && formatDate(post?._createdAt)}
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center">
        {parsedContent ? (
          <article
            className="prose max-w-7xl break-all"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        ) : (
          <p>Blogpost coming soon...(</p>
        )}
      </section>
      <div className="p-8">
        <h3 className="py-2 text-2xl font-semibold">Categories...</h3>
        {post?.category ? (
          <Link
            href={`/search?query=${encodeURIComponent(post?.category.toLowerCase())}`}
          >
            {/* <p className="text-16-medium">{post?.category}</p> */}
            <p className="px-4 py-4 text-[16px] font-semibold">
              {post?.category}
            </p>
          </Link>
        ) : (
          <span>
            Uncategorized.(
          </span>
        )}
      </div>
    </>
  );
}
