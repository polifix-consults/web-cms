import React from "react";
import usePodcast from "./usePodcast";
import { Delete } from "./services/fetchArticle";

export default function PodcastSection() {
    const { podcast, isLoading: podcasting, error: podError } = usePodcast();
  return (
    <div className="podcastBoard">
      <div className="podcastListBox">
        {podcasting && <h1>Loading</h1>}
        {!podcasting &&
          podcast.data.map((index) => (
            <div key={index.id} className="podcastList">
              <div className="podcastImgBox">
                <img src={index.thumbnail} />
              </div>
              <div className="podcastContent">
                <h2>{index.vidDescription}</h2>
                <button onClick={()=> Delete(index.id)} className="podcast-btn">
                  DELETE
                </button>
              </div>
            </div>
          ))}
        {/* Placeholder for additional podcast items */}
      
      </div>
    </div>
  );
}
