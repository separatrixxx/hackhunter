import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TeamInterface } from '../../../interfaces/teams.interface';


export interface ChangeInfoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: string,
    info1: string,
    info2: string,
    count1?: number,
    count2?: number,
    infoType1: string,
    infoType2: string,
    setType: (e: any) => void,
    setSearch?: (e: string) => void,
}
