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
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
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
