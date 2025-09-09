import { defineQuery } from "next-sanity";

export const BLOGPOSTS_QUERY =
  defineQuery(`*[_type == "blogpost"] | order(_createdAt desc) {
  _id, 
  _type,
  _updatedAt,
  _rev,
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}
`);

export const SEARCH_QUERY =
  defineQuery(`*[_type == "blogpost" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
  _id, 
  _type,
  _updatedAt,
  _rev,
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);

export const BLOGPOST_BY_ID_QUERY =
  defineQuery(`*[_type == "blogpost" && _id == $id][0]{
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, username, image, bio
  }, 
  views,
  description,
  category,
  image,
  pitch,
}`);

export const BLOGPOST_VIEWS_QUERY = defineQuery(`
    *[_type == "blogpost" && _id == $id][0]{
        _id, views
    }
`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
*[_type == "author" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
*[_type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

export const BLOGPOSTS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "blogpost" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);

export const FEED_BY_SLUG_QUERY =
  defineQuery(`*[_type == "feed" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
