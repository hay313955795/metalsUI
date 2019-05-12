import service from '../utils/request.js'

export function getAllType(){
    return service({
        url: '/productCenter/allType',
        method: 'get'
    })
}