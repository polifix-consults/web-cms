import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddArticle } from "./services/fetchArticle";

export default function useAddArticle() {
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isLoading, error } = useMutation({
    mutationKey: ["addArticles"],
    mutationFn: (art) => AddArticle(art),
    onSuccess: () => {
      queryClient.invalidateQueries(["Articles"]); // Refreshes the "Articles" query after adding
    },
  });

  return { mutate, isSuccess, isLoading, error };
}
