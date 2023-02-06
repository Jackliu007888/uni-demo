import { TENANT_ID, TOKEN } from './constants'

export const getToken = () => uni.getStorageSync(TOKEN)
export const setToken = (val: string) => uni.setStorageSync(TOKEN, val)
export const getTenantId = () => uni.getStorageSync(TENANT_ID) || ''
export const setTenantId = (val: string) => uni.setStorageSync(TENANT_ID, val)
