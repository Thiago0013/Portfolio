import { getGithubData } from "@/services/github";
import {Header} from "@/components/Header";
import {ArrowRightIcon, GithubIcon} from "lucide-react";
import {Data} from "@/components/Data";
import {Cards} from "@/components/Cards";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Home | Ian Thiago"
};


export default async function Home() {
  const data = await getGithubData();

  return (
      <>
        <Header />
        <main>
          <section className="relative flex justify-center items-center text-white p-6 md:p-9 min-h-[80vh] overflow-hidden bg-gray-900">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gray-800 rounded-full -z-0"></div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start w-full max-w-md">
                <h1 className="text-4xl md:text-5xl">
                  Olá, eu sou <br /> <span className="font-bold">Ian Thiago</span>
                </h1>
                <hr className="border-t-2 border-yellow-300 w-2/3 md:w-96 my-6 md:my-8 border-4" />
                <p className="text-gray-400 w-full text-base md:text-lg">
                  Estudante de Sistemas de Informação e desenvolvedor Full-Stack focado em transformar ideias em aplicações robustas.
                </p>
              </div>

              <img
                  className="h-[350px] md:h-[500px] lg:h-[700px] object-contain select-none"
                  src="/images/carinha.png"
                  alt=""
                  draggable="false"
              />

              <div className="w-full max-w-md flex flex-col items-center lg:items-start">
                <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Serviços</h2>
                <p className="text-lg md:text-xl">
                  Especialista no desenvolvimento de APIs escaláveis com <b>Spring Boot</b>.
                </p>

                <Link href={"/services"} className="flex justify-center items-center gap-4 border-2 border-transparent text-yellow-300 text-lg md:text-xl mt-4 p-2 hover:border-yellow-300 transition-all duration-300 ease-in-out cursor-pointer">
                  Ver mais <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row items-center justify-around bg-gray-800 p-6 md:p-12 gap-12 lg:gap-8">
            <div className="flex items-center justify-center flex-col text-center lg:text-left">
              <div className="mb-8 w-full max-w-[700px]">
                <h3 className="text-white text-2xl md:text-3xl mb-4">O que posso fazer para atender suas necessidades?</h3>
                <p className="text-gray-400 text-base md:text-lg">É mais fácil confiar o trabalho aos especialistas porque eles são capazes de fornecer os melhores resultados com qualidade confiável.</p>
              </div>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 sm:gap-24 mb-8">
                  <div className="w-[100px]">
                    <Data
                        valor={data.public_repos}
                        text="Repositórios"
                    />
                  </div>
                  <div className="w-[100px]">
                    <Data
                        valor={0}
                        text="Seguidores"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 sm:gap-24">
                  <div className="w-[100px]">
                    <Data
                        valor={2}
                        text="Projetos"
                    />
                  </div>
                  <div className="w-[100px]">
                    <Data
                        valor={200}
                        text="algo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 select-none w-full max-w-md lg:max-w-none">
              <Cards
                  src="/images/back-end-developer.png"
                  alt="back-end"
                  title="Desenvolvimento Back-End"
                  number={20}
              />
              <Cards
                  src="/images/front-end.jpg"
                  alt="front-end"
                  title="Desenvolvimento Front-End"
                  number={20}
              />
              <Cards
                  src="/images/images.jpeg"
                  alt="back-end-2"
                  title="Desenvolvimento Back-End"
                  number={20}
              />
            </div>
          </section>
          <section className={"p-6 md:p-9 min-h-[80vh] overflow-hidden bg-gray-900"} >
            <div className={"border-b border-yellow-300 p-2 mb-8"}>
              <h2 className={"text-3xl text-white font-bold"}>Sobre mim</h2>
            </div>

            <div className={'flex flex-col lg:flex-row gap-16 lg:gap-4 items-center md:justify-around h-full mt-32'}>
              <div>
                <p className="max-w-[500px] text-xl text-gray-400">
                  Atualmente no 5º período no <strong className="text-yellow-300">IFCE - Campus Cedro</strong>, sou um desenvolvedor apaixonado por entender como as coisas funcionam por baixo dos panos.
                  Minha jornada técnica é guiada por duas grandes áreas: o <strong className="text-yellow-300">desenvolvimento web</strong> e a <strong className="text-yellow-300">cibersegurança</strong>. Acredito que, no cenário atual,
                  não basta apenas fazer o código funcionar. Meu foco é construir aplicações e APIs que sejam escaláveis, eficientes e, acima de tudo,
                  <strong className="text-yellow-300"> seguras</strong> contra ameaças reais desde a sua concepção.
                  Estou sempre em busca de novos desafios, aplicando boas práticas de engenharia de software para transformar problemas complexos em soluções inteligentes
                  e confiáveis.
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <a
                      href="/curriculo.pdf"
                      download
                      className="flex justify-center items-center gap-2 bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    Baixar Currículo <ArrowRightIcon />
                  </a>

                  <a
                      href="https://github.com/Thiago0013"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-2 border-2 border-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:border-yellow-300 hover:text-yellow-300 transition-all duration-300 cursor-pointer"
                  >
                    GitHub <GithubIcon />
                  </a>
                </div>
              </div>
              <div className={"rounded-full bg-gray-200"}>
                <img className={"w-[350px] h-[350px] rounded-full border-2 border-yellow-300 select-none"} draggable={"false"} src="/images/ian.png" alt=""/>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
  );
}