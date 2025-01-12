import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface RolesProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
    roles: string[],
}
