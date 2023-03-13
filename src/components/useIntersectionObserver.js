import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = () => {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.5 });
        const currentTargetRef = targetRef.current;
        if (targetRef.current) {
        observer.observe(currentTargetRef);
        }
        return () => {
            if (currentTargetRef) {
                observer.unobserve(currentTargetRef);
            }
        };
    }, [targetRef]);

    return [isVisible, targetRef];
};

export default useIntersectionObserver;