/*
 * @Description:
 * @Author: 刘用坚
 * @Date: 2023-02-01 15:14:18
 * @LastEditors: 刘用坚
 * @LastEditTime: 2023-02-06 16:03:58
 */
import { ENV_BASE_URL, AUTHORIZATION } from '@/utils/constants'
import { getTenantId, getToken, setToken } from '../utils/login'

type methodType = 'POST' | 'GET' | 'PUT' | 'DELETE'

export interface Result<T> {
	code: string | number
	msg: string
	data: T
	error_description?: string
}

const defaltConfig = {
	baseUrl: ENV_BASE_URL,
	header: {
		Authorization: `Basic ${AUTHORIZATION}`,
		'User-Type': 'merchant',
	},
	timeout: 30000,
}

class Http {
	request<T>(method: methodType, url: string, data: any, config?: any): Promise<T> {
		const token = getToken()
		const tenantId = getTenantId()

		const task = uni.request({
			url: url.startsWith('http') ? url : `${defaltConfig.baseUrl}${url}`,
			data,
			method,
			header: {
				...defaltConfig.header,
				...config?.header,
				'Blade-Auth': `bearer ${token}`,
				'Tenant-Id': tenantId,
			},
			...config,
		})

		const req: Promise<T> = new Promise(async (resolve, reject) => {
			try {
				const resp: any = await task

				const respData = resp.data as Result<T>
				if (respData?.code === 200) {
					resolve(respData.data)
					return
				}
				if (respData.code === 401) {
					uni.showModal({
						title: '提示',
						content: respData.msg || '提交失败',
						showCancel: false,
						success(res) {
							// store.commit('app/SET_TOKEN', '')
							setToken('')

							// @ts-ignore
							uni.$http.setHeader({
								Authorization: '',
							})
						},
					})

					reject(new Error(respData?.msg || '请求失败'))
					return
				}
				// uni.showToast({
				// 	title: respData.msg || '请求失败',
				// 	icon: 'none',
				// 	duration: 2000,
				// })
				reject(new Error(respData?.msg || '请求失败'))
			} catch (error) {
				reject(error)
			}
		})
		// @ts-ignore
		req.abort = task.abort
		return req
	}

	// * 常用请求方法封装
	get<T>(url: string, params?: object, _object = {}): Promise<T> {
		return this.request('GET', url, { params, ..._object })
	}

	post<T>(url: string, params?: object, _object = {}): Promise<T> {
		return this.request('POST', url, params, _object)
	}

	put<T>(url: string, params?: object, _object = {}): Promise<T> {
		return this.request('PUT', url, params, _object)
	}

	delete<T>(url: string, params?: any, _object = {}): Promise<T> {
		return this.request('DELETE', url, { params, ..._object })
	}
}
const http = new Http()
export default http
