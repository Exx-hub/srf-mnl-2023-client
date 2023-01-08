import { apiSlice } from "../../app/api/apiSlice";
import { IUser } from "../../types/interfaces";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId) => ({
        url: `/profile/${userId}`,
      }),
      transformResponse: (responseData: { data: IUser }) => {
        console.log("responseData:", responseData);
        return responseData;
      },
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUserQuery } = usersApiSlice;
