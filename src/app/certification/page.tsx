import {Header} from "@/components/Header";
import Footer from "@/components/Footer";
import {CertificationCards} from "@/components/CertificationCards";

export default function Certification() {
    return (
        <>
            <Header />
            <main className="bg-gray-900">
                <section className="text-white p-6 md:p-9 min-h-[80vh] bg-gray-900 max-w-[1400px] mx-auto">
                    <div className="border-b border-b-yellow-300 p-2 mb-8">
                        <h1 className="font-bold text-3xl">Certificações:</h1>
                    </div>
                    <div className="flex flex-wrap justify-start items-stretch gap-6">
                        <CertificationCards />
                        <CertificationCards />
                        <CertificationCards />
                        <CertificationCards />
                        <CertificationCards />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}