import {
	request
} from './request.js'
export function getGeodecode(longitude, latitude) {
	return new Promise((resolve, reject) => {
		request({
			url: '/location/geodecode',
			data: {
				longitude,
				latitude,
				APPKEY:'NSSFSUUR3R9T'
			}
		}).then((data) => {
			resolve(data)
		}).catch((e) => {
			reject(e)
		})
	})

}
