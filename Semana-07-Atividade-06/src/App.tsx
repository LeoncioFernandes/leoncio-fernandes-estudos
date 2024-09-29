import Joke from "./components/Joke"
import { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { JokeProps } from "./types/JokeProps";
import Spinner, { msgTypes } from "./components/Spinner";

export default function App() {
  
  const [jokes, setJokes] = useState<JokeProps[] | null>([]);
  const [titleJoke, setTitleJoke] = useState<string>("");
  const [answerJoke, setAnswerJoke] = useState<string>("");
  const [addJokeApi, setAddJokeApi] = useState<boolean>(false);
  const [delJokeApi, setDelJokeApi] = useState<boolean>(false);

  const titleRef = useRef<HTMLInputElement>(null);
  const answerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    GetAllJokes();
  }, [])

  async function GetAllJokes(){
    await axios.get<JokeProps[]>("http://localhost:3100/Jokes")
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      setJokes(null);
      alert("Erro ao acessar todas as piadas! Recarrege a página.");
      console.error("Erro ao acessar todas piadas.", error);
    })
  };

  async function AddJoke(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(titleJoke == ""){
      alert("O título da piada deve ser preenchido.")
      titleRef.current?.focus()
      return;
    }
    if(answerJoke == ""){
      alert("A resposta da piada deve ser preenchida.")
      answerRef.current?.focus()
      return;
    }
    if(jokes && jokes.length >= 10){
      alert("Só podem ser adicionadas no máximo 10 piadas.\nDelete uma piada para adicionar outra!")
      return;
    }

    const newJoke: JokeProps = {
      id: String(Number(jokes && jokes.at(-1)?.id) + 1),
      joke: titleJoke,
      response: answerJoke
    };

    setAddJokeApi(true);

    await axios.post<JokeProps>("http://localhost:3100/Jokes", newJoke)
    .then(() => {
      setTitleJoke("")
      setAnswerJoke("")
      jokes && setJokes([...jokes, newJoke])
      alert("Piada adicionada com sucesso!");
    })
    .catch((error) => {
      alert("Erro ao adicionar a piada! Tente novamente.");
      console.error("Erro ao adicionar piada.", error);
    })

    setAddJokeApi(false);
  }

  async function DeleteJoke(id: string) : Promise<void>{
    if(confirm(`Deseja excluir a piada ${id}?`)){

      setDelJokeApi(true);

      await axios.delete(`http://localhost:3100/Jokes/${id}`)
      .then(() => {
        const jokesAtt = jokes && jokes.filter((joke) => Number(joke.id) !== Number(id));
        setJokes(jokesAtt)
        alert("Piada excluída com sucesso!");
      })
      .catch((error) => {
        alert("Erro ao excluir a piada! Tente novamente.");
        console.error("Erro ao excluir piada.", error);
      })

      setDelJokeApi(false);

    }
  }

  if(jokes && jokes.length == 0){
    return (<Spinner msg={msgTypes.Load}/>)
  }

  if(jokes == null){
    return (
      <div className="flex justify-center items-center h-svh mx-8 text-center">
        Erro ao acessar as piadas. Por favor recarregue a página.
      </div>
    )
  }

  return (
    <main className='divide-y-2'>
      <h1 className='bg-[#f9001e] text-3xl text-center font-bold py-4 text-white'>Compass piadas</h1>
      <form
        onSubmit={AddJoke}
        className='bg-[#fb7f01] px-5 py-4'
      >
        <div className='container mx-auto flex flex-col items-center gap-2'>
          <input
            className='w-full bg-inherit p-2 placeholder:text-white/80 text-white outline-0 focus:border-b-2'
            type="text"
            placeholder='Digite o título da nova piada'
            value={titleJoke}
            onChange={(e) => setTitleJoke(e.target.value)}
            ref={titleRef}
          />
          <input
            className='w-full bg-inherit p-2  placeholder:text-white/80 text-white outline-0 focus:border-b-2'
            type="text"
            placeholder='Digite a resposta da nova piada'
            value={answerJoke}
            onChange={(e) => setAnswerJoke(e.target.value)}
            ref={answerRef}
          />
          <input
            className={`${addJokeApi || delJokeApi ? "bg-slate-400" : "bg-lime-700 hover:bg-lime-800"} text-wrap transition rounded-lg py-1 px-2 text-white shadow-lg`}
            type="submit"
            value="Adicionar nova piada"
            disabled={addJokeApi || delJokeApi}
          />
        </div>
        
      </form>
        {addJokeApi || delJokeApi ? (
          addJokeApi ? 
          (<Spinner msg={msgTypes.Add}/>)
          :
          (<Spinner msg={msgTypes.Del}/>)
        ):(
          <div className='divide-y-2 divide-black/50'>
            {jokes && jokes.map((joke) => (
              <Joke
                key={joke.id}
                id={joke.id}
                joke={joke.joke}
                response={joke.response}
                onDeleteJoke={DeleteJoke} />
            ))}
          </div>
        )}
    </main>
  )
}