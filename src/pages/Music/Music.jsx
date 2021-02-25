import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import style from './index.module.scss'
import './index.scss'
import MyNavBar from '../../component/MyNavBar/myNavBar'
import { Slider } from 'antd-mobile';
import { object } from 'prop-types'
const lrc = `
[00:00.00]骨子里的我 - 李代沫 (Demon Li)
[00:04.46]词：易家扬
[00:08.93]曲：Michael Willaim
[00:13.39]那时候凄惨的我 吹着北风看月亮
[00:18.10]
[00:19.24]我记得那些人话说的多酸
[00:23.15]
[00:24.15]我穿过大街小巷 擦不掉一身 难堪
[00:30.23]
[00:31.91]死了也没人管
[00:34.60]想对回忆打一枪 让我平反
[00:39.95]跟昨天的昨天 上诉
[00:43.41]
[00:44.80]我很平凡 也很简单
[00:49.23]
[00:50.39]骨子里的我却很勇敢
[00:54.36]
[00:55.26]我还有眼泪 不用别人安慰
[01:00.09]
[01:01.58]重新来 我还有胜算
[01:08.83]
[01:12.42]一定有爱 呜呜
[01:16.39]
[01:18.79]那些破旧的饭馆 用梦下饭的晚餐
[01:23.58]
[01:24.66]那一场雷雨里一个人呐喊
[01:29.81]没有思念的人 没有快乐的时光
[01:35.60]好让我咬紧牙 向前闯
[01:39.95]想对回忆打一枪 让我平反
[01:44.72]
[01:45.42]跟明天的明天 下个注
[01:49.54]
[01:50.23]我很平凡 也很简单
[01:54.53]
[01:55.87]骨子里的我却很勇敢
[02:00.31]
[02:01.28]我不想飞 宁可用脚去追 去流浪
[02:08.28]
[02:12.54]远方的港湾 还有些希望
[02:16.98]
[02:18.02]让我可以靠岸 啊
[02:26.41]
[02:34.23]我有眼泪 不用别人安慰 重新来
[02:40.82]
[02:45.06]我很平凡 也很简单
[02:48.66]
[02:50.41]骨子里的我却很勇敢
[02:54.32]
[02:55.76]我不想飞 宁可用脚去追 去流浪
`
var lrcArr =lrc.split(`
`)

