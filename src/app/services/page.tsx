import {Header} from "@/components/Header";
import Footer from "@/components/Footer";
import {ServiceCards} from "@/components/ServiceCards";

export const metadata = {
    title: "Serviços | Ian Thiago"
};

export default function Services(){
    const services = [
        {id: 1, title: "Deesenvolvimento Back-End", description: "Desenvolvimento de sistemas back-end em java utilizando o framework Spring Boot e suas derivadas."},
        {id: 2, title: "Desenvolvimento Front-End", description: "Desenvolvimento de interfaces modernas, responsivas e dinâmicas utilizando React e Next.js. Foco na melhor experiência do usuário (UX) e performance no navegador."},
        {id: 3, title: "Aplicações Full-Stack", description: "Desenvolvimento de ponta a ponta. Tiro a sua ideia do papel e entrego a aplicação completa, desde a modelagem do banco de dados até a interface final do usuário."},
        {id: 4, title: "Aplicações Full-Stack", description: "Desenvolvimento de ponta a ponta. Tiro a sua ideia do papel e entrego a aplicação completa, desde a modelagem do banco de dados até a interface final do usuário."},
        {id: 5, title: "Aplicações Full-Stack", description: "Desenvolvimento de ponta a ponta. Tiro a sua ideia do papel e entrego a aplicação completa, desde a modelagem do banco de dados até a interface final do usuário."},
        {id: 6, title: "Aplicações Full-Stack", description: "Desenvolvimento de ponta a ponta. Tiro a sua ideia do papel e entrego a aplicação completa, desde a modelagem do banco de dados até a interface final do usuário."}
    ]

    return(
        <>
            <Header />
            <main>
                <section className="text-white p-6 md:p-9 min-h-[80vh] overflow-hidden bg-gray-900">
                    <div className={"m-8"}>
                        <h1 className={"text-2xl font-bold "}>Meu Serviços:</h1>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-8 items-center justify-items-center">
                        {services.map((service) => (
                            <ServiceCards key={service.id} title={service.title} description={service.description} />
                        ))}
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}