export enum msgTypes {
    Add = "Adicionando Piada...",
    Del = "Deletando Piada...",
    Load = "Carregando Piadas..."
}

type SpinnerProps = {
    msg: msgTypes
}

export default function Spinner({msg}: SpinnerProps){

    return(
        <div className={`flex flex-col justify-center items-center gap-8 ${msg != msgTypes.Load ? "h-[calc(100svh-230px)]" : "h-svh"} `}>
            <p className="text-xl font-bold drop-shadow-md">{msg}</p>
            <svg className="animate-[spin_1.5s_linear_infinite] w-40" xmlns="http://www.w3.org/2000/svg" width="71.7122mm" height="66.1826mm" version="1.1" viewBox="0 0 5445.66 5025.75">
                <circle fill="#FB7F01" cx="2868.45" cy="208.11" r="204.86"/>
                <circle fill="#F9001E" cx="3499.96" cy="307.3" r="307.29"/>
                <circle fill="#FB7F01" cx="4223.1" cy="719.89" r="409.73"/>
                <circle fill="#F9001E" cx="4804.83" cy="1586.19" r="512.16"/>
                <circle fill="#FB7F01" cx="4831.06" cy="2846.04" r="614.59"/>
                <circle fill="#FB7F01" cx="2237.25" cy="4206.29" r="819.45"/>
                <circle fill="#F9001E" cx="3916.32" cy="4017.48" r="717.02"/>
                <ellipse fill="#F9001E" cx="921.88" cy="2897.07" rx="921.88" ry="921.89"/>
            </svg>
        </div>
    )
}