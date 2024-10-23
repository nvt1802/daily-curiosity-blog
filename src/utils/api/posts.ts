import { IPostResponse } from "@/src/types/posts";
import axiosInstance from "../axiosInstance";

export const fetchPosts = async (page: number) => {
  const { data } = await axiosInstance.get<IPostResponse>(
    `${process.env.NEXT_PUBLIC_CMS_API_URL}api/external/posts?page=${page}&limit=9`
  );
  return data.data;
};
