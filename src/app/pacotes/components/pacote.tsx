import Card from './card'



export default function Pacote() {
  const pacotes = [{
    qtd: 5,
    price: 210,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    sugestions: [
      "1 aula por semana",
      "Prazo de uso: 1 mês"
    ]
  },
  {
    qtd: 10,
    price: 400,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    sugestions: [
      "2 aulas por semana",
      "Prazo de uso: 1 mês"
    ]
  },
  {
    qtd: 20,
    price: 715,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    sugestions: [
      "2 a 3 aulas p/ semana",
      "Prazo de uso: 2 meses"
    ]
  },
  {
    qtd: 1,
    price: 60,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    sugestions: [
      "Prazo de uso: 1 semana"
    ]
  },
  

]
  return (
    <div className="max-w-screen-xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:gap-8 lg:grid-cols-4">       
         {pacotes.map((pacote, index) => (
          <Card
            key={index}
            qtd={pacote.qtd}
            price= {pacote.price}
            description={pacote.description}
            sugestions={pacote.sugestions}

          />
         ))}
      </div>
      </div>
    );
}
