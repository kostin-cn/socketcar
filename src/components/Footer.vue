<template>
  <footer class="footer" id="Contacts">
    <div class="footer__top-box">
      <div class="form-wrapper">
<!--        <script async="" src="https://cdn.bitrix24.ua/b16909045/crm/form/loader_4.js?9596295"></script>-->
<!--        <script async="" src="https://cdn.bitrix24.ua/b16909045/crm/form/loader_4.js?9596295"></script>-->
<!--        <script async="" src="https://cdn.bitrix24.ua/b16909045/crm/form/loader_4.js?9596295"></script>-->
<!--        <script async="" src="https://cdn.bitrix24.ua/b16909045/crm/form/loader_4.js?9596294"></script>-->
<!--        <script async="" src="https://cdn.bitrix24.ua/b16909045/crm/form/loader_4.js?9596294"></script>-->
<!--        <script async="" src="https://cdn.bitrix24.ua/b16909045/crm/form/loader_4.js?9596294"></script>-->
<!--        <script async="" src="https://cdn.bitrix24.ua/b16909045/crm/form/loader_4.js?9594181"></script>-->
<!--        <script async="" src="https://cdn.bitrix24.ua/b16909045/crm/form/loader_4.js?9594181"></script>-->
<!--        <script data-b24-form="inline/4/e33w4w" data-skip-moving="true"></script>-->
      </div>
    </div>
    <div class="footer__bot-box">
      <div>
        <img class="footer__bot-logo" :src="`${baseUrl}img/logowhite.svg`" alt="logo">
      </div>

      <p class="footer__bot-text">{{ $t('contactUs.description') }}</p>

      <div class="footer__fone-box">
        <a class="footer__fone" href="tel:+380732171771">+38 073 217 17 71</a>
        <a class="footer__fone" href="tel:+380962171771">+38 096 217 17 71</a>
      </div>

      <div class="footer__bot-mail">
        <img :src="`${baseUrl}img/mail.svg`" alt="mail">
        <p class="footer__bot-mail-text"><a href="mailto:contact@socketcar.com">contact@socketcar.com</a></p>
      </div>

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
    </div>
  </footer>
</template>

<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL;
</script>