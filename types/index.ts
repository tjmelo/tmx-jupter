export interface ICoordinates {
    longitude: string,
    latitude: string
}

export interface ILocation {
    type: string,
    coordinates: ICoordinates
}

export interface IInfoData {
    cep: string
    state: string
    city: string
    neighborhood: string
    street: string
    service: string,
    location: ILocation
    
}
export interface IData {
    data: IInfoData
    error: string
}

export interface IGettingCEP {
    gettingCEP: (arg: string) => Promise<void>
}

export type TInitialMap = {
    longitude: string, 
    latitude: string
}