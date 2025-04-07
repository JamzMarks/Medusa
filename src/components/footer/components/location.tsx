import { FaLocationDot } from "react-icons/fa6";

export default function Location(){
    return(
        <div className="mt-8 space-y-4 lg:mt-0">
          <span className="hidden h-1 w-10 rounded-sm bg-teal-500 lg:block"></span>

          <div>
            <h2 className="text-2xl font-medium text-gray-900 dark:text-white">Venha nos conhecer</h2>

            <p className="flex gap-1 mt-4 max-w-lg text-gray-500 dark:text-gray-400"><FaLocationDot></FaLocationDot>Calçada Aldebarã, 202- Sala 3</p>
            <p className="mt-4 max-w-lg text-gray-500 dark:text-gray-400">Alphaville, Santana de Parnaíba - SP, 06539-130</p>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.9196094571266!2d-46.87820709999999!3d-23.463364099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0319e2a99109%3A0xccf594e01a707a91!2sMedusa%20Pole%20Studio!5e0!3m2!1sen!2sbr!4v1743983103383!5m2!1sen!2sbr" 
            width="400" 
            height="300" 
            // style="border:0;" 
            // allowfullscreen="" 
            loading="lazy" 
            // referrerpolicy="no-referrer-when-downgrade"
            >         
          </iframe>
        </div>
    )
}