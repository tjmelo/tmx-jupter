import { useRef } from 'react';
import style from './input.module.sass';

export const Input = ({gettingCEP}: any) => {
    const CEP = useRef<HTMLInputElement|any>();
    const getCEP = (e: any) => {
        e.preventDefault()
        gettingCEP(CEP.current.value)
    }

    return(
        <form onSubmit={getCEP}>
            <input 
                className={style.input} 
                type="text" 
                ref={CEP}
                maxLength={8}
                placeholder='Type your CEP here'
            />
        </form>
    )
}
