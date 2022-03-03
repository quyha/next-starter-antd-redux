export interface ApiResponse<T = {}> {
    code: string | number;
    data?: T;
    message?: string;
}

export type DataResponse<Data = null, Error = any> = [ Data, Error ];