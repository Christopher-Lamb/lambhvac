import { useEffect } from "react";

function debounce<F extends (...args: any[]) => void>(func: F, delay: number): (...args: Parameters<F>) => void {
  let timer: NodeJS.Timeout | null = null;

  return (...args: Parameters<F>) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
function useDebouncedResize(effect: (...args: any[]) => void, delay: number) {
  useEffect(() => {
    const debouncedEffect = debounce(effect, delay);

    window.addEventListener("resize", debouncedEffect);

    return () => {
      window.removeEventListener("resize", debouncedEffect);
    };
  }, [effect, delay]); // Dependencies array includes effect and delay
}

export default useDebouncedResize;
