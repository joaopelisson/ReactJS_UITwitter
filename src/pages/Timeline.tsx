import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separetor";
import { Tweet } from "../components/Tweet";
import { TweetsMocks } from "../mocks/mocksDatas";
import "./Timeline.css";

export function Timeline() {
  const [newTweetValue, setNewTweetValue] = useState('');
  const [tweets, setTweets] = useState(TweetsMocks)

  function createNewTweet(event: FormEvent){
    event?.preventDefault();

    setTweets([newTweetValue, ...tweets]);
    setNewTweetValue('');
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweetValue, ...tweets]);
      setNewTweetValue('');
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" /> 

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/joaopelisson.png" alt="João Pelisson" />
          <textarea
          id="tweet"
          placeholder="What's happening?"
          value={newTweetValue}
          onChange={(event) => setNewTweetValue(event.target.value)}
          onKeyDown={handleHotkeySubmit}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
