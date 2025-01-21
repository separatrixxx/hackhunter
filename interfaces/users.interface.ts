export interface UsersData {
    status: 'pending' | 'ok',
    users: UserInterface[],
}

export interface UserData {
    status: 'pending' | 'ok',
    isChanged: boolean,
    user: UserInterface,
}

export interface UserInterface {
    id: number,
    first_name: string,
    second_name: string,
    username?: string,
    stack: string[] | null,
    roles: string[] | null,
    about: string | null,
    exp_work: string | null,
    hackathons: any[] | null,
    exp: number | null,
    who_is: boolean | null,
    links: string[] | null,
    photo_url?: string,
    location: {
        city: string,
        country: string,
    } | null,
}
