import { MutableRefObject, useEffect, useState } from "react";

const useIsScrolled = (ref: MutableRefObject<HTMLElement>) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScrollHandler: EventListenerOrEventListenerObject = () => {
            const distanceFromTop =
                window.scrollY + ref.current.getBoundingClientRect().top;

            if (distanceFromTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", onScrollHandler);

        return () => removeEventListener("scroll", onScrollHandler);
    }, [ref]);

    return { isScrolled, setIsScrolled };
};

export default useIsScrolled;
