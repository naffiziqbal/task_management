export interface IUser {
    name: string
    email: string
    password: string
}

export interface IDbResponse {
    success: boolean
    data?: []
    message: string
}


export interface ITask {
    name: string
    description: string
    status: "backlog" | "in_progress" | "revision" | "completed"
    tag: string
}

export interface ITasksResponse {
    success: boolean
    data: []
    message: string
    currentPage: number
    totalPage: number
    nextPage: number
}
