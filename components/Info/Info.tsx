import { initializeMap } from '../../modules/map'
import { useEffect } from 'react'
import { IData } from '../../types'
import { InfoSection, UnavailableMap } from '../../styles'


export const Info = ({data}: IData | any) => {
    useEffect(() => data.location && initializeMap(data.location.coordinates), [data])

    return (
        <InfoSection> 
            <h2>
                <small>Zip Code: {data.cep} </small>
                <strong>City:</strong>
                <span>{data.city}</span>
            </h2>
            <h4>
                <strong> {"-> "} Neighborhood:</strong>
                <span>{data.neighborhood}</span>
            </h4>
            <h4>
                <strong> {"-> "} State:</strong> 
                <span>{data.state}</span>
            </h4>
            <h4>
                <strong> {"-> "} Street:</strong>
                <span>{data.street}</span>
            </h4>
            {
                data.location 
                ? (<section id="map"></section>)
                : (<UnavailableMap>Map unavailable</UnavailableMap>)
            }
            
        </InfoSection>
    )
}
