const PRE_HTTP = "https://api.gugudata.com"
export function request({
	url,
	method = 'get',
	data
}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: PRE_HTTP + url,
			method,
			data,
			success(data) {
				resolve(data)
			},fail(e){
				reject(e)
			}
		})
	})
}
