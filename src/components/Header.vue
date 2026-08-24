<template>
  <header ref="header" class="header">
    <a class="header__logo-box" :href="`/${$route.params.lang}`">
      <img :src="`${baseUrl}img/logo.svg`" alt="logo">
    </a>
    
    <nav>
      <div ref="burger" class="burger" @click="toggleMobileMenu">
        <span></span>
      </div>

      <div ref="menu" class="menu">
        <div class="blur" @click="toggleMobileMenu"></div>
        <div class="menu__content">
          <a class="menu__title" :href="`/${$route.params.lang}`">
            <img :src="`${baseUrl}img/logo.svg`" alt="logo">
          </a>
          
          <div class="menu__nav-box">
            <a :class="`menu__nav-item ${$route.hash === '#HowItWork' ? 'active' : ''}`" href="#HowItWork" @click="closeMobileMenu">{{ $t('menu.howItWork') }}</a>
            <a :class="`menu__nav-item ${$route.hash === '#AboutUs' ? 'active' : ''}`" href="#AboutUs" @click="closeMobileMenu">{{ $t('menu.aboutUs') }}</a>
            <a :class="`menu__nav-item ${$route.hash === '#Partnership' ? 'active' : ''}`" href="#Partnership" @click="closeMobileMenu">{{ $t('menu.partnership') }}</a>
            <a :class="`menu__nav-item ${$route.hash === '#Contacts' ? 'active' : ''}`" href="#Contacts" @click="closeMobileMenu">{{ $t('menu.contacts') }}</a>
          </div>

          <div class="menu__btn-box">
            <a class="btn" href="#Contacts" @click="closeMobileMenu">{{ $t('button.buyNow') }}</a>

            <div ref="menu_container" class="menu__lang-box">
              <div class="menu__lang-wrapper">
                <span class="menu__flag" @click="toggleMenu">
                  <img :src="`${baseUrl}img/flag-${$route.params.lang}.svg`" alt="flag">
                </span>

                <router-link v-if="$route.params.lang !== 'ua'" class="menu__flag" :to="`/ua${$route.hash || ''}`" @click="changeLanguage('ua')">
                  <img :src="`${baseUrl}img/flag-ua.svg`" alt="flag">
                </router-link>

                <router-link v-if="$route.params.lang !== 'en'" class="menu__flag" :to="`/en${$route.hash || ''}`" @click="changeLanguage('en')">
                  <img :src="`${baseUrl}img/flag-en.svg`" alt="flag">
                </router-link>

                <router-link v-if="$route.params.lang !== 'ru'" class="menu__flag" :to="`/ru${$route.hash || ''}`" @click="changeLanguage('ru')">
                  <img :src="`${baseUrl}img/flag-ru.svg`" alt="flag">
                </router-link>
              </div>
            </div>
          </div>

          <div class="menu__info-box">
            <div class="menu__info">
              <div class="social">
                <a class="social__link" href="https://fb.me/Socketcar777" target="_blank">
                  <span class="social__circle social__circle--fb">
                    <img :src="`${baseUrl}img/fb-icon.svg`" alt="facebook">
                  </span>
                </a>

                <a class="social__link" href="https://www.youtube.com/channel/UCVKwqZKuId87r8oE1wQqL3w/about" target="_blank">
                  <span class="social__circle social__circle--youtube">
                    <img :src="`${baseUrl}img/youtube-icon.svg`" alt="youtube">
                  </span>
                </a>

                <a class="social__link" href="https://instagram.com/socketcar?igshid=axedbw4ahd4w" target="_blank">
                  <span class="social__circle social__circle--insta">
                    <img :src="`${baseUrl}img/instagram-icon.svg`" alt="instagram">
                  </span>
                </a>

                <a class="social__link" href="https://t.me/socketcar" target="_blank">
                  <span class="social__circle social__circle--telegram">
                    <img :src="`${baseUrl}img/telegram-icon.svg`" alt="telegram">
                  </span>
                </a>

                <a class="social__link" href="https://twitter.com/socket_car?s=09" target="_blank">
                  <span class="social__circle social__circle--twitter">
                    <img :src="`${baseUrl}img/twitter-icon.svg`" alt="twitter">
                  </span>
                </a>
              </div>

              <p class="info">© {{ new Date().getFullYear() }} Socket Car. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      lastScrollTop: 0,
      baseUrl: import.meta.env.BASE_URL
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },

  methods: {
    toggleMobileMenu() {
      this.$refs.burger.classList.toggle('burger');
      this.$refs.burger.classList.toggle('burger-active');
      this.$refs.menu.classList.toggle('active');
      this.$refs.header.classList.toggle('menu-open');
      document.body.classList.toggle('noscroll');
    },

    closeMobileMenu() {
      this.$refs.burger.classList.add('burger');
      this.$refs.burger.classList.remove('burger-active');
      this.$refs.menu.classList.remove('active');
      this.$refs.header.classList.remove('menu-open');
      document.body.classList.remove('noscroll');
    },

    toggleMenu() {
      this.$refs.menu_container.classList.toggle("show")
    },

    changeLanguage(lang: string) {
      this.$i18n.locale = lang;
      this.toggleMenu();
    },

    handleScroll() {
      const scrollTop = window.scrollY;
      scrollTop > this.lastScrollTop ? this.$refs.header.classList.add('hide') : this.$refs.header.classList.remove('hide');
      this.lastScrollTop = scrollTop;
    }
  }
}
</script>