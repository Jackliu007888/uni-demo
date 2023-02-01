import { ENV_BASE_URL, TOKEN } from '@/utils/constants'

type methodType = 'POST' | 'GET' | 'PUT' | 'DELETE'

export interface Result <T> {
  code: string | number
  message: string
  data: T
}

const defaltConfig = {
  baseUrl: ENV_BASE_URL,
  header: {
    'request-source': 1,
    space: ''
  },
  timeout: 10000,
}

class Http {
  // eslint-disable-next-line class-methods-use-this
  request<T>(method: methodType, url: string, data: any, config?: any): Promise<T> {
    const task = uni.request({
      url: url.startsWith('http') ? url : `${defaltConfig.baseUrl}${url}`,
      data,
      method,
      header: {
        ...defaltConfig.header,
        ...config.header
      },
      ...config
    })

    const req: Promise<T> = new Promise(async (resolve, reject) => {
      try {
        const resp: any = await task

        const respData = resp.data as Result<T>
        if (respData?.code === 0) {
          resolve(respData.data)
          return
        }
        if (respData.code === 401) {
          uni.showModal({
            title: '提示',
            content: respData?.message || '提交失败',
            showCancel: false,
            success(res) {
              // store.commit('app/SET_TOKEN', '')
              uni.setStorageSync(TOKEN, '')

              // @ts-ignore
              uni.$http.setHeader({
                Authorization: ''
              })
            }
          })

          reject(new Error(respData?.message || '请求失败'))
          return
        }
        reject(new Error(respData?.message || '请求失败'))
      } catch (error) {
        reject(error)
        return
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
