import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separetor";
import { Tweet } from "../components/Tweet";
import { AnswersMocks } from "../mocks/mocksDatas";
import './Status.css'
import { PaperPlaneRight } from "phosphor-react";


export function Status() {

  const [newAnswersValue, setNewAnswers] = useState('');
  const [answers, setAnswers] = useState(AnswersMocks)

  function createNewAnswer(event: FormEvent){
    event?.preventDefault();

    setAnswers([newAnswersValue, ...answers]);
    setNewAnswers('');
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswersValue, ...answers]);
      setNewAnswers('');
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur asperiores debitis reiciendis eaque exercitationem expedita excepturi quasi ipsam ipsum numquam recusandae, quo repellendus totam rem. Doloremque consectetur nostrum illum enim!" />

      <Separator />

      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img src="https://github.com/joaopelisson.png" alt="João Pelisson" />
          <textarea 
          id="tweet" 
          placeholder="What's happening?" 
          onKeyDown={handleHotkeySubmit}
          onChange={(event) => setNewAnswers(event.target.value)}
          value={newAnswersValue}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Tweet</span>
        </button>
      </form>


      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
