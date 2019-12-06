import WithLoader from '#/components/WithLoader/WithLoader';
import AppState from '#/config/appState';
import * as bannerIcon from '#/public/bannerIcon.svg';
import * as jsImage from '#/public/images/js.png';
import * as locationIcon from '#/public/locationIcon.svg';
import * as React from 'react';
import {
   Banner,
   CityWrapper,
   Image,
   LocationIcon,
   MainDescription,
   SubTitle,
   Title,
   TitleWrapper,
   ViewButton,
   Wrapper,
   EmploymentStatus,
} from './styled';

const Offer: React.FC = () => {

   return (
      <Wrapper>
         <MainDescription>
            <Image src={jsImage} />
            <div>
               <TitleWrapper>
                  <Title>Community Manager
                     <Banner src={bannerIcon} />
                  </Title>
                  <EmploymentStatus>Part-time</EmploymentStatus>
               </TitleWrapper>
               <SubTitle> Kibo</SubTitle>
            </div>
         </MainDescription>
         <CityWrapper>
            <LocationIcon src={locationIcon} />
            Marleba
         </CityWrapper>
         <ViewButton>View a job</ViewButton>
      </Wrapper>
   );
};

export default Offer;
