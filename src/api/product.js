import service from '../utils/request.js'

export function getAllType(){
    return service({
        url: '/productCenter/allType',
        method: 'get'
    })
}

export function getProductByType(param){
    return service({
        url: '/productCenter/getProductByType/'+param,
        method: 'get'
    })
}


export function getProductByproductId(param){
    return service({
        url: '/productCenter/getProductById/'+param,
        method: 'get'
    })
}
