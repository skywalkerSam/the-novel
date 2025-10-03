import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  useCdn: false, // For hot reloads on localhost. Set it to `true` before production deployment!!!
});
