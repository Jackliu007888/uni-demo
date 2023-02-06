import { ReqPage } from '.'

namespace Demo {
	export interface Item {
		name: string
	}

	export interface pageReq extends ReqPage {
		name: string
	}
}

export default Demo
