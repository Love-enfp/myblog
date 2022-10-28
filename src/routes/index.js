/* 
    创建路由表，方便对路由进行管理
*/

// 加载路由组件
import Home from '../pages/Home'
import Sort from '../pages/Sort'
import Music from '../pages/Music'
import AboutMe from '../pages/AboutMe'
import LeaveWords from '../pages/LeaveWords'

const routes= [
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/sort',
        element:<Sort></Sort>
    },
    {
        path:'/music',
        element:<Music></Music>
    },
    {
        path:'/leavewords',
        element:<LeaveWords></LeaveWords>
    },
    {
        path:'/aboutme',
        element:<AboutMe></AboutMe>
    }
]

export default routes

