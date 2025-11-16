import Image from "next/image";
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

  return (
    <>
      <section className="flex items-center justify-center p-8">
        <div className="flex-inline">
          <h1 className="mt-6 mb-6 text-7xl font-semibold">{post?.title}</h1>
          <p>{post?.description}</p>
        </div>
        <Image
          src={post?.image}
          alt="Cover image"
          width={900}
          height={600}
        ></Image>
      </section>
      <section className="p-8">
        {/* <Image src={post?.author?.image?.asset?._ref ?? ""} alt="Author image" width={60} height={60}/> */}
        <div className="flex-inline flex">
          <Image
            src={post?.author?.image ?? ""}
            alt="Author image"
            width={60}
            height={60}
            className="rounded-4xl"
          />
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

      <section className="p-8">
        <p>{post?.content}</p>
      </section>
    </>
  );
}
