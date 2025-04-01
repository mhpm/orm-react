import { memo } from 'react';
import { UserResponse } from '../types/User';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type CustomPaginationProps = {
  data: UserResponse;
  page: number;
  setPage: (newPage: number) => void;
};

const CustomPagination = memo(
  ({ data, page, setPage }: CustomPaginationProps) => {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem
            className={data.page === 1 ? 'opacity-50' : 'cursor-pointer'}
          >
            <PaginationPrevious
              onClick={data.page === 1 ? undefined : () => setPage(page - 1)}
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>
          {Array.from({ length: data.totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <PaginationItem
                key={pageNumber}
                className={`cursor-pointer ${
                  page === pageNumber
                    ? 'bg-woodsmoke-900 text-white rounded-md'
                    : 'text-white'
                }`}
              >
                <PaginationLink onClick={() => setPage(pageNumber)}>
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem
            className={
              data.page === data.totalPages ? 'opacity-30' : 'cursor-pointer'
            }
          >
            <PaginationNext
              onClick={
                data.page === data.totalPages
                  ? undefined
                  : () => setPage(data.page + 1)
              }
            >
              Next
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
);

CustomPagination.displayName = 'CustomPagination';

export default CustomPagination;
