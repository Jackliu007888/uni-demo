import http from '@/api/http'
import { ReqId, ReqPage } from './interface'
import User from './interface/user'

export const info = (params: ReqId) => http.post<User.UserItem>('/user/parkingLot/info', params)
