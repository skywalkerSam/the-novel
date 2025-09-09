import { type SchemaTypeDefinition } from "sanity";

import { author } from "~/sanity/schemaTypes/author";
import { blogpost } from "~/sanity/schemaTypes/blogpost";
import { feed } from "~/sanity/schemaTypes/feed";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blogpost, feed],
};
