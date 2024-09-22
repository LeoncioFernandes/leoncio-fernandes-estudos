import { useState } from "react"

export default function Joke({id, joke, response, onDeleteJoke}){

    const [viewResponse, setViewResponse] = useState(false);
    const [buttonName, setButtonName] = useState("Ver Resposta")

    function handleClick() {
        if (viewResponse){
            setViewResponse(false)
            setButtonName("Ver Resposta")
        }else{
            setViewResponse(true)
            setButtonName("Esconder resposta")
        }
    }

    return(
        <div className="container mx-auto px-5 py-3">
            <p className="font-mono">
                <span className="font-bold">{id}: </span>
                {joke}
            </p>
            <div className="flex flex-row justify-end w-full pt-4">
                {viewResponse && (
                    <p className="flex grow self-center justify-center px-2 font-bold text-lg leading-none text-[#fb7f01] drop-shadow-md">
                        {response}
                    </p>
                )}
                <div className="flex flex-col gap-2 min-w-[131px]">
                    <button
                        className="w-full text-white font-semibold bg-lime-600 hover:bg-lime-800 rounded-lg transition px-4 py-2 text-xs shadow-md"
                        onClick={handleClick}
                    >
                        {buttonName}
                    </button>
                    <button
                        className="w-full text-white font-semibold bg-red-600 hover:bg-red-800 rounded-lg transition px-4 py-2 text-xs shadow-md"
                        onClick={() => onDeleteJoke(id)}
                    >
                        Deletar
                    </button>
                </div>
                
            </div>
        </div>
    )
}