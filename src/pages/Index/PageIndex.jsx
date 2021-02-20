import React,{useState,useEffect,useRef} from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';

import MyNavBar from '../../component/MyNavBar/myNavBar'
import List from 'react-virtualized/dist/commonjs/List'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import api from '../../api/index';
import './idnex.scss'

function PageIndex() {
    const listBox = useRef()
   const [city, setCity] = useState({})
   const [currentIndex, setCurrentIndex] = useState(0)
   const [list, setList] = useState([])

   let formatDara = (data) => {
    console.log(data,'1111');
    let res = {}
    data.forEach(item => {
        let acronym = item.short.substr(0, 1)
        if(acronym in res){
            res[acronym].push(item)
        }else{
         res[acronym] = [item]
        }
    })
    console.log(res,'res');
    return res
}
   let getCityList = async () => {
       let res = await api.city.getList()
       let a = formatDara(res.data)
       setCity(a)
      let list =  Object.keys(a)
      setList(list.sort())
      console.log(list,'222222222');
       console.log(city,'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
   }
   
   function jumpRender (index){
        console.log(index,'1111111');
        listBox.current.scrollToRow(index)
   }
   useEffect(()=>{
        getCityList()
   },[])
   function onRowsRendered(a){
    console.log(a,'某一行渲染');
    setCurrentIndex(a.startIndex)
   }
    return (
        <div className='citywrap'>
            <MyNavBar>城市列表</MyNavBar>

            <AutoSizer>
                {({height,width}) => {
                    return (
                        <List
                        ref={listBox}
                        width={width}
                        height={height}
                        rowCount={list.length}
                        onRowsRendered={onRowsRendered}
                        rowHeight={(a) => {
                            const letter = list[a.index]
                            console.log(city[letter].length,'高度')
                            return 50 + 30*(city[letter].length)
                        }}
                        rowRenderer={({ key, index, style })=>{
                            // console.log(content,'contentcontentcontent');
                            let letter = list[index]
                            // console.log(letter,'letter');
                            return (
                            <div className='list' key={key} style={style} >
                                    <h1>
                                       { letter.toUpperCase()}
                                    </h1>
                                    { city[letter].map(item => {                                     
                                        return (
                                            <div className={'cityone'} key={item.value} >
                                                {item.label}
                                            </div>
                                        )
                                    })
                                    }
                            </div>
                          )
                        }}>
                        </List>
                    )
                }}
            </AutoSizer>
            <ul style={{position:'fixed',right:0,width:'30'}}>
            {
                list.map((item,index) => {
                    return (
                      <li onClick={()=>{
                        jumpRender(index)
                      }} key={index} className={["leftleter",index ==currentIndex ?'cityIndex':''].join(' ')}>
                          {item.toUpperCase()}
                      </li>
                    )
                })
            }
            </ul>
        

          
        </div>
    )
}

export default PageIndex
