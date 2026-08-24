import './assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import enJson from './locales/en/translation.json'
import ruJson from './locales/ru/translation.json'
import uaJson from './locales/ua/translation.json'

const i18n = createI18n({
    locale: 'ua',
    messages: {
        en: enJson,
        ru: ruJson,
        ua: uaJson,
    },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
