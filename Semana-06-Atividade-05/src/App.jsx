import './App.css'
import Joke from './components/Joke'
import mockingJokes from './data/mockingJokes.json'
import {useState} from 'react'

function App() {

  const [jokes, setJokes] = useState(mockingJokes);
  const [titleJoke, setTitleJoke] = useState("");
  const [answerJoke, setAnswerJoke] = useState("");

  function HandleSubmit(e){
    e.preventDefault();

    if(titleJoke == ""){
      alert("O título da piada deve ser preenchido.")
      document.getElementById("title").focus()
      return
    }
    if(answerJoke == ""){
      alert("A resposta da piada deve ser preenchida.")
      document.getElementById("answer").focus()
      return
    }
    if(jokes.length >= 10){
      alert("Só podem ser adicionadas no máximo 10 piadas.\nDelete uma piada para adicionar outra!")
      return
    }

    document.getElementById("title").value = ""
    document.getElementById("answer").value = ""
    setTitleJoke("")
    setAnswerJoke("")
    setJokes([...jokes, {id: Number(jokes.at(-1).id) + 1, joke: titleJoke, response: answerJoke}])
    alert("Piada adicionada com sucesso!")
    return
  }

  function DeleteJoke(id){
    if(confirm(`Deseja excluir a piada ${id}?`)){

      const jokesAtt = jokes.filter((joke) => Number(joke.id) !== Number(id));
      setJokes(jokesAtt)
      alert(`Piada ${id} excluída com sucesso!`)
      return

    }
    return
  }

  return (
    <main className='divide-y-2'>
      <h1 className='bg-[#f9001e] text-3xl text-center font-bold py-4 text-white'>Compass piadas</h1>
      <form
        onSubmit={HandleSubmit}
        className='bg-[#fb7f01] px-5 py-4'
      >
        <div className='container mx-auto flex flex-col items-center gap-2'>
          <input
            className='w-full bg-inherit p-2 placeholder:text-white/80 text-white outline-0 focus:border-b-2'
            type="text"
            placeholder='Digite o título da nova piada'
            onChange={(e) => setTitleJoke(e.target.value)}
            id='title'
          />
          <input
            className='w-full bg-inherit p-2  placeholder:text-white/80 text-white outline-0 focus:border-b-2'
            type="text"
            placeholder='Digite a resposta da nova piada'
            onChange={(e) => setAnswerJoke(e.target.value)}
            id='answer'
          />
          <input
            className='bg-lime-700 hover:bg-lime-800 text-wrap transition rounded-lg py-1 px-2 text-white shadow-lg'
            type="submit"
            value="Adicionar nova piada" 
          />
        </div>
        
      </form>
      <div className='divide-y-2 divide-black/50'>
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            id={joke.id}
            joke={joke.joke}
            response={joke.response}
            onDeleteJoke={DeleteJoke} />
        ))}
      </div>
    </main>
  )
}

export default App
