const context = require.context('.', false, /\.js$/) // 采集当前目录下以.js 结尾的文件
const path = require('path')

let api = {}

context.keys().forEach(item => {
    if(item.endsWith('index.js')) return 
    const method = context(item)
   api[path.basename(item).split('.')[0]]=method
})
export default api