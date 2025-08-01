"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPodcast } from "./services/fetchArticle";

export default function usePodcast() {
  const {
    data: podcast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["podcasts"],
    queryFn: () =>  fetchPodcast(),
  });

  return {
    podcast,
    isLoading,
    error,
  };
}