// console.log(lrcArr,'歌词歌词歌词歌词歌词')
const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/ // 
const arr =[]
lrcArr.forEach(item => {
    if(item =='') return
    const key = item.match(regTime)&&item.match(regTime)[0]
    const lrc = key&&item.substring(key.length)
   let key1 = key&&key.substring(1,key.length-1)
    arr.push({
        [key1]:lrc,
        current:false
    })
        
})
// console.log(arr,'sslfdjlfjasldjfl');
function Music() {
  
    // 时间格式化处理
    const getTime = time => {
        if (time) {
            const minute = parseInt((time / 60) % 60);
            const second = parseInt(time % 60);
            let minuteText = `${minute}`;
            let secondText = `${second}`;
            if (minute < 10) {
                minuteText = `0${minute}`;
            }
            if (second < 10) {
                secondText = `0${second}`;
            }
            return `${minuteText}:${secondText}`;
        } else {
            return "00:00";
        }
    };
    // 时间格式转换成ms
    const formatTimeToMs = time => {
 
        var min = time.split(":")[0]
        var sec = time.split(":")[1]
        var s = Number(min * 60) + Number(sec)
        return s
    }

    const audio = useRef()
    const [value, setValue] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false) // 是否在播放
    const [currentTime, setCurrentTime] = useState("0:00")
    const [totalTime, setTotalTime] = useState("0:00")
    const [lrcArray, setLrcArray] = useState(arr)
    const url = "http://127.0.0.1:7001/public/music/%E9%AA%A8%E5%AD%90%E9%87%8C%E7%9A%84%E6%88%91.MP3"
   
    // 渲染歌词
    function renderLysrc(){
        return lrcArray.map(item =>{
            let key = Object.keys(item)[0]
            return (
                <li key={key} className={item.current?style.active:""}>
                    {item[key]}
                </li>
            )
        })
    }
    // 获取歌曲的总时长
    function getTotalTime() {
        // console.log(audio, 'audio');
        let totalTime = getTime(audio.current.duration)
        setTotalTime(totalTime)
    }

    function onPlay(e) {
        // console.log(e, '111');
        setIsPlaying(true)
        audio.current.play()
    }
    function onPause() {
        setIsPlaying(false)
        audio.current.pause()
    };
    const setProgress = (value) => {
        const currentTime = audio.current.duration * value / 100
        audio.current.currentTime = currentTime
    }
    useEffect(() => {
        // console.log(audio,'12312');
        audio.current.addEventListener("timeupdate", () => {
            let currentTime = audio.current.currentTime // 当前播放的音乐时间
            // 歌词
            // debugger
         let res =    arr.map(item => {
             const time = Object.keys(item)[0]
             console.log(`歌词时间:${formatTimeToMs(time)}
             当前时间:${currentTime}`)
             return {
                 ...item,
                 current:formatTimeToMs(time)<=currentTime
             }
            })
            arr.forEach(item => {
             const time = Object.keys(item)[0]
                if(formatTimeToMs(time)<=currentTime){
                    arr.forEach(item1 => item1.current = false)
                    item.current = true
                }
            })
            setLrcArray(arr)

            setCurrentTime(getTime(currentTime))
            // console.log(currentTime / audio.current.duration * 100);
            setValue(currentTime / audio.current.duration * 100)
        })

    }, [])

    return (
        <>
            <MyNavBar>音乐播放</MyNavBar>

            {/* 歌名 */}
            <div className={style.wrap} style={{
                width: '100%',
                height: '100%',

            }}>
                {/* 歌名 */}
                <div className={style.songName}>
                    骨子里的我
            </div>
                {/* 作者 */}
                <div className={style.author}>
                    <span>
                        李代沫
                </span>
                    <span className={style.aciton}>
                        关注
                    <img src="" alt="" />
                    </span>
                </div>
                {/* 歌词 */}
                <ul className={style.lyric}>
                {renderLysrc()}
                </ul>

               <br/>
               <br/>
                {/* 用户操作按钮 */}
                <div className={style.opration}>
                    <span className='iconfont icon-shoucang'></span>
                    <span className='iconfont icon-xiazai'></span>
                    <span className='iconfont icon-Augusta20yanchanghuixinxi'></span>
                    <span className='iconfont icon-wsdzb_zzgzt_zzsh_mzpy_dymzpyjl'></span>
                    <span className='iconfont icon-gengduo'></span>
                </div>
                <br />
                <br />
                <div className={style.progress}>
                    <div className={style.startTime}>
                        {currentTime}
                    </div>

                    <div className={style.bar}>
                        <Slider
                            style={{ marginLeft: 30, marginRight: 30 }}
                            defaultValue={0}
                            value={value}
                            min={0}
                            max={100}
                            onChange={(value) => {
                                setProgress(value)
                            }}
                            handleStyle={{
                                height: '14px',
                                width: '14px',
                                marginTop: '-5.5px',
                                marginLeft: '0px',
                                borderRadius: '7px',
                                backgroundColor: '#fff',

                            }}
                            trackStyle={{
                                backgroundColor: 'rgb(88, 178, 220)',

                            }}
                            railStyle={{
                                backgroundColor: '#fff',
                            }}
                        />

                    </div>

                    <div className={style.endTime}>
                        {totalTime}
                    </div>

                </div>

                <div className={style.play}>
                    <span className="iconfont icon-xiayishou-copy">

                    </span>
                    {isPlaying
                        ? <span onClick={onPause} className="iconfont icon-bofang-zanting"></span>

                        : <span onClick={onPlay} className="iconfont icon-bofangzanting"></span>
                    }
                    <span className="iconfont icon-xiayishou">

                    </span>
                </div>
                <audio 
                style={{
                    display:'none'
                }}
                onCanPlay={
                    getTotalTime
                } ref={audio}
                    controls='controls' src={url}></audio>
            </div>


        </>
    )
}

export default Music
