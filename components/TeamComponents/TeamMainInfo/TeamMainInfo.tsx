import { TeamMainInfoProps } from './TeamMainInfo.props';
import styles from './TeamMainInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import CalendarIcon from './calendar.svg';
import LocationIcon from './location.svg';
import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const TeamMainInfo = ({ team }: TeamMainInfoProps): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.teamMainInfo}>
            <Htag tag='l'>
                {team.name}
            </Htag>
            <div className={styles.descriptionDiv}>
                <Htag tag='xs' className={cn(styles.description, {
                    [styles.expanded]: isExpanded,
                })}>
                    {team.description}
                </Htag>
                <Htag tag='xs' className={cn(styles.showMore, {
                    [styles.weba]: isWebPlatform(webApp?.platform),
                })} onClick={toggleDescription}>
                    {setLocale(tgUser?.language_code)[!isExpanded ? 'show_more' : 'show_less']}
                </Htag>
            </div>
            <div className={styles.teamAdditionalInfo}>
                <Htag tag='xs'>
                    <CalendarIcon />
                    {'AI Product Hackathon'}
                </Htag>
                <Htag tag='xs'>
                    <LocationIcon />
                    {'Онлайн 23-25 марта'}
                </Htag>
            </div>
        </div>
    );
};
