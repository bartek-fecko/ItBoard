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
            ? 'loading...'
            : children
      }
   </>
);

export default WithLoader;
