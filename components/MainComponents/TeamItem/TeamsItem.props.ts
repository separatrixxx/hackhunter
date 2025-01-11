import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TeamInterface } from '../../../interfaces/teams.interface';


export interface TeamItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    team: TeamInterface,
}
