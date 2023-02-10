import { Header } from "../components/Header";
import { Separator } from "../components/Separetor";
import { Tweet } from "../components/Tweet";
import { AnswersMocks } from "../mocks/mocksDatas";
import './Status.css'


export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur asperiores debitis reiciendis eaque exercitationem expedita excepturi quasi ipsam ipsum numquam recusandae, quo repellendus totam rem. Doloremque consectetur nostrum illum enim!" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/joaopelisson.png" alt="João Pelisson" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>
        <button type="submit">Tweet</button>
      </form>


      {AnswersMocks.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
