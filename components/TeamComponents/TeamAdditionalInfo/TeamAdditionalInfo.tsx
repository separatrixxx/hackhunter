import { TeamAdditionalInfoProps } from './TeamAdditionalInfo.props';
import styles from './TeamAdditionalInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { InfoBlock } from '../../BlockComponents/InfoBlock/InfoBlock';
import { ChangeInfoBlock } from '../../BlockComponents/ChangeInfoBlock/ChangeInfoBlock';


export const TeamAdditionalInfo = ({ team }: TeamAdditionalInfoProps): JSX.Element => {
    const { tgUser } = useSetup();

    const [type, setType] = useState<'vacancies' | 'participants'>('vacancies');

    return (
        <InfoBlock>
            <ChangeInfoBlock type={type} info1={setLocale(tgUser?.language_code).vacancies}
                info2={setLocale(tgUser?.language_code).participants} count1={3} count2={3}
                infoType1={'vacancies'} infoType2={'participants'} setType={setType} />
        </InfoBlock>
    );
};
