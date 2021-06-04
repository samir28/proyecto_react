

interface CardProps {
    name: string;
    description: string;
}

const SectionPrincipal = ({ name, description }: CardProps) => {
    return (
        <div className="card">
            <div className="card-header">
                {name}
            </div>
            <div className="card-body">
                <div>{description}</div>
            </div>
        </div>
    )
}

export default SectionPrincipal
