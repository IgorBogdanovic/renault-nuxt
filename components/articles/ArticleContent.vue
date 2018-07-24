<template>
    <!-- if article type is landscape, set this class to false -->
    <div class="b-article-content" :class='{ "b-article-content--portrait": false }'>
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <div class="b-article-content__wrapper">
                    <div class="c-btn c-btn--yellow">{{ article.category[0].name }}</div>
                    <h1 class="b-article-content__title">{{ article.title }}</h1>
                    <div class="b-article-content__text">
                        <!-- if article type is landscape, set this class to true -->
                        <app-social :class='{"c-social--vertical": true}'></app-social>
                        <div class="b-article-content__text-wrap">
                            <p class="b-article-content__date">{{ getDate() }}</p>
                            <p class="b-article-content__intro">{{ article.additional_fields.intro }}</p>
                            <div class="b-article-content__text-block">
                                <div v-for="(element, index) in article.elements" :key="index">
                                    <h2 v-if="element.data.heading_type === 'h2'">{{ element.data.text }}</h2>
                                    <h3 v-if="element.data.heading_type === 'h3'">{{ element.data.text }}</h3>
                                    <div v-if="element.type === 'text'" v-html="element.data.text" class="b-article-content__text-block-text"></div>
                                    <ul v-if="element.type === 'list'" class="b-article-content__text-block-list">
                                        <li v-for="(item, index) in element.data.listItems" :key="index">{{ item.content }}</li>
                                    </ul>
                                    <figure v-if="element.type === 'image'" class="b-article-content__text-block-img">
                                        <img :src="element.data.file.url" :alt="element.data.seoalt">
                                    </figure>
                                    <!-- if article type is landscape, set this class to true -->
                                    <app-article-slider v-if="element.type === 'slider'" :sliderArray="element.data.items" :class='{ "b-article-content__text-block-slider--landscape": false }'></app-article-slider>
                                    <!-- check this -->
                                    <div v-if="element.type === 'video'" class="b-article-content__text-block-video">
                                        <div class="b-article-content__text-block-video-iframe" :class="{ 'is-active': videoVisible, 'not-active': !videoVisible }">
                                            <youtube :video-id="element.data.remote_id" ref="youtube" @playing="playing" :width="playerWidth" :height="playerHeight"></youtube>
                                        </div>
                                        <div class="b-article-content__text-block-video-thumb" :class="{ 'is-active': thumbVisible, 'not-active': !thumbVisible }">
                                            <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                                                <img :src="$thumbor(336, 194) + 'http://img.youtube.com/vi/' + element.data.remote_id + '/hqdefault.jpg'" alt="">
                                            </hide-at>
                                            <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                                                <img :src="$thumbor(752, 432) + 'http://img.youtube.com/vi/' + element.data.remote_id + '/hqdefault.jpg'" alt="">
                                            </show-at>
                                        </div>
                                        <button class="b-article-content__text-block-video-play" :class="{ 'is-active': buttonVisible, 'not-active': !buttonVisible}" @click="playVideo">
                                            <svg id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                                                <g id="play-arrow">
                                                    <polygon points="38.25,0 38.25,357 318.75,178.5" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="b-article-content__text-block-video">
                                <div class="b-article-content__text-block-video-iframe" :class="{ 'is-active': videoVisible, 'not-active': !videoVisible }">
                                    <youtube :video-id="videoId" ref="youtube" @playing="playing" :width="playerWidth" :height="playerHeight"></youtube>
                                </div>
                                <div class="b-article-content__text-block-video-thumb" :class="{ 'is-active': thumbVisible, 'not-active': !thumbVisible }">
                                    <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                                        <img :src="$thumbor(336, 194) + 'http://img.youtube.com/vi/' + videoId + '/hqdefault.jpg'" alt="">
                                    </hide-at>
                                    <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                                        <img :src="$thumbor(752, 432) + 'http://img.youtube.com/vi/' + videoId + '/hqdefault.jpg'" alt="">
                                    </show-at>
                                </div>
                                <button class="b-article-content__text-block-video-play" :class="{ 'is-active': buttonVisible, 'not-active': !buttonVisible}" @click="playVideo">
                                    <svg id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                                        <g id="play-arrow">
                                            <polygon points="38.25,0 38.25,357 318.75,178.5"/>
                                        </g>
                                    </svg>
                                </button>
                            </div> -->
                            <div class="b-article-content__tags">
                                <ul>
                                    <li>Tags: </li>
                                    <li v-for="(category, index) in article.category" :key="index">
                                        <!-- set correct path -->
                                        <nuxt-link tag='a' to="/">{{ category.name }}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Social from "~/components/Social.vue";
import ArticleSlider from "~/components/sliders/ArticleSlider.vue";
import { showAt, hideAt } from "vue-breakpoints";

