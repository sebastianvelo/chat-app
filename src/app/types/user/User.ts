export interface User {
    nick: string;
    avatar: string;
    status: string;
    info: string;
}

export interface UserLoggedIn extends User {
    contacts?: User[];
}