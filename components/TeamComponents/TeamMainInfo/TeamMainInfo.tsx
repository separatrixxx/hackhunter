import { TeamMainInfoProps } from './TeamMainInfo.props';
import styles from './TeamMainInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import CalendarIcon from './calendar.svg';
import LocationIcon from './location.svg';
import { useState } from 'react';
import { InfoBlock } from '../../BlockComponents/InfoBlock/InfoBlock';
import { DescriptionBlock } from '../../BlockComponents/DescriptionBlock/DescriptionBlock';


export const TeamMainInfo = ({ team }: TeamMainInfoProps): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <InfoBlock isTop={true}>
            <Htag tag='l'>
                {team.name}
            </Htag>
            <DescriptionBlock description={team.description} />
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
        </InfoBlock>
    );
};
