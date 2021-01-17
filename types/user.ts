export interface IUserFriend {
    avatar: IAvatar
    name: string
    points: number
    credit: number
}

export interface IAvatar {
    hair: string
    pants: string
    shirt: string
    shirtSecondary: string
    shoes: string
    gender?: string
}