type DataChildren = {
    valor: number,
    text: string
}

export function Data( {valor, text}: DataChildren ){
    return(
        <>
            <strong className={"text-yellow-300 text-2xl"}>{valor}</strong>
            <p className={"text-gray-400 text-xl"}>
                {text}
            </p>
        </>
    );
}