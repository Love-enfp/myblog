import React from 'react'
// 先引入antd样式
import 'antd/dist/antd.min.css'
// 再导入全局样式，防止覆盖
import './index.scss'
import { Button } from 'antd'

export default function index() {
  return (
    <div>
        <Button type='primary'>你好啊</Button>
        <div className='home-header'> 头部 </div>
        <div className="home-recommend">推荐列表</div>
        <div className="home-article">文章列表</div>
        <div className="home-footer">底部</div>
    </div>
  )
}
