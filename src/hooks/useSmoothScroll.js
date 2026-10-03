import { useCallback } from "react";

export default function useSmoothScroll() {
    const scrollTo = useCallback((targetY, duration = 700) => {
        const startPosition = window.scrollY;
        const distance = targetY - startPosition;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const eased =
                progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(
                0,
                startPosition + distance * eased
            );

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    const scrollToElement = useCallback(
        (element, offset = 0, duration = 700) => {
            if (!element) return;

            const targetY =
                element.getBoundingClientRect().top +
                window.scrollY -
                offset;

            scrollTo(targetY, duration);
        },
        [scrollTo]
    );

    return {
        scrollTo,
        scrollToElement,
    };
}
