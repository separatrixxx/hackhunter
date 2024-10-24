export interface TeamsData {
    status: 'pending' | 'ok',
    teams: TeamInterface[],
}

export interface TeamInterface {
    id: string,
    name: string,
    description: string,
    exp: number,
    users_ids: number[],
    capitan_id: number,
    hunt: boolean,
    roles_hunt: string[],
    description_hunt: string,
}
