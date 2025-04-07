
export interface PacoteProps {
  qtd: number,
  price: number,
  description: string,
  sugestions: string[]
}

export default function Card(pacote: PacoteProps){
    return(
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              {pacote.qtd > 1 ? `${pacote.qtd} aulas` : "Aula avulsa"}
            
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              {pacote.description}
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                R$ {pacote.price}{" "}
              </strong>

              {/* <span className="text-sm font-medium text-gray-700">/month</span> */}
            </p>

            <a
              className="mt-4 block rounded-sm border border-pink-700 bg-pink-700 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-pink-700 focus:ring-3 focus:outline-hidden sm:mt-6"
              href="#"
            >
              Adquira já
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
            Sugestão de utilização:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">

              {pacote.sugestions.map((item, index) => (
                <li className="flex items-center gap-1" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-pink-700 shadow-sm"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">{item}</span>
              </li>

              ))}

            </ul>
          </div>
        </div>
    )
}