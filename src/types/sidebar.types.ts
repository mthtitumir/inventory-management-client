import { ReactNode } from "react"

export type TRoute = {
    path: string,
    element: ReactNode,
}

export type TSidebarRoute = {
    key: string,
    icon?: ReactNode,
    label: ReactNode,
    children?: TSidebarRoute[]
}

export type TUserPath = {
    name?: string,
    path?: string,
    icon?: ReactNode,
    element?: ReactNode,
    children?: TUserPath[]
}