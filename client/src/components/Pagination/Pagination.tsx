import * as React from 'react';
import { PaginationItem, Wrapper } from './styled';

export interface PaginationProps {
   itemsPerPage: number;
   totalItems: number;
   onPageChange: (currentPageIndex: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, onPageChange }) => {
   const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);
   const [currentPage, setCurrentPage] = React.useState<number>(1);

   const createPageNumbers = () => (
      setPageNumbers(
         new Array((Math.ceil(totalItems / itemsPerPage))).fill(1).map((_, i) => i + 1),
      )
   );

   React.useEffect(() => {
      createPageNumbers();
   }, []);

   return (
      <div>
         <Wrapper>
            {pageNumbers.map((pageNumber) => (
               <PaginationItem
                  key={pageNumber}
                  isActive={currentPage === pageNumber}
                  onClick={() => { setCurrentPage(pageNumber); onPageChange(pageNumber); }}
               >
                  {pageNumber}
               </PaginationItem>
            ))}
         </Wrapper>
      </div>
   );
};

export default Pagination;
