import style from './fallback.module.sass'

const NoCEP = () => {
    return (
        <section className={style.custom}>
            <h3> {"-> "} Waiting for a Zip Code...</h3>
        </section>
    )
}

const NotFound = () => {
    return (
        <section className={style.custom}>
            <h3> {"-> "} Zip code not found!</h3>
        </section>
    )
}

export { NoCEP, NotFound }