export interface ICoordinates {
    longitude: string,
    latitude: string
}

export interface ILocation {
    type: string,
    coordinates: ICoordinates
}

export interface IData {
    data: {
        cep: string
        state: string
        city: string
        neighborhood: string
        street: string
        service: string,
        location: ILocation
        
    }
    error: string
}

export interface IGettingCEP {
    gettingCEP: (arg: string | undefined) => void
}

export type TInitialMap = {
    longitude: string, 
    latitude: string
}