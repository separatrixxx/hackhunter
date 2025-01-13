import { UserResumeLinkProps } from './UserResumeLink.props';
import styles from './UserResumeLink.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import Link from 'next/link';
import VkIcon from './icons/vk.svg';
import TgIcon from './icons/tg.svg';
import YtIcon from './icons/yt.svg';
import XIcon from './icons/x.svg';
import GhIcon from './icons/gh.svg';
import GlIcon from './icons/gl.svg';
import FbIcon from './icons/fb.svg';
import LiIcon from './icons/li.svg';
import WaIcon from './icons/wa.svg';
import IgIcon from './icons/ig.svg';
import DsIcon from './icons/ds.svg';
import BeIcon from './icons/be.svg';
import OtherIcon from './icons/other.svg';
import { getLinkType } from '../../../helpers/links.helper';
import cn from 'classnames';


export const UserResumeLink = ({ link, className }: UserResumeLinkProps): JSX.Element => {
    const { webApp } = useSetup();

    const linkIcons = {
        VK: VkIcon,
        Telegram: TgIcon,
        YouTube: YtIcon,
        X: XIcon,
        GitHub: GhIcon,
        GitLab: GlIcon,
        Facebook: FbIcon,
        LinkedIn: LiIcon,
        WhatsApp: WaIcon,
        Instagram: IgIcon,
        Discord: DsIcon,
        Behance: BeIcon,
    };

    const getIconComponent = (link: string) => {
        const linkType = getLinkType(link);

        return linkIcons[linkType as keyof typeof linkIcons] || OtherIcon;
    };

    const IconComponent = getIconComponent(link);

    return (
        <Link href={link} className={cn(styles.resumeLink, className, {
            [styles.weba]: isWebPlatform(webApp?.platform),
        })} target='_blank' aria-label={`${name} ${getLinkType(link)} link`}>
            <IconComponent />
            <Htag tag='xs'>
                {getLinkType(link)}
            </Htag>
        </Link>
    );
};
