import Pacote from "@/components/pacote/pacote";
import Review from "@/components/review/review";

export default function PacotesPage(){
    return(
        <section>
            <h1>Pacotes de Aulas</h1>
            <p>Aqui no Medusa Pole Studio não trabalhamos com mensalidade, fidelidade ou taxas de matrículas. Além da aula experimental gratuita, você pode adquirir pacotes de aulas por valores que cabem no seu bolso!</p>
            <Pacote></Pacote>
            <div className="flex">
                <Review/>
                <Review/>
                <Review/>
            </div>
        </section>
    )
}