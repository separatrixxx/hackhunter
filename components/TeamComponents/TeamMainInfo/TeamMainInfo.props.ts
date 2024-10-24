import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TeamInterface } from '../../../interfaces/teams.interface';


export interface TeamMainInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    team: TeamInterface,
}
