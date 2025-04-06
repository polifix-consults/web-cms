"use client"
import { fetchArticles } from "./services/fetchArticle";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddArticle } from "./services/fetchArticle";


export default function useArticles() {
  const {
    data: Article,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Articles"],
    queryFn: () => fetchArticles(),
  });

  return { Article, isLoading, error };
}


