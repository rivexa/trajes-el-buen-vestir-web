import { useEffect } from 'react';

export const SITE_NAME = 'Trajes El Buen Vestir';

export function pageTitle(section) {
  return `${section} | ${SITE_NAME}`;
}

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
