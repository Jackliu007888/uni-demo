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
	records: T[]
	size: number // 每页数量
	total: number // 总条数
	current: number // 当前页
	pages: number // 总页数
}

// * 分页请求参数
export interface ReqPage {
	pageNum: number
	pageSize: number
}

export interface ReqId {
	_id: string
}
