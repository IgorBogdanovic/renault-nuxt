<template>

<article class="accordion" @click="toggleRowActive" >

    <div class="accordion__element">

      <div class="accordion__element__heading">
        <p class="text--bolder"> {{title}}  </p>
        <img ref="img" src="~/static/images/arrow.svg" class="img" :class="{'img-active': active}" alt="arrow" width="36px" height="36px">
      </div>

      <transition name="slide-fade">

        <div ref="text" class="accordion__element__text" :class="{'active': active}">
          <p> {{content}} </p>
        </div>

      </transition>

    </div>

  </article>

</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title", "content", "active", "index"],
  methods: {
    toggleRowActive() {
      this.$emit("newactive", this.index);
      this.$refs.text.classList.toggle("active");
      this.$refs.img.classList.toggle("img-active");
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

      .img {
        border-radius: 50%;
        background-color: $white;
        transition: 0.3s ease-in-out;
        outline: none;
        color: transparent;
        border: none;
      }

      .img-active {
        -ms-transform: rotate(180deg); /* IE 9 */
        -webkit-transform: rotate(180deg); /* Safari 3-8 */
        transform: rotate(180deg);
      }
    }

    &__text {
      line-height: 0;
      padding: 0;
      opacity: 0;
      transition: all 0.2s ease;
    }
    &__text.active {
      padding: 1rem;
      line-height: 1;
      opacity: 1;
    }
  }
}
// .slide-fade-enter-active {
//   transition: all 0.2s ease;
// }
// .slide-fade-leave-active {
//   transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateY(-10px);
//   opacity: 0;
// }
</style>