import { Header } from "../components/Header";
import { Separator } from "../components/Separetor";
import { Tweet } from "../components/Tweet";
import { TweetsMocks } from "../mocks/mocksDatas";
import "./Timeline.css";

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/joaopelisson.png" alt="João Pelisson" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {TweetsMocks.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
