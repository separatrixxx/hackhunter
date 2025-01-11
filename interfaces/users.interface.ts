export interface UsersData {
    status: 'pending' | 'ok',
    users: UserInterface[],
}

export interface UserInterface {
    id: string,
    first_name: string,
    second_name: string,
    username?: string,
    stack: string[],
    roles: string[],
    about: string,
    exp_work: string,
    hackathons: any[],
    exp: number,
    who_is: boolean,
    links: string[],
    photo_url?: string,
}
