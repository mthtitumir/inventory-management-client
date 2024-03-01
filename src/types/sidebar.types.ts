import { ReactNode } from "react"

export type TRoute = {
    path?: string,
    element?: ReactNode,
}

export type TSidebarRoute = {
    key: string,
    label: ReactNode,
    children?: TSidebarRoute[],
    element?: ReactNode,
}

export type TUserPath = {
    name?: string,
    path?: string,
    icon?: ReactNode,
    element?: ReactNode,
    children?: TUserPath[]
}