import _ from 'lodash'
import aDemo1 from 'hudada-demo1/src/index.js'
let arr = ['monorepo', 'lerna', 'yarn', 'workspace', 'git', 'npm']
arr = _.concat(arr, aDemo1)
const str = _.join(arr, '~')

export default str