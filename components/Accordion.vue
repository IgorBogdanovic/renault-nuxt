<template>

  <article class="accordion">

    <div class="accordion__element" @click="open">

      <div class="accordion__heading">
        <p class="text--bolder">Lorem ipsum dolor sit amet?</p>
        <img src="~/static/images/arrow.svg" alt="arrow" width="36px" height="36px">
      </div>

      <div class="accordion__text">
        <p v-show="opened"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, placeat error assumenda perferendis voluptas iste dignissimos, dolores rem officiis at alias maiores. Assumenda quidem nemo ipsam consequuntur optio, perspiciatis debitis. </p>
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
    open() {
      this.opened = !this.opened;
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
  }

  &__heading {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 0;

    img {
      border-radius: 50%;
      background-color: $white;
    }
  }
}
</style>
