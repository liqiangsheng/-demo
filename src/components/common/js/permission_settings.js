export function jurisdiction(state) { //权限的方法 登陆的状态返回相应的侧边栏 state状态

        const over_pipe=[//超管
        {
            icon: 'el-icon-lx-home',
            index: 'dashboard',
            title: '首页' ,
            Jurisdiction:true //权限 true就显示，false就不显示
        },
        {
            icon: 'el-icon-lx-home',
            index: '404',
            title: '404' ,
            Jurisdiction:true //权限 true就显示，false就不显示
        },
        {
            icon: 'el-icon-lx-home',
            index: '403',
            title: '403' ,
            Jurisdiction:true //权限 true就显示，false就不显示
        },
    ],ordinary=[ //一般人员 普通
            {
                icon: 'el-icon-lx-home',
                index: 'dashboard',
                title: '首页' ,
                Jurisdiction:true //权限 true就显示，false就不显示
            },
            {
                icon: 'el-icon-lx-home',
                index: '404',
                title: '404' ,
                Jurisdiction:false //权限 true就显示，false就不显示
            },
            {
                icon: 'el-icon-lx-home',
                index: '403',
                title: '403' ,
                Jurisdiction:false //权限 true就显示，false就不显示
            },
        ]
    if(state===1){
          return ordinary;
    }else{
       return over_pipe;
    }
}