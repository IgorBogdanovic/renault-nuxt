<template>
    <div class="c-breadcrumbs">
        <ul>
            <li>
                <nuxt-link to="/">Homepage</nuxt-link>
                <nuxt-link v-for="(name, index) in names" :key="index" :to="{ path: paths[index] }">
                    {{ name }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
      names: [],
      slashNames: [],
      helpArr: [],
      paths: []
    };
  },
  created() {
    this.routes = this.$route.matched;
    this.names = this.routes[0].path.split("/");
    this.names.splice(0, 1);
    for (let i = 0; i < this.names.length; i++) {
      this.slashNames.push("/" + this.names[i]);
    }
    for (let i = 0; i < this.slashNames.length; i++) {
      this.helpArr += this.slashNames[i];
      this.paths.push(this.helpArr);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.c-breadcrumbs {
  display: none;
  color: $black;

  @include breakpoint(desktop) {
    display: block;
    padding-top: 3.7rem;
  }

  & ul li {
    & a {
      @include fontSizeRem(0, 16);

      &::after {
        content: ">";
        display: inline-block;
        margin: 0 0.25rem;
      }

      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>