<template>

<article class="accordion" @click="toggleRowActive" >

    <div class="accordion__element">

      <div class="accordion__element__heading">
        <p class="text--bolder"> {{title}}  </p>
        <img ref="accordionElementImg" src="~/static/images/arrow.svg" :class="{'img-active': active}" alt="arrow" width="36px" height="36px">
      </div>

        <div ref="accordionElementText" class="accordion__element__text" :class="{'active': active}">
          <p> {{content}} </p>
        </div>

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
      // console.log(this.$refs.accordionElementText);
      // this.$refs.accordionElementText.classList.toggle("active");
      // if (this.$refs.accordionElementText.classList.contains("active")) {
      //   this.$refs.accordionElementText.classList.toggle("active");
      //   this.$refs.accordionElementImg.classList.toggle("img-active");
      // }
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

      .img-active {
        -ms-transform: rotate(180deg); /* IE 9 */
        -webkit-transform: rotate(180deg); /* Safari 3-8 */
        transform: rotate(180deg);
      }
    }

    &__text {
      display: none;
      p {
        padding: 1rem;
      }
    }
  }
}

.active {
  display: block;
}
</style>