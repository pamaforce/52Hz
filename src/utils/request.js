//const baseURL = "http://8.141.166.181:7070/api/"
const baseURL = "https://52hz.twt.edu.cn/"
export const service = (options) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseURL + options.url,
            method: options.method || 'GET',
            data: options.data || {},
            params: options.params,
            header: {
                "content-type": options.method === 'GET' ? 'application/json' : "application/x-www-form-urlencoded",
                domain: '52Hz.twt.edu.cn',
                ticket: 'NTJIei5jNWFlZjI0MTEzYzk2Y2JiNGVmZmZkN2Y0YmNlY2M0MmNhZmExYmRi'
            },
            success: ({ data: res }) => {
                if (res.code === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            },
            fail: () => { reject() }
        })
    })
}