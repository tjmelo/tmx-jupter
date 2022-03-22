import style from './input.module.sass';

export const Input = () => {
    return(
        <input 
            className={style.input} 
            type="text" 
            placeholder='Type your CEP here' 
        />
    )
}
