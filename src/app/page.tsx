import { Header } from "@/components/Header";
import {ArrowRightIcon, MoveRightIcon} from "lucide-react";
import {Data} from "@/components/Data";

export default function Home() {
  const valor = 200;
  return (
      <>
        <Header />
        <main>
          <section className="relative flex justify-center items-center text-white p-9 min-h-[80vh] overflow-hidden bg-gray-900">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-800 rounded-full -z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-20">
              
              <div>
                <h1 className="text-5xl">
                  Olá, eu sou <br /> <span className="font-bold">Ian Thiago</span>
                </h1>
                <hr className="border-t-2 border-yellow-300 w-96 my-8 border-4" />
                <p className="text-gray-400 w-104 text-lg">
                  Estudante de Sistemas de Informação e desenvolvedor Full-Stack focado em transformar ideias em aplicações robustas.
                  Minha missão é unir tecnologia e estratégia para construir soluções digitais que resolvam problemas reais e otimizem processos.
                </p>
              </div>

              <img className={"h-[700px] select-none"} src="/images/carinha.png" alt=""/>
              
              <div className="max-w-md">
                <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Serviços</h2>
                <p className="text-xl">
                  Especialista no desenvolvimento de APIs escaláveis com <b>Spring Boot</b> e criação de ecossistemas multiplataforma.
                  Construo sites e aplicativos nativos utilizando <b>React e React Native</b>.
                </p>

                <button className={"" +
                    "flex justify-center items-center gap-4" +
                    "border-2 border-transparent " +
                    "text-yellow-300 text-xl " +
                    "mt-4 p-2 " +
                    "hover:border-2 hover:border-yellow-300 " +
                    "transition-all duration-300 ease-in-out cursor-pointer"}>
                  Ver mais <ArrowRightIcon> </ArrowRightIcon>
                </button>
              </div>
            </div>
          </section>

          <section className={"bg-gray-950 text-white"}>
            <h1>O que posso fazer para atender suas necessidades?</h1>
            <p>
              É mais facil confiar no trabalho dos especialistas, pois eles são capazes de fornecer
              os melhores resultados com qualidade confiavel.
            </p>

            <div>
              <Data
                  valor={valor}
                  text={"Projetos Completados"}
              />
              <Data valor={valor} text={"Comunidade"} />
            </div>
          </section>
        </main>
      </>
  );
}