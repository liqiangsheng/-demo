import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
Vue.use(Vuex);
// 首先声明一个需要全局维护的状态 state,
const state = {
    sideBarList: [//左边固定栏
//                    {
//                        icon: 'el-icon-lx-calendar',
//                        index: '3',
//                        title: '表单相关',
//                        children: [
//                            {
//                                index: 'form',
//                                title: '基本表单'
//                            },
//                            {
//                                index: '3-2',
//                                title: '三级菜单',
//                                children: [
//                                    {
//                                        index: 'editor',
//                                        title: '富文本编辑器'
//                                    },
//                                    {
//                                        index: 'markdown',
//                                        title: 'markdown编辑器'
//                                    },
//                                ]
//                            },
//                            {
//                                index: 'upload',
//                                title: '文件上传'
//                            }
//                        ]
//                    },
    ]
}

// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里
})

export default store  // 导出store并在 main.js中引用注册