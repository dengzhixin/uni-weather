import {
	request
} from './request.js'
const APPKEY ="7X5ZZDY2MDRM"
export function getweatherinfoPre(keyword){
	return new Promise((resolve,reject)=>{
		request({
			url:'/weather/weatherinfo/region',
			data:{
				keyword,
				appkey:APPKEY
			}
		}).then((data)=>{
			resolve(data)
		}).catch((e)=>{
			reject(e)
		})
	})
	
}
export function getweatherinfo(code,days){
	return new Promise((resolve,reject)=>{
		request({
			url:'/weather/weatherinfo',
			data:{
				code,
				days,
				appkey:APPKEY
			}
		}).then((data)=>{
			resolve(data)
		}).catch((e)=>{
			reject(e)
		})
	})
	
}