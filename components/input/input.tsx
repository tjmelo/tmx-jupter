import { useRef } from 'react';
import style from './input.module.sass';
import { useDispatch } from 'react-redux';
import { store } from '../../controller';

export const Input = () => {
    const dispatch = useDispatch()
    const CEP = useRef<HTMLInputElement|any>();
    const getCEP = () => {
        dispatch(store(CEP.current.value))
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
