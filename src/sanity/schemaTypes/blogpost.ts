import { defineField, defineType } from "sanity";

export const blogpost = defineType({
  name: "blogpost",
  title: "Blogpost",
  type: "document",
  fields: [
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(120).required().error("Please provide a good title"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().custom(s => (s?.current?.length ?? 0) <= 96 || "Max 96 chars"),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) =>
        Rule.min(3)
          .max(300)
          .required()
          .error("Please provide a good description"),
    }),
    defineField({
      name: "image",
      type: "url",
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "markdown",
    }),
    defineField({
      name: "category",
      type: "string",
      // validation: (Rule) =>
      //   Rule.min(1).max(20).required().error("Please enter a category"),
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "likes",
      type: "number",
    }),
    // Comments
    // Bookmarks
  ],
});
