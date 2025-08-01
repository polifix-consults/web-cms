import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddPodcast } from "./services/fetchArticle";

export default function useAddPodcast() {
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isLoading, error } = useMutation({
    mutationKey: ["addArticles"],
    mutationFn: (art) => AddPodcast(art),
    onSuccess: () => {
      queryClient.invalidateQueries(["podcast"]); // Refreshes the "podcast" query after adding
    },
  });

  return { mutate, isSuccess, isLoading, error };
}
