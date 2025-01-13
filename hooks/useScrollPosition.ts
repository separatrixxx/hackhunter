import { useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import { ScrollPositionInterface } from '../interfaces/scroll.interface';
import { useSetup } from './useSetup';


export const useScrollPosition = ({ dependencies = [], debounceTime = 100 }: ScrollPositionInterface) => {
    const { router } = useSetup();

    const elementRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const debouncedSetPosition = debounce((position: number) => {
        setScrollPosition(position);
    }, debounceTime);

    const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
        const position = event.currentTarget?.scrollTop ?? 0;

        debouncedSetPosition(position);
    }, []);

    useEffect(() => {
        if (elementRef.current) {
            const savedPosition = parseInt(router.query.scrollPosition as string);
            
            if (!isNaN(savedPosition)) {
                setTimeout(() => {
                    elementRef.current?.scrollTo({
                        top: savedPosition,
                        behavior: 'instant'
                    });
                }, 0);
            }
        }
    }, [router.query.scrollPosition, ...dependencies]);

    useEffect(() => {
        return () => {
            debouncedSetPosition.cancel();
        };
    }, []);

    return {
        elementRef,
        scrollPosition,
        handleScroll
    };
};