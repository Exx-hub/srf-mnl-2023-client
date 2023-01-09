import { apiSlice } from "../../app/api/apiSlice";

export const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => ({
        url: "/courses",
      }),
      transformResponse: (responseData: { data: any }) => {
        console.log("coursesData:", responseData);
        return responseData;
      },
      providesTags: ["Courses"],
    }),
  }),
});

export const { useGetCoursesQuery } = coursesApiSlice;
