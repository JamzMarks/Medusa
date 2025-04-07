export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh]"
      style={{ backgroundImage: `url('https://via.placeholder.com/1000')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-5xl font-bold mb-4">Medusa Pole Studio</h1>
          <p className="text-xl mb-8">
            Seja bem-vinda ao melhor studio de Pole Dance de Alphaville!
          </p>
          <a
            href="#more"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
}
