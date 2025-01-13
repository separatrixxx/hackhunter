import { UserAdditionalInfoProps } from './UserAdditionalInfo.props';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { InfoBlock } from '../../BlockComponents/InfoBlock/InfoBlock';
import { ChangeInfoBlock } from '../../BlockComponents/ChangeInfoBlock/ChangeInfoBlock';
import { UserResume } from '../UserResume/UserResume';


export const UserAdditionalInfo = ({ user, isProfile }: UserAdditionalInfoProps): JSX.Element => {
    const { tgUser } = useSetup();

    const [type, setType] = useState<'resume' | 'hackathons'>('resume');

    return (
        <InfoBlock>
            <ChangeInfoBlock type={type} info1={setLocale(tgUser?.language_code).resume}
                info2={setLocale(tgUser?.language_code).hackathons} count2={3}
                infoType1={'resume'} infoType2={'hackathons'} setType={setType} />
            {
                type === 'resume' ?
                    <UserResume stack={user.stack} links={user.links}
                        name={user.first_name + ' ' + (user.second_name || '')}
                        isProfile={isProfile} />
                : <></>
            }
        </InfoBlock>
    );
};