export default {
  props: ["article"],
  data() {
    return {
      // videoId: 'KWTt7f3PgGI',
      playerWidth: "100%",
      playerHeight: "100%",
      videoVisible: false,
      thumbVisible: true,
      buttonVisible: true
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  methods: {
    getDate() {
      let a = new Date(this.article.created_at * 1000);
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let day = days[a.getDay() - 1];
      if (date < 10) {
        date = "0" + date;
      }
      let time = day + " " + date + " " + month + " " + year;
      return time;
    },
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      (this.videoVisible = true),
        (this.thumbVisible = false),
        (this.buttonVisible = false);
    }
  },
  components: {
    AppSocial: Social,
    AppArticleSlider: ArticleSlider,
    hideAt,
    showAt
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.b-article-content {
  &__wrapper {
    @include breakpoint(desktop) {
      width: 81.8rem;
    }

    & .c-btn {
      margin-bottom: 1.1rem;

      @include breakpoint(desktop) {
        padding: 1.45rem 4.4rem;
        margin-bottom: 2.4rem;
      }
    }
  }

  &__title {
    @include fontSizeRem(20, 54);
    @include lineHeightRem(21, 55);
    font-family: "Lato-Black";
    margin-bottom: 2.3rem;

    @include breakpoint(desktop) {
      margin-bottom: 9rem;
    }
  }

  &__text {
    @include breakpoint(desktop) {
      position: relative;
    }

    & .c-social {
      margin-bottom: 3.8rem;

      @include breakpoint(desktop) {
        margin-bottom: 0;
      }

      &--vertical {
        @include breakpoint(desktop) {
          position: absolute;
        }
      }
    }

    &-wrap {
      @include breakpoint(desktop) {
        margin-left: 11.6rem;
      }
    }

    &-block {
      & h2,
      h3 {
        @include fontSizeRem(17, 18);
        @include lineHeightRem(22, 24);
        font-family: "Lato-Bold";
        margin-bottom: 1.7rem;

        @include breakpoint(desktop) {
          margin-bottom: 2.7rem;
        }
      }

      &-text {
        @include fontSizeRem(14, 16);
        @include lineHeightRem(21, 22);
        margin-bottom: 1.8rem;
        color: $dark-grey;

        @include breakpoint(desktop) {
          margin-bottom: 2.6rem;
        }

        /deep/ a {
          text-decoration: underline;
        }
      }

      &-img {
        width: 100%;
        margin-bottom: 2.3rem;

        @include breakpoint(desktop) {
          margin-bottom: 3.3rem;
        }

        & img {
          width: 100%;
        }
      }

      &-list {
        margin-bottom: 2rem;

        @include breakpoint(desktop) {
          margin-bottom: 3rem;
        }

        & li {
          @include fontSizeRem(14, 16);
          @include lineHeightRem(22, 22);
          color: $dark-grey;
          margin-bottom: 1rem;
          text-indent: -2.5rem;
          padding-left: 2.5rem;

          @include breakpoint(desktop) {
            margin-bottom: 1.1rem;
          }

          &::before {
            content: "";
            display: inline-block;
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            background: $sun-yellow;
            margin-right: 1.7rem;
          }
        }
      }

      &-video {
        position: relative;
        width: 100%;
        height: 19.4rem;
        margin-bottom: 2.2rem;

        @include breakpoint(desktop) {
          height: 43.2rem;
          margin-bottom: 3rem;
        }

        &-iframe {
          width: 100%;
          height: 19.4rem;

          @include breakpoint(desktop) {
            height: 43.2rem;
          }
        }

        &-thumb {
          & img {
            width: 100%;
          }
        }

        &-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 7rem;
          height: 7rem;
          border-radius: 50%;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          & svg {
            width: 2.3rem;
            height: 2.4rem;
            margin-left: 0.7rem;
            fill: $sun-yellow;
          }
        }
      }
    }
  }

  &__date {
    @include fontSizeRem(12, 12);
    color: #6e6e6e;
    margin-bottom: 1rem;

    @include breakpoint(desktop) {
      margin-bottom: 1.3rem;
    }
  }

  &__intro {
    @include fontSizeRem(14, 18);
    @include lineHeightRem(21, 26);
    font-family: "Lato-Black";
    margin-bottom: 2rem;

    @include breakpoint(desktop) {
      margin-bottom: 3.2rem;
    }
  }

  &__tags {
    padding-top: 0.7rem;

    @include breakpoint(desktop) {
      padding-top: 0;
    }

    & ul {
      & li {
        @include fontSizeRem(12, 12);
        color: $sun-yellow;
        display: inline-block;
        margin-right: 0.3rem;
      }
    }
  }

  &--portrait {
    & .b-article-content {
      &__wrapper {
        @include breakpoint(desktop) {
          margin-left: 28.2rem;
          padding-left: 6.8rem;
        }
      }

      &__text {
        & .c-social {
          @include breakpoint(desktop) {
            margin-bottom: 3.9rem;
          }
        }
        &-wrap {
          @include breakpoint(desktop) {
            margin-left: 0;
          }
        }
      }

      &__title {
        @include breakpoint(desktop) {
          margin-bottom: 4.8rem;
        }
      }
    }
  }

  & .is-active {
    display: block;
  }

  & .not-active {
    display: none;
  }
}
</style>