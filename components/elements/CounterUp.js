import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

export default function CounterUp({count, time}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(elementRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <span ref={elementRef}>
            {isVisible ? (
                <CountUp end={count} duration={time} />
            ) : (
                '0'
            )}
        </span>
    );
}
