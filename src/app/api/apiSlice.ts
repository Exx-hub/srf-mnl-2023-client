import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://srf-mnl-2023-server.vercel.app/",
    // baseUrl: "http://localhost:8080",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authState.accessToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Users", "Courses"],
  endpoints: (builder) => ({}),
});

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ["Note", "User"],
//   endpoints: (builder) => ({}),
// });

// fetchBaseQuery is like how you would use axios in another project.
// tagTypes => used for adding a tag to cached data
// endpoints => endpoints for queries

// ***tried changing error and usccess to be uniform

// export const apiSlice = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3500",
//     credentials: "include",
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().authState.token;

//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//         headers.set("alvin", "acosta"); // test
//       }

//       return headers;
//     },
//   }),
//   tagTypes: ["Note", "User"],
//   endpoints: (builder) => ({}),
// });
