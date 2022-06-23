let baseURL = "./api/"

//#ifdef MP-WEIXIN
baseURL = "https://52hz.twt.edu.cn/api/"
    //#endif
export const service = (options) => {
    return new Promise((resolve, reject) => {
        uni.request({
            withCredentials: true,
            url: baseURL + options.url,
            method: options.method || 'GET',
            data: options.data || {},
            params: options.params,
            header: {
                "content-type": options.method === 'GET' ? 'application/json' : "application/x-www-form-urlencoded",
                domain: '52Hz.twt.edu.cn',
                ticket: 'NTJIei5jNWFlZjI0MTEzYzk2Y2JiNGVmZmZkN2Y0YmNlY2M0MmNhZmExYmRi',
                'Access-Control-Allow-Credentials': 'true',
                //#ifdef !H5
                cookie: uni.getStorageSync('cookie')
                    //#endif
            },
            success: ({ data: res, ...more }) => {
                if (more.header['set-cookie'] || more.header['Set-Cookie']) {
                    uni.setStorageSync('cookie', more.header['set-cookie'] || more.header['Set-Cookie'])
                }
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