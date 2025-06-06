import { Project, SearchResult, Task, Teams, User } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["Projects", "Tasks", "Users", "Teams"],
    endpoints: (build) => ({
        getProjects: build.query<Project[], void>({
            query: () => "projects",
            providesTags: ["Projects"]
        }),
        createProject: build.mutation<Project, Partial<Project>>({
            query: (project) => ({
                url: "projects",
                method: "POST",
                body: project
            }),
            invalidatesTags: ["Projects"]
        }),
        getTasks: build.query<Task[], { projectId: number }>({
            query: ({ projectId }) => `tasks?projectId=${projectId}`,
            providesTags: (result) =>
                result
                    ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
                    : [{ type: "Tasks" as const }]
        }),
        getTasksByUser: build.query<Task[], { userId: number }>({
            query: ({ userId }) => `tasks/user/${userId}`,
            providesTags: (result, error, { userId }) =>
                result
                    ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
                    : [{ type: "Tasks" as const, id: userId }]
        }),
        createTask: build.mutation<Task, Partial<Task>>({
            query: (task) => ({
                url: "tasks",
                method: "POST",
                body: task
            }),
            invalidatesTags: ["Tasks"]
        }),
        updateTaskStatus: build.mutation<Task, { taskId: number; status: string }>({
            query: ({ taskId, status }) => ({
                url: `tasks/${taskId}/status`,
                method: "PATCH",
                body: { status }
            }),
            invalidatesTags: (result, error, { taskId }) => [
                { type: "Tasks", id: taskId },
            ]
        }),
        search: build.query<SearchResult, string>({
            query: (query) => `search?query=${query}`,
            providesTags: ["Tasks", "Projects", "Users"]
        }),
        getUsers: build.query<User[], void>({
            query: () => "users",
            providesTags: ["Users"]
        }),
        getTeams: build.query<Teams[], void>({
            query: () => "teams",
            providesTags: ["Teams"]
        }),
    })
})

export const {
    useGetProjectsQuery,
    useCreateProjectMutation,
    useGetTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskStatusMutation,
    useSearchQuery,
    useGetUsersQuery,
    useGetTeamsQuery,
    useGetTasksByUserQuery
} = api;