<template>
  <section class="b-article-header">
    <!-- article with featured image -->
    <div v-if="false" class="b-article-header--image-wrapper">
      <figure>
        <hide-at :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
          <img class="b-article-header__image" :src="$thumbor(767, 409) + 'https://dummyimage.com/2560x1440/000/fff'" alt="">
        </hide-at>
        <show-at v-if="true" :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
          <img class="b-article-header__image--landscape" :src="$thumbor(1920, 814) + 'https://dummyimage.com/2560x1440/000/fff'" alt="">
        </show-at>
        <show-at v-if="false" :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
          <img class="b-article-header__image--portrait" :src="$thumbor(676, 1080) + 'https://dummyimage.com/2560x1440/000/fff'" alt="">
        </show-at>
        <figcaption class="b-article-header__caption" :class="{ 'b-article-header__caption--portrait': false }">lorem ipsum dolor sit amet</figcaption>
      </figure>
    </div>
    <!-- article with featured video -->
    <div v-if="true" class="b-article-header--video-wrapper">
      <div class="b-article-header__iframe" :class="{ 'is-active': videoVisible, 'not-active': !videoVisible }">
        <youtube :video-id="videoId" :width="playerWidth" :height="playerHeight" ref="youtube" @playing="playing"></youtube>
      </div>
      <div class="b-article-header__thumb" :class="{ 'is-active': thumbVisible, 'not-active': !thumbVisible }">
        <hide-at :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
          <img :src="$thumbor(767, 409) + 'http://img.youtube.com/vi/' + videoId + '/hqdefault.jpg'" alt="">
        </hide-at>
        <show-at :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
          <img :src="$thumbor(1920, 814) + 'http://img.youtube.com/vi/' + videoId + '/hqdefault.jpg'" alt="">
        </show-at>
      </div>
      <button class="b-article-header__button" :class="{ 'is-active': buttonVisible, 'not-active': !buttonVisible }" @click="playVideo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
          <g id="play-btn" transform="translate(-9806 3117)">
            <circle id="Ellipse_1" cx="35" cy="35" r="35" data-name="Ellipse 1" transform="translate(9806 -3117)"/>
            <path id="Path_33" d="M9657.121-3079.048v21.2l17.985-10.391z" class="cls-1" data-name="Path 33" transform="translate(178.419 -13.149)"/>
          </g>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { showAt, hideAt } from 'vue-breakpoints'

export default {
  components: { hideAt, showAt },
  data() {
    return {
      buttonVisible: true,
      thumbVisible: true,
      videoVisible: false,
      videoId: 'mLJ07hy2eDw',
      playerWidth: '100%',
      playerHeight: '100%'
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      this.buttonVisible = false;
      this.thumbVisible = false;
      this.videoVisible = true;
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-article-header {
  display: inline-block;
  width: 100%;

  img {
    width: 100%;
  }

  &--image-wrapper {
    position: relative;
  }

  &--video-wrapper {
    position: relative;
    width: 100%;
  }

  &__image {

    &--portrait {
      @include breakpoint(desktop) {
        width: 44.8rem;

        figcaption {
          padding: 1rem 3.4rem;
        }
      }
    }
  }

  &__caption {
    font-family: 'Lato';
    @include fontSizeRem(12, 16);
    @include lineHeightRem(15, 19);
    text-align: center;
    background: $white;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem 3.4rem;

    @include breakpoint(desktop) {
      padding: 1.2rem 12rem;
    }

    &--portrait {
      @include breakpoint(desktop) {
        padding: .8rem 3.2rem;
      }
    }
  }

  &__iframe {
    height: 20rem;
  }

  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    width: 5.1rem;
    height: 5.1rem;

    svg {
      .cls-1 {
        fill: $sun-yellow;
      }
    }
  }

  .is-active {
    display: block;
  }

  .not-active {
    display: none;
  }
}
</style>
