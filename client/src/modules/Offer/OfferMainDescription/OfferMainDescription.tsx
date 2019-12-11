import * as bannerIcon from '#/public/bannerIcon.svg';
import * as cPlusPlusImage from '#/public/images/c++.png';
import * as cSharpImage from '#/public/images/csharp.png';
import * as jsImage from '#/public/images/js.png';
import * as pythonImage from '#/public/images/python.png';
import useWindowDimensions from '#/utils/useWindowDimensions';
import * as React from 'react';
import OfferCity from '../OfferCity/OfferCity';
import {
   Banner,
   Company,
   EmploymentStatus,
   Image,
   SubTextWrapper,
   Title,
   TitleWrapper,
   Wrapper,
} from './styled';

export interface OfferMainDescriptionProps {
   language: string;
   location: string;
   title: string;
   employmentStatus: string;
   company: string;
}

const OfferMainDescription: React.FC<OfferMainDescriptionProps> = ({
   language, title, employmentStatus, company, location,
}) => {
   const [image, setImage] = React.useState<string>();
   const { width } = useWindowDimensions();

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
   }, [language]);

   return (
      <Wrapper>
         <Image src={image || null} />
         <div>
            <TitleWrapper>
               <Title>{title}</Title>
               <EmploymentStatus>
                  <Banner src={bannerIcon} />
                  {employmentStatus}
               </EmploymentStatus>
            </TitleWrapper>
            <SubTextWrapper>
               <Company>{company}</Company>
               {width <= 573 && (
                  <OfferCity location={location} />
               )}
            </SubTextWrapper>
         </div>
      </Wrapper>
   );
};

export default OfferMainDescription;
