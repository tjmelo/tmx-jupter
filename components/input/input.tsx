import { useRef } from 'react';
import style from './input.module.sass';

export const Input = () => {

    const CEP = useRef<HTMLInputElement|any>();
    const getCEP = () => {
        console.log(CEP.current.value)
    }

    return(
        <input 
            className={style.input} 
            type="text" 
            ref={CEP}
            maxLength={8}
            placeholder='Type your CEP here'
            onInput={getCEP}
        />
    )
}
