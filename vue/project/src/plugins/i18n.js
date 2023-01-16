/* eslint-disable */

export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key, params = {}) =>
      key
        .split('.')
        // en.hi => ['en','hi']
        .reduce((o, i) => {
          if (o) return o[i]
        }, options)
        .replace(/{\w+}/g, (match) => params[match.slice(1, -1)])
  }
}
// {name} ==> name

// {
//   en: {
//     hi: 'Hello',
//     search: 'Search',
//     save: 'Save'
//   },
//   ko: {
//     hi: '안녕하세요',
//     search: '조회',
//     save: '저장'
//   }
// }
