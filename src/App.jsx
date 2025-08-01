import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BlogSection from "./BlogSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import Modal from "./Modal";
import usePodcast from "./usePodcast";
import PodcastSection from "./PodcastSection";

function App() {
  const [form, setform] = useState(false);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {form && <Modal setForm={setform} form={form} />}
        <Header setForm={setform} />
        <div className="blogListContainer">
          <PodcastSection />
        </div>
      </>
    </QueryClientProvider>
  );
}

export default App;
