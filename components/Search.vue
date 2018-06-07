<template>
  <div class="b-search full-width-wrapper">
    <div class="b-search__close" @click="deactivateSearch">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
        <g>
          <g id="close">
            <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
              214.2,178.5 		"/>
          </g>
        </g>
      </svg>
    </div>
    <form action="">
      <div class="b-search__form-wrapper">
        <input type="text" v-model="inputSearch" @blur="$v.fullname.$touch()">
        <button :class="{'is-valid': !$v.inputSearch.$invalid}" :disabled="$v.$invalid">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
            <path d="M325.606,304.394L223.328,202.117c16.707-21.256,26.683-48.041,26.683-77.111C250.011,56.077,193.934,0,125.005,0
              C56.077,0,0,56.077,0,125.006C0,193.933,56.077,250.01,125.005,250.01c29.07,0,55.855-9.975,77.11-26.681l102.278,102.277
              C307.322,328.536,311.161,330,315,330s7.678-1.464,10.606-4.394C331.465,319.749,331.465,310.251,325.606,304.394z M30,125.006
              C30,72.619,72.619,30,125.005,30c52.387,0,95.006,42.619,95.006,95.005c0,52.386-42.619,95.004-95.006,95.004
              C72.619,220.01,30,177.391,30,125.006z"/>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  props: ['searchState'],
  data () {
    return {
      inputSearch: ''
    }
  },
  validations: {
    inputSearch: {
      required
    }
  },
  methods: {
    deactivateSearch() {
      this.$emit('deactivateSearch');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-search {
  display: none;
  z-index: 11;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba($black-45, 0.85);

  &.is-active {
    display: block;
  }

  &__close {
    cursor: pointer;
    fill: #fff;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    width: 2rem;
    height: 2rem;

    @include breakpoint(desktop) {
      top: 3.5rem;
      right: 4rem;
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  form {
    position: absolute;
    top: 35%;
    transform: translateY(-35%);
    width: 100%;

    @include breakpoint(desktop) {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__form-wrapper {
    width: 90%;
    margin: 0 auto;

    @include breakpoint(desktop) {
      width: 70%;
    }
  }

  input {
    font-family: 'Lato-Black';
    @include fontSizeRem(24, 68);
    @include lineHeightRem(42, 42);
    @include letterSpacingEm(0, 0);
    color: $white;
    background: none;
    border: none;
    border-bottom: 1px solid $white;
    width: 90%;
  }

  button {
    background: none;
    fill: $warm-grey;
    width: 2.5rem;
    height: 2.5rem;

    &.is-valid {
      fill: $white;
    }

    &[disabled],
    &[disabled]:hover,
    &[disabled]:active {
      cursor: not-allowed;
    }

    @include breakpoint(desktop) {
      width: 6.3rem;
      height: 6.3rem;
    }
  }
}
</style>
