import { axiosInstance, publicAPI } from "@/utils/axiosConfig";

export const register = async (data: {
  user_name: string;
  email: string;
  password: string;
  confirm_password: string;
}) => {
  try {
    const response = await publicAPI.post(
      "/api/v1/auth/register?lang=vi",
      data,
    );
    return response.data;
    // return registerRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const login = async (data: { user_name: string; password: string }) => {
  try {
    // const response = await publicAPI.post("/api/v1/auth/login", data);
    // return response.data;
    return loginRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logout = async (data: string ) => {
  try {
    const response = await axiosInstance.post("/api/v1/auth/logout?sessionState=" +  data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllBlog = async () => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/blogs?page=0&size=6&sortBy=createdAt&direction=desc",
    );
    return response.data;
    // return getAllBlogRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPost = async (data: {
  title: string | null;
  author: string | null;
  content: string | null;
  type: string | null;
}) => {
  try {
    const response = await axiosInstance.post("/api/v1/blogs", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editPost = async () => {
  try {
    const response = await axiosInstance.put("/api/v1/blogs");
    return response.data;
    // return getAllBlogRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePost = async (data: number) => {
  try {
    const response = await axiosInstance.delete("/api/v1/blogs/6");
    return response.data;
    // return getAllBlogRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginRes = {
  status: "200 OK",
  code: 200,
  message: "Thành công",
  data: {
    access_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJJYWQ5OUJkdGE4dXdIWnpiOFFaUVlFVzExZFZsQ2loRktPdjJLOUZncEQ0In0.eyJleHAiOjE3MzYzMjc4NjYsImlhdCI6MTczNjMwOTg2NiwianRpIjoiMTQzZDFjZmItNTU4MC00NDUyLTk2MTQtNGFmMzIwZDVmNWRjIiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtc3NvLmRldi5jbHVzdGVyMDIuZmlzLWNsb3VkLnhwbGF0Lm9ubGluZS9yZWFsbXMvYXV0aC1wb3J0YWwiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMmVkMTliMDItYzRkZC00MTI5LTg5YWYtNTFjMTM0MmNlN2E2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXV0aC1wb3J0YWwiLCJzZXNzaW9uX3N0YXRlIjoiZTk5Y2UzY2ItNmI0My00ODA4LTkyOGEtYjRjYzBmN2MwNTE4IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1hdXRoLXBvcnRhbCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImU5OWNlM2NiLTZiNDMtNDgwOC05MjhhLWI0Y2MwZjdjMDUxOCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYmxvZzA2IiwiZW1haWwiOiJibG9nMDZAZ21haWwuY29tIn0.F5P8QXXK01QcVs3FM6sM-YHsOh3ZdEVhjCnmm7hUcpfIcaU33t2Csg-ZRlmp6UkIzyG9dfhUqLYxqhFp9ZitRx5_NozFIWVlGboFrvziiL7MwQD-atzWYN2afji7r-qtRlWqDGJ3OumpRHhkrh2mInEy8qCQiQ_Egzj3GbuMdUK4CJ6K3nEo0f5NHzm4O8cE-Xkv_3ZU_jN3g-y4HAgp9tSjUMn20iJUdrHd5aEeUWmh5m8BKk1H3J5NAUtcB0yKUhklc767hztYht827JeaSivSmjo6Hk8QejN8452-rBkmoPPCdKNI65KTfsiFdWM0Ji9YEWnmD4_AwY3Nv5ladQ",
    expires_in: 18000,
    refresh_expires_in: 1800,
    refresh_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlOTI5NDkwYS0yZGU1LTQ3M2MtYTJmYS1hMDE2MWQ4NGY4ZjgifQ.eyJleHAiOjE3MzYzMTE2NjYsImlhdCI6MTczNjMwOTg2NiwianRpIjoiYzdkNWI0ZDQtNjExOS00ZGRiLTg5NjYtZjg2OWFkMDQzMDVmIiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtc3NvLmRldi5jbHVzdGVyMDIuZmlzLWNsb3VkLnhwbGF0Lm9ubGluZS9yZWFsbXMvYXV0aC1wb3J0YWwiLCJhdWQiOiJodHRwczovL3BvcnRhbC1zc28uZGV2LmNsdXN0ZXIwMi5maXMtY2xvdWQueHBsYXQub25saW5lL3JlYWxtcy9hdXRoLXBvcnRhbCIsInN1YiI6IjJlZDE5YjAyLWM0ZGQtNDEyOS04OWFmLTUxYzEzNDJjZTdhNiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJhdXRoLXBvcnRhbCIsInNlc3Npb25fc3RhdGUiOiJlOTljZTNjYi02YjQzLTQ4MDgtOTI4YS1iNGNjMGY3YzA1MTgiLCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJlOTljZTNjYi02YjQzLTQ4MDgtOTI4YS1iNGNjMGY3YzA1MTgifQ.cwvoSEw9JibsqOlCLSijQvZf29Yv9dAK8k3Pjsk-qQA",
    token_type: "Bearer",
    id_token: null,
    "not-before-policy": 0,
    session_state: "e99ce3cb-6b43-4808-928a-b4cc0f7c0518",
    scope: "profile email",
    error: null,
    error_description: null,
    error_uri: null,
  },
};

export const registerRes = {
  status: "201 CREATED",
  code: 201,
  message: "100000005",
  data: {
    id: 3,
    createdAt: "2025-01-08T04:18:29.056766600Z",
    createdBy: null,
    updatedBy: null,
    updatedAt: "2025-01-08T04:18:29.056766600Z",
    deletedAt: null,
    deletedBy: null,
    isDeleted: false,
    userName: "blog0",
    password: "$2a$10$i8oZnWcim5t0qPUOJTIZteH4MpFP8ucR2w2VhssmiOfxUpInfwFSG",
    email: "blog08@gmail.com",
  },
};

export const logoutRes = {
  status: "200 OK",
  code: 200,
  message: "100000007",
  data: "6dd970aa-c0b9-4633-9d8e-027674b56bde",
};

export const createBlogRes = {
  status: "201 CREATED",
  code: 201,
  message: "Thành công",
  data: {
    id: 5,
    createdAt: "2025-01-08T06:35:18.183596100Z",
    createdBy: null,
    updatedBy: null,
    updatedAt: "2025-01-08T06:35:18.183596100Z",
    deletedAt: null,
    deletedBy: null,
    isDeleted: false,
    title: "My First Blog1",
    content: "This is the content of my blog 2.",
    author: "John Doe",
    type: "security",
  },
};

export const getAllBlogRes = {
  status: "200 OK",
  code: 200,
  message: "200000001",
  data: {
    content: [
      {
        id: 5,
        createdAt: "2025-01-08T06:35:18.183596Z",
        createdBy: null,
        updatedBy: null,
        updatedAt: "2025-01-08T06:35:18.183596Z",
        deletedAt: null,
        deletedBy: null,
        isDeleted: false,
        title: "My First Blog1",
        content: "This is the content of my blog 2.",
        author: "John Doe",
        mainImage: "/images/blog/blog-03.png",
      },
      {
        id: 4,
        createdAt: "2025-01-07T15:03:06.190481Z",
        createdBy: null,
        updatedBy: null,
        updatedAt: "2025-01-08T10:28:47.327625Z",
        deletedAt: null,
        deletedBy: null,
        isDeleted: false,
        title: "My First Blog222",
        content: "This is the content of my blog 222222222",
        author: "John Doeqư",
        mainImage: "/images/blog/blog-03.png",
      },
      {
        id: 1,
        createdAt: "2025-01-07T15:03:06.190481Z",
        createdBy: null,
        updatedBy: null,
        updatedAt: "2025-01-08T10:28:47.327625Z",
        deletedAt: null,
        deletedBy: null,
        isDeleted: false,
        title: "My First Blog222",
        content: "This is the content of my blog 222222222",
        author: "John Doeqư",
        mainImage: "/images/blog/blog-03.png",
      },
      {
        id: 2,
        createdAt: "2025-01-07T15:03:06.190481Z",
        createdBy: null,
        updatedBy: null,
        updatedAt: "2025-01-08T10:28:47.327625Z",
        deletedAt: null,
        deletedBy: null,
        isDeleted: false,
        title: "My First Blog222",
        content: "This is the content of my blog 222222222",
        author: "John Doeqư",
        mainImage: "/images/blog/blog-03.png",
      },
      {
        id: 6,
        createdAt: "2025-01-07T15:03:06.190481Z",
        createdBy: null,
        updatedBy: null,
        updatedAt: "2025-01-08T10:28:47.327625Z",
        deletedAt: null,
        deletedBy: null,
        isDeleted: false,
        title: "My First Blog222",
        content: "This is the content of my blog 222222222",
        author: "John Doeqư",
        mainImage: "/images/blog/blog-03.png",
      },
      {
        id: 7,
        createdAt: "2025-01-07T15:03:06.190481Z",
        createdBy: null,
        updatedBy: null,
        updatedAt: "2025-01-08T10:28:47.327625Z",
        deletedAt: null,
        deletedBy: null,
        isDeleted: false,
        title: "My First Blog222",
        content: "This is the content of my blog 222222222",
        author: "John Doeqư",
        mainImage: "/images/blog/blog-03.png",
      },
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 6,
      sort: {
        empty: false,
        sorted: true,
        unsorted: false,
      },
      offset: 0,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalElements: 2,
    totalPages: 1,
    size: 6,
    number: 0,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    first: true,
    numberOfElements: 2,
    empty: false,
  },
};

export const editPostRes = {
  status: "200 OK",
  code: 200,
  message: "100000012",
  data: {
    id: 4,
    createdAt: "2025-01-07T15:03:06.190481Z",
    createdBy: null,
    updatedBy: null,
    updatedAt: "2025-01-08T10:28:47.327625300Z",
    deletedAt: null,
    deletedBy: null,
    isDeleted: false,
    title: "My First Blog222",
    content: "This is the content of my blog 222222222",
    author: "John Doeqư",
  },
};
