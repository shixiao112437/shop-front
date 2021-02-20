import React from 'react'
import ReactPlayer from 'react-player'
function Music() {
    const url = "http://m8.music.126.net/20210207104420/c5ec8d43f4382cdfc7d2da3e1e1140aa/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
    return (
        <>
        <h1>
            music
        </h1>
         <ReactPlayer playing url={url} controls/>
        </>
    )
}

export default Music
