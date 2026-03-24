export function CertificationCards() {
    return (
        <article className="bg-gray-800 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-300 transition-all duration-300 group flex-shrink-0">
            <figure className="bg-gray-700 h-[180px] flex items-center justify-center border-b border-gray-700">
                <span className="text-gray-500 font-medium text-center px-4">Imagem do curso</span>
            </figure>

            <div className="p-5 flex flex-col gap-4">
                <div>
                    <h2 className="text-white font-bold text-xl mb-1">
                        Curso tal do tal
                    </h2>
                    <div className="flex gap-2 text-sm">
                        <span className="text-gray-400 font-bold">Plataforma:</span>
                        <span className="text-yellow-300">Udemy</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider">Habilidades:</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <span className="inline-block bg-gray-900 px-3 py-1 rounded-full text-yellow-300 border border-yellow-300/20 text-xs font-bold whitespace-nowrap">
                                Java
                            </span>
                        </li>
                        <li>
                            <span className="inline-block bg-gray-900 px-3 py-1 rounded-full text-yellow-300 border border-yellow-300/20 text-xs font-bold whitespace-nowrap">
                                Spring Boot
                            </span>
                        </li>
                        <li>
                            <span className="inline-block bg-gray-900 px-3 py-1 rounded-full text-yellow-300 border border-yellow-300/20 text-xs font-bold whitespace-nowrap">
                                MySQL
                            </span>
                        </li>
                    </ul>
                </div>

                <a
                    className="mt-4 text-center bg-transparent border border-gray-600 text-white font-bold py-2 rounded-lg hover:bg-yellow-300 hover:text-black hover:border-yellow-300 transition-all duration-300"
                    href="#"
                    target="_blank"
                >
                    Visualizar Certificado
                </a>
            </div>
        </article>
    );
}