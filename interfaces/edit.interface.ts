import { UserInterface } from "./users.interface";


export interface EditInterface extends Omit<UserInterface,
    'id' | 'first_name' | 'second_name' | 'username' | 'photo_url'> {}