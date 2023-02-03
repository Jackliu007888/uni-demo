// * 请求响应参数(不包含data)
export interface Result {
	code: string
	msg: string
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
	data?: T
}

// * 分页响应参数
export interface ResPage<T> {
	list: T[]
	pager: {
		count: number
		limit: number
		total: number
	}
}

// * 分页请求参数
export interface ReqPage {
	page: number
	limit: number
}

export interface ReqId {
	_id: string
}
