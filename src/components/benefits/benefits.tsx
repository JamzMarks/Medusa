interface BenefitsProps{
    title: string,
    description: string,
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function Benefits({title, description, Icon}: BenefitsProps){
    return(
        <article className="border-solid ">
            <div className="bg-white rounded-full">
                <Icon></Icon>
            </div>
            <div className="text-center">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    )
}