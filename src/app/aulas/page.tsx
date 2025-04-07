import HeadTitle from '@/components/headTitle/headTitle'
import Card from './components/card'

export default function Aulas(){
    return(
        <div>
            <HeadTitle title="Nossas Aulas" paragraph='Conheça nossas modalidades'></HeadTitle>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 gap-x-8 gap-y-4">
                <Card
                    title='Pole Sport'
                    description="Vertente esportiva do pole dance, é a modalidade queridinha do estúdio. Nessa aula você aprende na barra fixa desde as bases do pole, como giros, escaladas, inversões e movimentos estáticos básicos, até combos e acrobacias intermediárias e avançadas. Se você busca emagrecimento, definição muscular e ganho de força, essa aula é pra você!"
                />
                <Card
                    title='Pole Spin'
                    description="Variação do pole sport, nessa aula são aplicados os movimentos aprendidos na barra estática, só que agora na barra giratória. É uma modalidade mais dinâmica, que exige bastante força, controle e técnica. Se você busca melhorar sua fluidez, leveza e resistência na barra, essa modalidade é pra você!"
                />
                <Card
                    title='Flexibilidade'
                    description="Voltada exclusivamente para o alongamento e fortalecimento geral do corpo, as aulas são divididas em flexibilidade de perna e flexibilidade de coluna. São trabalhados exercícios de flexibilidade ativa, passiva, isométricos e dinâmicos, sempre buscando o máximo de amplitude das articulações. Se você quer conquistar aquele espacate zerado ou uma ponte bem curvadinha, essa aula é pra você!"
                />
                <Card
                    title='Pole Exotic'
                    description="Estilo russo, nessa aula são trabalhadas coreografias com elementos específicos da modalidade, como tricks, transições, legwaves, handstands e muita dança! Se você quer fortalecer o corpo e aumentar a autoestima com um exercício super desafiador, dinâmico e divertido, essa aula é pra você!"
                />
                
            </div>
        </div>
    )
}