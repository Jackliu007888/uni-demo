/*
 * @Description:
 * @Author: 刘用坚
 * @Date: 2023-02-01 15:14:18
 * @LastEditors: 刘用坚
 * @LastEditTime: 2023-02-06 15:58:38
 */
import http from '@/api/http'
import { ReqId, ResPage } from '../interface'
import Demo from '../interface/demo'

export const create = (params: Demo.Item) => http.post<Demo.Item>('/user/create', params)
export const deteleOne = (params: ReqId) => http.post<any>('/user/delete', params)
export const remove = (params: ReqId) => http.post<any>('/user/remove', params)
export const update = (params: Partial<Demo.Item>) => http.post<Demo.Item>('/user/update', params)
export const page = (params: Demo.pageReq) => http.post<ResPage<Demo.Item>>('/user/page', params)
