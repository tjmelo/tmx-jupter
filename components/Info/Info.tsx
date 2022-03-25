import style from './info.module.sass'

declare interface Data {
    data: object | any
}

export const Info = ({data}: Data) => {
    return (
        <section className={style.custom}>
            
            <h2>
                <small>CEP: {data.cep} </small>
                <strong>City:</strong>
                <span>{data.city}</span>
            </h2>
            <h4>
                <strong> -> Neighborhood:</strong>
                <span>{data.neighborhood}</span>
            </h4>
            <h4>
                <strong> -> State:</strong> 
                <span>{data.state}</span>
            </h4>
            <h4>
                <strong> -> Street:</strong>
                <span>{data.street}</span>
            </h4>
        </section>
    )
}
