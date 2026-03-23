type childrenServiceCards = {
    title: string;
    description: string;
}

export function ServiceCards({ title, description }: childrenServiceCards){
    return(
        <div
            className={"flex flex-col items-center justify-between border border-gray-300 rounded-xl min-w-[340px] max-w-[500px] h-[300px]"}
        >
            <div className={"p-4"}>
                <h2 className={"text-xl text-yellow-300 font-bold p-2"}>{title}</h2>
                <p className={"text-lg text-gray-400"}>{description}</p>
            </div>
            <button className={"flex justify-center items-center" +
                " w-[90%] p-4 m-4 rounded-2xl " +
                "bg-yellow-300 text-xl text-black " +
                "hover:opacity-50 " +
                "cursor-pointer"}
            >
                Escolher Serviço
            </button>
        </div>
    );
}