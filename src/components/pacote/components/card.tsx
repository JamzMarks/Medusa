export default function Card(){
    return(
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
            20 aulas
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                R$ 400{" "}
              </strong>

              {/* <span className="text-sm font-medium text-gray-700">/month</span> */}
            </p>

            <a
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
              href="#"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
            Sugestão de utilização::
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700 shadow-sm"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">  2 a 3 aulas p/ semana </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700 shadow-sm"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Prazo de uso: 2 meses </span>
              </li>

            </ul>
          </div>
        </div>
    )
}