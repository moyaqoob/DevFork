import { ITEMS_PER_PAGE } from "@/constant";

const isOutofbounds = (totalPages: number, currentPage: string | undefined) => {
  return (
    (currentPage && !Number(currentPage)) ||
    Number(currentPage) > totalPages ||
    Number(currentPage) < 1
  );
};

interface PageMetaType {
  totalPages: number;
  currentPage: number;
  pageStart: number;
  pageEnd: number;
  isOutofbounds: boolean;
}

export default function pageMeta(
  totalRepo: number,
  pageParam: string | undefined,
): PageMetaType {
  const totalPages = Math.ceil(totalRepo / ITEMS_PER_PAGE);
  const currentPage = Math.max(1, Number(pageParam) || 1);
  const pageStart = (Math.min(currentPage, totalPages) - 1) * ITEMS_PER_PAGE;
  const pageEnd = pageStart + ITEMS_PER_PAGE;

  if (isOutofbounds(totalPages, pageParam)) {
    return {
      totalPages,
      currentPage,
      pageStart,
      pageEnd,
      isOutofbounds: true,
    };
  }
  return {
    totalPages,
    currentPage,
    pageStart,
    pageEnd,
    isOutofbounds: false,
  };
}
