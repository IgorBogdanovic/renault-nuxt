<template>

  <article class="accordion">

    <div class="accordion__element" @click="show = !show">

      <div class="accordion__element__heading">
        <p class="text--bolder">Lorem ipsum dolor sit amet?</p>
        <img src="~/static/images/arrow.svg" :class="arrowClasses" alt="arrow" width="36px" height="36px">
      </div>

      <transition name="slide-fade" >
        <div class="accordion__element__text" v-if="show">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, placeat error assumenda perferendis voluptas iste dignissimos, dolores rem officiis at alias maiores. Assumenda quidem nemo ipsam consequuntur optio, perspiciatis debitis. </p>
        </div>
      </transition>

    </div>
    
    <div class="accordion__element" @click="show = !show">

      <div class="accordion__element__heading">
        <p class="text--bolder">Lorem ipsum dolor sit amet?</p>
        <img src="~/static/images/arrow.svg" :class="arrowClasses" alt="arrow" width="36px" height="36px">
      </div>

      <transition name="slide-fade" >
        <div class="accordion__element__text" v-if="show">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, placeat error assumenda perferendis voluptas iste dignissimos, dolores rem officiis at alias maiores. Assumenda quidem nemo ipsam consequuntur optio, perspiciatis debitis. </p>
        </div>
      </transition>

    </div>

  </article>

</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {},
  computed: {
    arrowClasses() {
      return {
        "is-closed": !this.show
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.accordion {
  margin: 10rem auto;
  color: $black;
  width: 100%;
  background-color: $white-two;

  &__element {
    border-bottom: 0.1rem solid #efeeee;
    padding: 0 5%;
    cursor: pointer;

    &__heading {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 0;

      img {
        border-radius: 50%;
        background-color: $white;
        transition: 0.3s ease-in-out;
      }

      img.is-closed {
        -ms-transform: rotate(180deg); /* IE 9 */
        -webkit-transform: rotate(180deg); /* Safari 3-8 */
        transform: rotate(180deg);
      }
    }

    &__text {
      p {
        padding: 1rem;
      }
    }

    .slide-fade-enter-active {
      transition: all 0.2s ease;
    }
    .slide-fade-leave-active {
      transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
      transform: translateY(-10px);
      opacity: 0;
    }
  }
}
</style>
