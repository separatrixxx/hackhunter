import { TeamMainInfoProps } from './TeamMainInfo.props';
import styles from './TeamMainInfo.module.css';
import { Htag } from '../../Common/Htag/Htag';
import CalendarIcon from './calendar.svg';
import LocationIcon from './location.svg';
import { InfoBlock } from '../../BlockComponents/InfoBlock/InfoBlock';
import { DescriptionBlock } from '../../BlockComponents/DescriptionBlock/DescriptionBlock';


export const TeamMainInfo = ({ team }: TeamMainInfoProps): JSX.Element => {
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
