<template>
  <main>
    <div v-if="showVideo" class="vid" @click="showVideo = false">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gb1VZ7Mjur4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <section class="main" id="main">
      <div class="main__wrapper">
        <div class="main__content-box">
          <h1 class="main__title">{{ $t('title.safety') }}<br> {{ $t('title.reliability') }}<br> {{ $t('title.comfort') }}</h1>
          <p class="main__text main__text-custom">{{ $t('sub-title') }}</p>

          <div class="main__video-box">
            <a class="btn btn-transparent" href="#HowItWork">{{ $t('button.discover') }}</a>
            <span class="main__video" @click="showVideo = true">
              {{ $t('button.watchVideo') }}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="svg-fill" d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" fill="#00C6C2"></path>
                <path class="svg-fill" d="M16.8607 11.6981L9.92085 6.65902C9.86519 6.61822 9.7993 6.59367 9.73051 6.58812C9.66172 6.58257 9.59274 6.59623 9.53126 6.62758C9.46978 6.65893 9.41821 6.70673 9.3823 6.76567C9.34639 6.8246 9.32755 6.89235 9.32789 6.96136V17.0395C9.32789 17.3465 9.67476 17.52 9.92085 17.3419L16.8607 12.3028C16.9086 12.2683 16.9476 12.2228 16.9745 12.1703C17.0015 12.1177 17.0155 12.0595 17.0155 12.0004C17.0155 11.9414 17.0015 11.8832 16.9745 11.8306C16.9476 11.778 16.9086 11.7326 16.8607 11.6981ZM10.8232 14.8387V9.16215L14.7302 12.0004L10.8232 14.8387Z" fill="#00C6C2"></path>
              </svg>
            </span>
          </div>

          <div class="main__img-box">
            <img class="main__img" :src="`${baseUrl}img/Shema-${$route.params.lang}.svg`" alt="shema">
          </div>

          <div class="relative">
            <div class="scrollTo" id="HowItWork"></div>
            <h2 class="main__sub-title">{{ $t('howItWorks') }}</h2>
          </div>
          <p class="main__text-line">{{ $t('howItWorksDescription.device') }}</p>
          <p class="main__text-line">{{ $t('howItWorksDescription.system') }}</p>
          <p class="main__text">{{ $t('howItWorksDescription.aesthetics') }}</p>
          <a class="btn" href="#Contacts">{{ $t('button.protect') }}</a>
        </div>

        <div class="main__img-box-tablet">
          <img class="main__img" :src="`${baseUrl}img/Shema-tabl-${$route.params.lang}.svg`" alt="shema">
        </div>

        <div class="main__img-box-desktop">
          <img class="main__img" :src="`${baseUrl}img/Shema-desktop-${$route.params.lang}.svg`" alt="shema">
        </div>
      </div>

      <h2 class="sub-title">{{ $t('ourPartners') }}</h2>

      <div class="main__advertising-box">
        <div class="main__advertising">
          <img class="main__advertising-item1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAUCAYAAADRA14pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQOSURBVHgB5VddbttGEJ6l5FQBWoQ+gRigaPsm9gRWT2DdwOoJ4r62D7IAo31scgIrN5BPYOoEpp8TQKsTiEb+bYmTmeXQnNCrn0QPAZIBVlrNfDs7883ukDKwg+AgCt9DK7xt5jEEQdjAvA0IkbMZExnAEIwJCzBGa1xlhMsKGFj+NgYzg2gRTLY0wczkYE2wzH7850UKO4jZBsSJvXmwF+XQiJu47HAytDTekATlDpkx4BLh4NdinU+XcEhBhbBeUiYigDxdoJkEAdptifAmzAm+etDqueTAdEkVe1Za3hhyzPIgSLkiDchtK1/a7Bav94c2gx1kTjHsEckNg4+WEERU4YgJJgKJeBP7SKFYk5KEvcVN+nBo7f2wJcHXzVbcMMtDNEFPV85VCeg4ASZ5YFKyXd3e3NpdE9pVmJDWD83OAhsxXaWIVLEURwvHmy7BnP+0uEkMxWzenv56gYBcQccYJ0ifKSU+bppl+v7D4uprJ/c58u7fnw+EhN69k2BgbN6c/kI5EhOQj4MAkod/v5zANyRMAOamd3c18fRxG74Tmf/3WwTfmxRNC5HP+TGNAxqR2CyNEY1zQ89IwvA9/38Ln33Czwjfo/kTpZ+Q/kQDCXMm+43I9nyVDYp72IPN8heNI/j0qTIk34l2HNGY4mphW0iji9tJW/xOa/q5EKv3LjGDeuTaxsnjZmF87NFfaL9NGgNhMhMWrdj+gKKibONK6WZ2LPhSYtGVwfahOik8H0FRJfYzhM8Xrn4ic/bzVOYnKt4rqE4U68YSExeqe1dl+nEpTDyp7yLslux161VUuGNlC7GqzoXYL9BTZYWbCkaPUga1vSJlO1ihH0gccx0HC1e4PO++Z+0M/DIiJ+U8VD7GMo9UIGdq3aoqR3rNF4ompgvVqeU9uVgxVTnlhO2aDUsG62R0PdgEiqZxtgHHx6ye8FiGlqew+Z3aCRZvhr0N+3IzcwmPoLgLJ7TwGtxLyN2ivswTuB+0JsESexPZuKsC1i/0kezDR+2o1pVTT5d2WNhOugrb99hY1yefQ5Czfomr5RLvd2nvywpW3XSKnn9S6m6Wd3vqu6frbL47rLBnHj+hwg+apvgf+jsWnfVIYVmfkP2ZLLRQVIjlGvxSYrji1mPnI39YBgLVsfW9zq6yZVDFMRNiR/L7ed2JvEP8SdM2+PvUty0GizcoCwWbzEAEVSMr9cyUlaqUrLmuh+4/qrNF4GfwEz8i3OLLUxIq36GyabyO61G5VuII5bvc3z01SDeu6dxe3LRc9xIlO9KlZ+f7NDq0eCbB7NOc8YcSJN8j7rr8uLlSAXdUom2ongIzlQBjY9dMiuaSiv6xYDi2c/FzIP47YuMkJxIH+5xLDG5P0mWCnSmSDj8CGsihHGnbAW8AAAAASUVORK5CYII=" alt="oranta"><img class="main__advertising-item2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAUCAYAAAAtFnXjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHpSURBVHgB7ZZLTsMwEEAnKAgEC9JNRdlgTkALgnUP0O8JKIJ94QKU3IAbNEcoJ2jZwJJUqtjWvUHUDUszQxMwrpOS1EJQ8aRR7PF47PFnHEsI0QczcMuyzqmAPq/wU4d0BNi/GVXQB8NPB6WMwhb09VHuUe7QR0CdTcGigEQ2xnJAVBfpGaM4a2AGD1eIh4G1YXno9DBID6PxbVgejuKG5Q5km8wHuDDFGB8BSk+qOygNjV3L1jjIoTxDPF4oEZNwl2iQlsa+KfljKANIxonRl2gcWYFj0iLeKnbMRsOJopygMSRACeFBo9etGh3LnjQJC7LB1YAI1Lno01P1Jo5fxKGqeLnpNB6r9XJUf6o1YCOf13bOnZ5AFjSbYjSooqqY+kNf3RoMiql29vY2FCoVMIXJoOYQszfmC9PRaM7u4PICNvcKkACleKa5Uy2YJSeZwGRQXFVsMdZ75TyI6uuO4+wcH83dvd1aNdFPSB+DoPsZ+YsSk7NoHu8seOA6MX3aGtszxYYl+JUf377ITtfU40sMNboWZOMaPnckDRzFtRMa49AOhud9IGbHQ04YtDNlavuGby758rFfCYtd0NzLmDl5KC79+2V9N34UDHA/qV1N6xatJKwYFJSAFcNkovg1/Af1V1jJoN4AXnTiakcuhSIAAAAASUVORK5CYII=" alt="tac"><img class="main__advertising-item3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAUCAYAAAAk/dWZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQYSURBVHgBzVbNT1NZFP/1WRlKyEydzhgmMJlHwmz52EwmM6M8F25mFrAY1+BeAytdghtd+vUHtG400QXoP2CRpPgR06IbSECeKQbBVl4iUKR9vZ7z3r3l9rUFoy76S27vveee/s4595577oMgFD98EJuzs6JE/ce1tQk0AKn2c0OTIbyzs4O9jQ1spFLYor6trb2uIjk/TF2c2jCaDMabJ0+xurqK0tY2CkvLaOnoqFGiAEapm6IWRRMiHPm9B61CAP/9i59iMUR6eqoUKIBx6q7iG0CeJm/GKfgnOhQKhbrxlfDSifG+XEaotRVd1UYnqdPvSIKMzuDLkWEOaja1JLUVfAOEY8uv8N0vHWhbW0M+EkFXlx9GgwDOyjXeRT21HHaQ1m0lkAWAm0PyaZbxOskv0dCS8us0N+Wc1xMBfptkSY1TySucHtbv3hNzFy6K7I2bIpvNcrGa4ABENaoqFs1XRH1YDXR0+aiUrQTmQtN5KEXxA+xWqqTBP7HdXTi9vci/eMHT8cAJTFLUl1AfCbmLGTkfk8ZYZmp6Q/hKyOJiaqIRNTCOn/kfnVcuw/3he8QoENRWoIMqki3viB3QVQYmZc+7fWhl4+DlBtTTVZyJGs7FxUWRSqXE8rNnYj6TEYeliTSmjnUzcMQj1ExtbmqpoU6pYTrVQVzqHMhpxKis/moYODr3GN2Ulntv33pRYj9FGPEGO2nDrzIJ/g+dyi1tx/iysxOmnH/OI2mhOj0VJgKc/TqnsfXunTcrFAp4Nf0AxfzmNenMWY3ERPU9UZjmiiXbLSkb1QyauoPBEw2CU1Omp6Nkwq9ewwFOR+c0WlwXC+vraD/+M9pLRQi36EhC3o1rmo3xw5wQfgk05XSAHzL5mCWl7EsuuIX9cttdh3MsxGWVR/lcDn393ilVqpFMobTmGL8FAyQfksTzMlgVBBv8DX4dv6/J+f+D8HdwXo1ZR1uDOk2N57WkOJgzl8uJlzMz4jl9xc7RBRe1b4IVuGyDaDKEC7fvVOpZ1/lzNQr8YpLjnFbjSpa2rOhAMulwr+vqMh7X01VynStos4p7F9GBx0m7EU/6T8s02imFCj8eAzo78XphAQ3A6WWriVHCSPovq79Uoirh0pGWMFZ2MUEGTOrjnrET1pSn7GI4/Y81xj1KZa8kpk8MTlWYXfkqEyfKdGeI01vnObewX+3KFb3yCIrlofRJy/NBtIip0OajWVFYWoLT14v3+Tz+Pn267gst9r9ArczJU8fIKRstsOmxjx4xEP0jlcxwEMU9RI+SXLihvtARMU96ltR1yCmTnMqoNS9YcoR52HkKwqmMwx63B/oudSp8fDhss5XswLeD7e1t75uJ7wa34J0IBPKwGe+Ewe9DhL5eGavZ7GH6/HY4aDJ8Ag+IJlsQlleGAAAAAElFTkSuQmCC" alt="kraina"><img class="main__advertising-item4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAUCAYAAADr0+FaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS8SURBVHgBzVm9chM7FD6beG5xm7v3CbK3Zbhgz0DNuoMCsHkBTMMMFc5QUWVdM2CnhAbTMyGBBqosD8Ak/E66iCfANPyOEed4tY72rKSV7RD4JpqMpaNvtUdHn3S0QbgWRxDAfZgVErZGvXTgZSplHf/19bogCJqqjerrWtMqtu3Oy+foE+O/i1haWEJVRlh2VdlCjhRmAHISx2UsMWTvEKmmnHdT8QpT/wA8gBPURcs+qx7hBDRwAkRVf/Xi24UHI1Tbthp8DoGlgc2jefgstmvsGTYILAlSPXAZKad3sVyHbBKrMMTS45Ow5NERVITzaAwNE3IYiCBz1sJAJyWQTVLs2SXCMlSr0cZJNjuQjdHH8YQOjUOt2Cm8In9RzBj5OUh+BrPyaTYJmCdRQCYH+coK4UA2dERI+Z5xRuq5EbMdKU6hcbYsds0qWT1UkLMkg9a2Lc34oF52Jj7V3jHw7WM54xhjRBFv4tNs9g28fSVDJvuuZRwT+1puWH/UCr/4L6MC9tqbAg4fNJZHONCmS/8t4BEvIIs4Yeug2lbxeesAZTmlCYVyJNP+0HNwDrAfRbm+SiPI9oredKkee3ypgyK0UugMAW0q1RMi5eDthY1Ve/NcspNjgKarM/CV2hCdqk2U8Yd8wg3jFGjznycfTWZXqxph33+dmn/8yaU1CUECHhhD0Nw7/zC1PDwGf+eTznO9bKP5picfRX2iNXk7yQWDFHlPqMw22h1W3ay5Or05v9HDFRGBB/DVT+K/FBYHRdwVKDr3Pi1fl2xo4BvnwpubZKcUhZfgCdpgkYPeS1eRlVpVx3cXNq7AEYOSHRwsSU2uvRP9x9Lw6M5l0uh85KeVdBLcIMlbN3DCHCcWAcXAiCqd/7ugNis6nbRUVZ20k+v/AvgHyhsox1wHEAtKh4ZK55+998br6kHC0u6zq8fW4XBBq05P2+notlXRh79kZLETcHAuz5FfO3CukuNwHCs8D6gAl66R0/ln775OIMvOKhGMvy68qZU48cSBL9mG4mZF8uOKfsF+1y3cJTnFZxF3y8AlDBRk5xVsas8oyeHU+efuvmrJpeWiBkq6NJLggeHTaw0BvwBqs+L677rWoJWhH+tIrmLPSzM+Ue/VGCgIUiieyrydD9m5XgedwJ5Pnf/5r3H697hWPA4FdCFUfQPxafnrR/iFMOh/6LClzVpAUW76VckaZaOsj2CbKiVTsfabsmxKshJwAG1ozB1WncJRQc52vbBm4QilOb0v8Clb0/XCjrRfV5D9B2Z/2WC3beDtO3i7Bt793P6PPe1wWPTfZjuUWSKmO5AkhV6cjph5RIeqPmYUwpJA5flHpNXRimnJ7BpB5+1AeYXSymvn+Yq380+cvrOP8h/pdfjA4esXN44sDzDov8t2Es1Q1H9CC4qbKgc5sG3hFMhJH234BESquHgFZI6fSpnXff7/p293uOPx9+j7+FsPjhjqmtkrrVc5AQWH8DCnqEzA4wJOXVcknrwEGnODJ2a146duxQEsuz9eyMlfWqha+rG59+KmAD/Qi6WWNp4p+pydKZpXPOwmEgTZB5L8E2IdDk41+ee+FMv6LLendJuJnBQEMWSfJyONV8DBd4MHNt6fsQIv+cmnELQAAAAASUVORK5CYII=" alt="ingo"><img class="main__advertising-item5" src="data:image/png;base64,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" alt="alfa">
        </div>
      </div>
    </section>

    <section class="advantages">
      <h2 class="advantages__title">{{ $t('advantages.title') }}</h2>

      <div class="advantages__main-box">
        <div class="advantages__content-box advantages__content-box1">
          <div class="advantages__img-box">
            <img :src="`${baseUrl}img/key.svg`" alt="icon">
          </div>
          <p class="advantages__text">{{ $t('advantages.key') }}</p>
        </div>

        <div class="advantages__content-box advantages__content-box2">
          <div class="advantages__img-box">
            <img :src="`${baseUrl}img/Connector.svg`" alt="icon">
          </div>
          <p class="advantages__text">{{ $t('advantages.connector') }}</p>
        </div>

        <div class="advantages__content-box advantages__content-box3">
          <div class="advantages__img-box">
            <img :src="`${baseUrl}img/shild.svg`" alt="icon">
          </div>
          <p class="advantages__text">{{ $t('advantages.shild') }}</p>
        </div>

        <div class="advantages__content-box advantages__content-box4">
          <div class="advantages__img-box">
            <img :src="`${baseUrl}img/circle.svg`" alt="icon">
          </div>
          <p class="advantages__text">{{ $t('advantages.circle') }}</p>
        </div>

        <div class="advantages__content-box advantages__content-box5">
          <div class="advantages__img-box">
            <img :src="`${baseUrl}img/cable.svg`" alt="icon">
          </div>
          <p class="advantages__text">{{ $t('advantages.cable') }}</p>
        </div>

        <div class="advantages__content-box advantages__content-box6">
          <div class="advantages__img-box">
            <img :src="`${baseUrl}img/tester.svg`" alt="icon">
          </div>
          <p class="advantages__text">{{ $t('advantages.tester') }}</p>
        </div>

        <div class="advantages__content-box advantages__content-box7">
          <div class="advantages__img-box">
            <img :src="`${baseUrl}img/wheel.svg`" alt="icon">
          </div>
          <p class="advantages__text">{{ $t('advantages.wheel') }}</p>
        </div>

        <div class="advantages__content-box">
          <div>
            <img :src="`${baseUrl}img/document.svg`" alt="icon">
          </div>
          <p class="advantages__text">{{ $t('advantages.certificate.text') }}<span @click="showSertificates = !showSertificates">{{ $t('advantages.certificate.link') }}</span></p>
        </div>

        <div class="advantages__wheel">
          <img :src="`${baseUrl}img/wheel-desctop.svg`" alt="wheel">
        </div>
      </div>

      <div v-if="showSertificates" class="advantages__sertificate">
        <div><img :src="`${baseUrl}img/sertificate2.jpg`" alt="sertificate"></div>
        <div><img :src="`${baseUrl}img/sertificate.jpg`" alt="sertificate"></div>
      </div>

      <div class="advantages__row"></div>

      <div class="advantages__info-wrapper">
        <div class="advantages__info-box">
          <div class="advantages__info-img">
            <img :src="`${baseUrl}img/component-icon.svg`" alt="component">
          </div>

          <h3 class="advantages__info-title">{{ $t('components.title') }}</h3>
          <p class="advantages__info-text bold">{{ $t('components.subTitle') }}</p>
          <ul>
            <li class="advantages__info-text">{{ $t('components.multiPin') }}</li>
            <li class="advantages__info-text">{{ $t('components.connector') }}</li>
            <li class="advantages__info-text">{{ $t('components.wires') }}</li>
            <li class="advantages__info-text">{{ $t('components.manual') }}</li>
          </ul>
        </div>

        <div class="advantages__info-box">
          <div class="advantages__info-img">
            <img :src="`${baseUrl}img/service-icon.svg`" alt="service">
          </div>

          <h3 class="advantages__info-title">{{ $t('service.title') }}</h3>
          <p class="advantages__info-text">{{ $t('service.system') }}</p>
          <p class="advantages__info-text">{{ $t('service.description') }}</p>
        </div>
      </div>
    </section>

    <section class="license">
      <h2 class="license__title">{{ $t('license') }}</h2>
      <div class="license__carousel">
        <swiper :slides-per-view="'auto'" :space-between="22" :modules="modules" :pagination="pagination">
          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/mini-car.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('miniCars') }}<span class="card__title">a-class</span></div>
              <p class="card__text">Kia Picanto, Smart Fortwo, Hyundai i10, Citroen C1, Chevrolet Spark, Daewoo Matiz</p>
              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/small-car.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('smallCars') }}<span class="card__title">b-class</span></div>
              <p class="card__text">Audi A1, Chevrolet Aveo, Citroen C3, Renault Logan, Ford Fiesta, Kia Rio, Hyundai Accent</p>
              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/medium-car.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('mediumCars') }}<span class="card__title">c-class</span></div>
              <p class="card__text">Volkswagen Golf, Honda Civic, Skoda Octavia, Ford Focus, Audi A3</p>

              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/largerCars.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('largerCars') }}<span class="card__title">d-class</span></div>
              <p class="card__text">Toyota Camry, Honda Accord, Skoda Superb, Volkswagen Passat, Audi A4, Chrvrolet Malibu</p>

              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/executiveCars.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('executiveCars') }}<span class="card__title">e-class</span></div>
              <p class="card__text">Audi A6, Mercedes-Benz E-class, BMW 5-series,&nbsp;Hyundai Grandeur, Honda Legend</p>

              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/luxuryCars.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('luxuryCars') }}<span class="card__title">f-class</span></div>
              <p class="card__text">Audi A8, BMW 7-series, Mercedes-Benz S-class, Volkswagen Phaeton, Bentley Flying Spur</p>

              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/sportUtility.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('sportsUtility') }}<span class="card__title">j-class</span></div>
              <p class="card__text">Jeep Liberty, Toyota RAV4, Honda CR-V, BMW X6, Volkswagen Touareg, Range Rover</p>

              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/multiPurpose.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('multiPurpose') }}<span class="card__title">m-class</span></div>
              <p class="card__text">Skoda Yetti, Fiat Doblo, Renault Kangoo</p>

              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="card__img-box">
                <img :src="`${baseUrl}img/cuopeCars.png`" alt="car">
              </div>
              <div class="card__title-color">{{ $t('sportCoupes') }}<span class="card__title">s-class</span></div>
              <p class="card__text">Mercedes-Benz AMG GT, Hyundai Coupe, Subaru BRZ, Audi A5, BMW M4</p>

              <div class="card__bot">
                <div class="card__bot-part">
                  <p class="card__bot-text">8pin</p>
                </div>

                <div class="card__bot-part">
                  <p class="card__bot-text">16pin</p>
                </div>

                <div class="card__bot-footer">{{ $t('carPrice') }}</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="about" id="AboutUs">
      <div class="about__img-box">
        <img class="about__img" :src="`${baseUrl}img/mechanic.png`" alt="mechanic">
        <img class="about__img-tablet" :src="`${baseUrl}img/mechanic-tablet.png`" alt="mechanic">
        <img class="about__img-desktop" :src="`${baseUrl}img/mechanic-desktop.jpg`" alt="mechanic">
      </div>

      <div class="about__content-box">
        <h2 class="about__title">{{ $t('aboutUs.title') }}</h2>
        <p class="about__text-center">{{ $t('aboutUs.description') }}</p>
        <p class="about__text-center">{{ $t('aboutUs.conclusion') }}</p>

        <div class="about__block">
          <img :src="`${baseUrl}img/medal.svg`" alt="medal">
          <p class="about__text">{{ $t('aboutUs.partner.top') }}<br>{{ $t('aboutUs.partner.bot') }}</p>
        </div>
      </div>
    </section>

    <section class="partnership" id="Partnership">
      <div class="partnership__img-box">
        <img class="partnership__img" :src="`${baseUrl}img/puzzle.png`" alt="puzzle">
        <img class="partnership__img-tablet" :src="`${baseUrl}img/puzzle-tablet.png`" alt="puzzle">
        <img class="partnership__img-desktop" :src="`${baseUrl}img/puzzle-desktop.jpg`" alt="puzzle">
      </div>

      <div class="partnership__content-box">
        <h2 class="partnership__title">{{ $t('partnership.title') }}</h2>
        <p class="partnership__text">{{ $t('partnership.offer') }}</p>
        <a class="btn" href="#Contacts">{{ $t('button.partner') }}</a>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types';

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      showVideo: false,
      showSertificates: false,
      modules: [Pagination],
      pagination: {
        clickable: true,
      } as PaginationOptions,
      baseUrl: import.meta.env.BASE_URL
    }
  },

  created() {
    this.$i18n.locale = this.$route.params.lang;
  }
}
</script>