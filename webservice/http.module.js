import axios from "axios";
import { crypt } from "@/utils/crypt";
import { redirect } from 'next/navigation';

const HEADERS = [
    {
        lsKey: 'a_t',
        reqHeader: 'Authorization',
        resHeader: 'a_t',
        payload: "Bearer {{payload}}"
    },
    {
        lsKey: 'rg_t',
        reqHeader: 'Authorization',
        resHeader: 'rg_t'
    },
    {
        lsKey: 'r_t',
        resHeader: 'r_t'
    }
]

export class Http {

    #axios
    #interceptors

    constructor(endpoint, secure = true, timeout = 0) {
        var baseURL = (secure ? "https://" : "http://") + endpoint
        this.#axios = axios.create({ baseURL, timeout })
        var tokenReqInterceptor = this.#axios.interceptors.request.use(tokenReqInterceptorFn, (err) => { console.log(err); Promise.reject(err) });
        var tokenResInterceptor = this.#axios.interceptors.response.use(tokenResInterceptorFn, (err) => { console.log(err); return Promise.reject(err) });
        this.#interceptors = {
            request: { token: tokenReqInterceptor },
            response: { token: tokenResInterceptor }
        }

    }

    setDefaultHeaders(key, value) {
        this.#axios.defaults.headers.common[key] = value
    }

    async request(method, uri, data = null, config = {}) {
        var controller = new AbortController()
        try {
            if (['post', 'put', 'patch'].indexOf(method) > -1) {
                console.log("=>", method)
                var result = (await this.#axios[method](uri, data, {
                    signal: controller.signal,
                    ...config
                })).data
                if (result.error || !result.success) {
                    console.log("+", result.err)
                    return this.errorHandler(result.err)
                }
                return result
            }
            else {
                console.log("+>", method)

                var result = (await this.#axios[method](uri, {
                    signal: controller.signal,
                    ...config
                }).data)
                if (result.err || !result.success) {
                    console.log("-", result.err)
                    return this.errorHandler(result.err)
                }
                return result
            }
        } catch (err) {
            console.log(err)
            this.errorHandler(err)
        }
    }

    getRequestInterceptors(key = null) {
        if (key) {
            return this.#interceptors.request[key]
        }

        return this.#interceptors.request
    }

    getResponseInterceptors(key = null) {
        if (key) {
            return this.#interceptors.response[key]
        }

        return this.#interceptors.response
    }

    setRequestInterceptors(key, fn) {
        this.#interceptors.request[key] = this.#axios.interceptors.request.use(fn, (err) => { console.log(err); Promise.reject(err) })
    }

    setResponseInterceptors(key, fn) {
        this.#interceptors.request[key] = this.#axios.interceptors.request.use(fn, (err) => { console.log(err); return Promise.reject(err) })
    }

    errorHandler(err) {
        alert(JSON.stringify(err.response.data))
        var error = err.response.status
        switch (error.err) {
            case "ea-004":
                localStorage.removeItem('a_t')
                localStorage.removeItem('r_t')
                redirect('/sign-in')
            default:
                throw err
        }
    }
}

const tokenReqInterceptorFn = (config) => {
    console.log("req interceptor token")
    HEADERS.map(_header => {
        var item = localStorage.getItem(_header.lsKey)
        if (item && _header.reqHeader) {
            item = deobfuscate(item)
            config.headers[_header.reqHeader] = _header.payload ? _header.payload.replace('{{payload}}', item) : item
        }
    })
    return config
}

const tokenResInterceptorFn = (res) => {
    console.log("res interceptor token")
    var headers = res.headers
    var keys = Object.keys(headers)
    var filteredHeaders = HEADERS.filter(h => keys.indexOf(h.resHeader) > -1)

    if (!filteredHeaders || filteredHeaders.length < 1) return res

    filteredHeaders.map(_header => {
        var item = obfuscate(headers[_header.resHeader])
        localStorage.setItem(_header.lsKey, item)
    })
    return res
}

const obfuscate = (data) => {
    var shift = Math.max(Math.floor(Math.random() * 100) % 10, 1)
    return crypt.obfuscate(data, shift) + shift
}

const deobfuscate = (encrypted) => {
    var shift = parseInt(encrypted[encrypted.length - 1])
    var data = encrypted.substring(0, encrypted.length - 1)
    return crypt.deobfuscate(data, shift)
}