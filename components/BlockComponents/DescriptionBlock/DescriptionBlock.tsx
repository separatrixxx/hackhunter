import { DescriptionBlockProps } from './DescriptionBlock.props';
import styles from './DescriptionBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { useState, useRef, useEffect } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const DescriptionBlock = ({ description }: DescriptionBlockProps): JSX.Element => {
    const { webApp, tgUser } = useSetup();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [needsExpansion, setNeedsExpansion] = useState<boolean>(false);
    const descriptionRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const checkHeight = () => {
            const element = descriptionRef.current;
            
            if (element) {
                const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
                const scrollHeight = element.scrollHeight;
                const exceedsTwoLines = scrollHeight > (lineHeight * 2);

                setNeedsExpansion(exceedsTwoLines);
            }
        };

        checkHeight();

        window.addEventListener('resize', checkHeight);

        return () => {
            window.removeEventListener('resize', checkHeight);
        };
    }, [description]);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.descriptionBlock}>
            <Htag tag='xs' className={cn(styles.description, {
                [styles.expanded]: isExpanded,
            })} ref={descriptionRef}>
                {description}
            </Htag>
            {
                needsExpansion &&
                    <Htag tag='xs' className={cn(styles.showMore, {
                        [styles.weba]: isWebPlatform(webApp?.platform),
                    })} onClick={toggleDescription}>
                        {setLocale(tgUser?.language_code)[!isExpanded ? 'show_more' : 'show_less']}
                    </Htag>
            }
        </div>
    );
};
