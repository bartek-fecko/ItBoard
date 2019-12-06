import Spinner from '#/components/Spinner/Spinner';
import * as React from 'react';

export interface WithLoaderProps {
   isLoading?: boolean;
   error?: any;
}

const WithLoader: React.FC<WithLoaderProps> = ({ children, isLoading, error }) => (
   <>
      {error
         ? error
         :
         isLoading
            ? <Spinner />
            : children
      }
   </>
);

export default WithLoader;
