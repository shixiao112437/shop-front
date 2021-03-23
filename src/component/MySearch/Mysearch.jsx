import React from 'react'
import search from './index.module.scss'
import {Link} from 'react-router-dom'
export default function Mysearch() {
    return (
        <div className={search.contain}>
                <Link pathname='/shop/search'>
                    搜索
                </Link>
        </div>
    )
}
