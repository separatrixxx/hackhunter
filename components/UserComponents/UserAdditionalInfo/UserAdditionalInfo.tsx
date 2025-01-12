import { UserAdditionalInfoProps } from './UserAdditionalInfo.props';
import styles from './UserAdditionalInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { InfoBlock } from '../../BlockComponents/InfoBlock/InfoBlock';
import { ChangeInfoBlock } from '../../BlockComponents/ChangeInfoBlock/ChangeInfoBlock';


export const UserAdditionalInfo = ({ user, isProfile }: UserAdditionalInfoProps): JSX.Element => {
    const {  tgUser } = useSetup();

    const [type, setType] = useState<'resume' | 'hackathons'>('resume');

    return (
        <InfoBlock>
            <ChangeInfoBlock type={type} info1={setLocale(tgUser?.language_code).resume}
                info2={setLocale(tgUser?.language_code).hackathons} count2={3}
                infoType1={'resume'} infoType2={'hackathons'} setType={setType} />
        </InfoBlock>
    );
};
