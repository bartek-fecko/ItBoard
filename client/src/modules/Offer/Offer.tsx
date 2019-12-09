import { Offer } from '#/store/OffersStore/constants';
import useWindowDimensions from '#/utils/useWindowDimensions';
import * as React from 'react';
import OfferCity from './OfferCity/OfferCity';
import OfferMainDescription from './OfferMainDescription/OfferMainDescription';
import {
   ViewButton,
   Wrapper,
} from './styled';

export interface OfferProps {
   data: Offer;
}

const Offer: React.FC<OfferProps> = ({ data: {
   company,
   language,
   employmentStatus,
   location,
   seniority,
   title,
   salary,
} }) => {
   const [image, setImage] = React.useState<string>();
   const { width } = useWindowDimensions();
   return (
      <Wrapper>

         <OfferMainDescription
            company={company}
            employmentStatus={employmentStatus}
            title={title}
            language={language}
            location={location}
         />
         {width > 573 && (
            <OfferCity location={location} />
         )}
         <ViewButton>View a job</ViewButton>
      </Wrapper>
   );
};

export default Offer;
