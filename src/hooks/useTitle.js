import { useEffect } from "react";

export const useTitle = (pageName) => {
  useEffect(() => {
    document.title = `CartSite | ${pageName}`;
  });
};
