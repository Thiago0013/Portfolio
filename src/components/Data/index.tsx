type DataChildren = {
    valor: number,
    text: string
}

export function Data( {valor, text}: DataChildren ){
    return(
        <>
            <strong>{valor}+</strong>
            <p>
                {text}
            </p>
        </>
    );
}