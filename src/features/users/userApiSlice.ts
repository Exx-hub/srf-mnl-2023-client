import { apiSlice } from "../../app/api/apiSlice";
import { IUser } from "../../types/interfaces";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId) => ({
        url: `/profile/${userId}`,
      }),
      transformResponse: (responseData: { data: IUser }) => {
        console.log("getUser data:", responseData);
        return responseData;
      },
      providesTags: ["Users"],
    }),
    enrollCourse: builder.mutation({
      query: (courseId) => ({
        url: "/enroll",
        method: "POST",
        body: { courseId },
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const { useGetUserQuery, useEnrollCourseMutation } = usersApiSlice;
