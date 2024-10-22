import styled from "styled-components"

export const ContainerSection = styled.section`
    padding: 0 2rem
`

export const TitleSection = styled.h1`
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    padding: 2rem 0
`

export const FallbackSection = styled.section`
    margin: 2rem 0
`

export const FallbackTitle = styled.h3`
    color: #BD8C00
`
export const UnavailableMap = styled.div`
    align-items: center;
    border: 1px dashed #0D3DFC;
    color: #BD8C00;
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    justify-content: center;
    margin-top: 4rem;
    padding: 4rem 2rem
`

export const InfoSection = styled.section`
    overflow: hidden;
    margin: 2rem 0;

    span {
        margin-left: .5rem;
        border-bottom: 2px dotted #BD8C00;
    };

    small {
        display: block;
        font-size: .8rem;
        color: #BD8C00;
        text-decoration: none;
    };

    strong {
        color: rgba(255,255,255, .4);
        text-decoration: none;
    }
`

export const InputZipCode = styled.input`
    background: transparent;
    border: 3px solid rgba(255, 255, 255, .5);
    border-radius: .5rem;
    color: #ffffff;
    font-family: 'Fira Code', monospace;
    font-size: 1.2rem;
    padding: 1rem;
    width: 100%;

    &::placeholder {
        color: rgba(255, 255, 255, .2);
    }
`