export interface tokenStruct {
    access_token: string,
    token_type: string,
    expires_in: string
}

export interface sectionItemsStruct {
    title: string,
    color: string,
    icon: string
}

export interface menuItemsStruct {
    item: string,
    icon: string,
    path: string
}

export interface userStruct {
    id: number,
    name: string,
    lastname: string,
    email: string,
    lastsession: string
}

export interface httpCodesInterface {
    code: number,
    message: string,
    class: string
}

export type httpMessageWithKey<T> = {
    [key: string]: T
}