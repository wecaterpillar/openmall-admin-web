import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url: '/sys/dict/list',
        method: 'get',
        params: params
    })
}
export function createDict(data) {
    return request({
        url: '/sys/dict/create',
        method: 'post',
        data: data
    })
}

export function deleteDict(id) {
    return request({
        url: '/sys/dict/delete/' + id,
        method: 'delete',
    })
}

export function getDict(id) {
    return request({
        url: '/sys/dict/' + id,
        method: 'get',
    })
}

export function updateDict(id, data) {
    return request({
        url: '/sys/dict/update/' + id,
        method: 'post',
        data: data
    })
}

