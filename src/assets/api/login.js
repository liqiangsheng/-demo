import fatch from '../../components/common/js/axios_setting'

/**
 * 登陆的接口
 * **/
export function login(name,passwoer) {
    return new Promise((res,reject)=>{
        fatch({
            url:`/user/login?account=${name}&password=${passwoer}`,
            method:'post',
        }).then(data=>{
            res(data)
        })
    })
}