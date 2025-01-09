export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};

export type IBlog = {
  id: number | null;
  title: string | null;
  content: string | null;
  author: string | null;
  mainImage: string |null;
  type: string | null;
  createdAt: string | null,
};
