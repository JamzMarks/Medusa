import Pacote from "./components/pacote";
import Review from "@/components/review/review";
import { LuPackageOpen } from "react-icons/lu";



export default function Pacotes(){
    const reviews = [
        {
            image: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            name: 'Tatiana',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            image: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            name: 'Jonas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            image: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            name: 'Tatiana',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        }
    ]
    return(
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-left grid gap-15 mt-8 mb-8">
            <div>
                <h1 className=" mb-4 text-2xl font-extrabold text-gray-900  md:text-5xl lg:text-4xl"><span className="text-pink-800 flex gap-3"> {<LuPackageOpen></LuPackageOpen>} Pacotes </span>  de Aulas </h1>
                <p className="text-lg font-normal text-neutral-700 lg:text-lg">
                 Aqui no Medusa Pole Studio não trabalhamos com mensalidade, fidelidade ou taxas de matrículas. Além da aula experimental gratuita, você pode adquirir pacotes de aulas por valores que cabem no seu bolso!</p>
            </div>

            <Pacote></Pacote>

            <div>
                <h3 className="text-center"></h3>
                <div>
                <span className="flex items-center">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

                <span className="shrink-0 px-4 text-gray-900">O que as nossas alunas estão dizendo</span>

                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                </span>
                </div>
                
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-3  lg:text-lg">

                    {reviews.map((review, index) => (
                        <Review key={index}  image={review.image} name={review.name} description={review.description} ></Review>
                    ))}
                
                </div>
            </div>
        </div>
    )
}