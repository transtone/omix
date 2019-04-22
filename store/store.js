import create from '../utils/create'

const emitter = create.emitter

// 注册事件
emitter.on('bar', e => console.log('test bar', e))

export default {
  data: {
    logs: [],
    motto: 'Hello World',
    reverseMotto() {
      return this.motto
        .split('')
        .reverse()
        .join('')
    }
  },
  emitter: emitter
}
