import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5c2cc6f2e4f83b5dafe701180d940fef7016f9cf', queries,  });
export default client;
  