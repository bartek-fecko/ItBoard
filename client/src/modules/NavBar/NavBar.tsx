import AppContainer from '#/components/AppContainer/AppContainer';
import * as itLogo from '#/public/itLogo.svg';
import { auth, User } from 'firebase';
import * as React from 'react';
import { AuthLinksWrapper, Background, Wrapper } from './styled';

const NavBar: React.FC = () => {
   const [loggedInUser, setLoggedInUser] = React.useState<User>();

   const logInHandler = async () => {
      const provider = new auth.GoogleAuthProvider();
      try {
         const result = await auth().signInWithPopup(provider);
         const user = result.user;
         setLoggedInUser(user);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <AppContainer>
         <Background />
         <Wrapper>
            <img src={itLogo} alt="it board logo" width={`${8 * 6}px`} />
            <AuthLinksWrapper>
               {loggedInUser ? <li>{loggedInUser.displayName}</li> : <li onClick={logInHandler}>Log in</li>}
            </AuthLinksWrapper>
         </Wrapper>
      </AppContainer>

   );
};

export default NavBar;
