import { IPostDetailResponse, IPostResponse } from "@/src/types/posts";
import axiosInstance from "../axiosInstance";

const BaseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

export const fetchPosts = async (page: number) => {
  const { data } = await axiosInstance.get<IPostResponse>(
    `${BaseUrl}api/external/posts?page=${page}&limit=9`
  );
  return data.data;
};

export const fetchPostBySlug = async (slug: string) => {
  const { data } = await axiosInstance.get<IPostDetailResponse>(
    `${BaseUrl}api/external/posts/${slug}`
  );
  return data.data;
};
