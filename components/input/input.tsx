import { SyntheticEvent, useRef } from 'react';
import { IGettingCEP } from '../../types';
import { InputZipCode } from '../../styles';

export const Input = ({gettingCEP}: IGettingCEP) => {
    const isZipCode = useRef<HTMLInputElement>(null);

    const getCEP = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        gettingCEP(isZipCode.current?.value)
    }

    return(
        <form onSubmit={getCEP}>
            <InputZipCode 
                type="text" 
                ref={isZipCode}
                maxLength={8}
                placeholder='Type your Zip Code here'
            />
        </form>
    )
}
