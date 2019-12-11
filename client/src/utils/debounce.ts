export function debounce(
   cb: () => void,
   wait: number,
   immediate: boolean = false,
) {
   let timeout;
   return () => {
      const later = () => {
         timeout = null;
         if (!immediate) {
            cb();
         }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
         cb();
      }
   };
}
