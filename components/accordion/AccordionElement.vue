<template>

<article class="accordion">

    <div class="accordion__element" @click="toggleAccordion">

      <div class="accordion__element__heading">
        <p class="text--bolder"> Heading  </p>
        <img src="~/static/images/arrow.svg" :class="arrowClasses" alt="arrow" width="36px" height="36px">
      </div>

        <div class="accordion__element__text" v-if="opened">
          <p> Content </p>
        </div>

    </div>

  </article>

</template>

<script>
export default {
  data() {
    return {
      opened: false
    };
  },
  methods: {
    toggleAccordion() {
      this.opened = !this.opened;
    }
  },
  computed: {
    arrowClasses() {
      return {
        "is-closed": !this.opened
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.accordion {
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
  }
}
</style>