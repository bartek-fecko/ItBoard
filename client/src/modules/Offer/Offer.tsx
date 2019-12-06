import AppState from '#/config/appState';
import * as bannerIcon from '#/public/bannerIcon.svg';
import * as cPlusPlusImage from '#/public/images/c++.png';
import * as cSharpImage from '#/public/images/csharp.png';
import * as jsImage from '#/public/images/js.png';
import * as pythonImage from '#/public/images/python.png';
import * as locationIcon from '#/public/locationIcon.svg';
import { Offer } from '#/store/OffersStore/constants';
import * as React from 'react';
import {
   Banner,
   CityWrapper,
   Company,
   EmploymentStatus,
   Image,
   LocationIcon,
   MainDescription,
   Title,
   TitleWrapper,
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

   React.useEffect(() => {
      switch (language) {
         case 'javascript':
            setImage(jsImage);
            break;
         case 'C#':
            setImage(cSharpImage);
            break;
         case 'C++':
            setImage(cPlusPlusImage);
            break;
         case 'python':
            setImage(pythonImage);
            break;
         default:
            break;
      }
   }, []);

   return (
      <Wrapper>
         <MainDescription>
            <Image src={image || null} />
            <div>
               <TitleWrapper>
                  <Title>{title}
                     <Banner src={bannerIcon} />
                  </Title>
                  <EmploymentStatus>{employmentStatus}</EmploymentStatus>
               </TitleWrapper>
               <Company>{company}</Company>
            </div>
         </MainDescription>
         <CityWrapper>
            <LocationIcon src={locationIcon} />
            {location}
         </CityWrapper>
         <ViewButton>View a job</ViewButton>
      </Wrapper>
   );
};

export default Offer;
