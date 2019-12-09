import * as locationIcon from '#/public/locationIcon.svg';
import useWindowDimensions from '#/utils/useWindowDimensions';
import * as React from 'react';
import {
   LocationIcon,
   Wrapper,
} from './styled';

export interface OfferCityProps {
   location: string;
}

const OfferCity: React.FC<OfferCityProps> = ({
   location,
}) => {
   const { width } = useWindowDimensions();

   return (
      <Wrapper>
         <LocationIcon src={locationIcon} />
         {location}
      </Wrapper>
   );
};

export default OfferCity;
