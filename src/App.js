import "./styles.css";
// import TweetEmbed from "react-tweet-embed";
import { useState, useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://remotebirdjobsapi.azurewebsites.net/search/devrel%20hiring", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);
  // let tweetid = articles.id;
  return (
    <>
      <div className="App"></div>
      <>
        <div className="App">
          <h1>REMOTE BIRD JOBS</h1>
          {articles.map((article) => {
            return (
              <div key={article.id}>
                {/* <h1>{article.id} </h1> */}

                {/* {console.log(tweetid)} */}
                <TwitterTweetEmbed tweetId={article.id} />
              </div>
            );
          })}
        </div>
      </>
    </>
  );
}
//YUP DONE/////
