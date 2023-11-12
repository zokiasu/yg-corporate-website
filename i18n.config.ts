export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome to Vue.js app with i18n!',
    },
    ja: {
      welcome: 'Vue.jsアプリケーションへようこそ！',
    },
    ko: {
      welcome: 'Vue.js 앱에 오신 것을 환영합니다!',
    },
    'zh-CN': {
      welcome: '欢迎来到Vue.js应用程序！',
    },
  },
}))