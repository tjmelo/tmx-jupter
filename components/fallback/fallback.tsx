import { FallbackSection, FallbackTitle } from '../../styles'

const NoZipCode = () => (
    <FallbackSection>
        <FallbackTitle> {"-> "} Waiting for a Zip Code...</FallbackTitle>
    </FallbackSection>
)

const NotFound = () => (
    <FallbackSection>
        <FallbackTitle> {"-> "} Zip code not found!</FallbackTitle>
    </FallbackSection>
)

export { NoZipCode, NotFound }