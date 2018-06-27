<template>
  <footer class="b-footer">
    <img src="~static/images/logo-footer.png" alt="logo" class="b-footer__img">
    <ul>
      <li v-for="(link, index) in links" :key="index" class="b-footer__link text--center text--bolder">
        <a :href="link.url" target="_blank"> {{ ++index }}: {{ link.title }} </a>
      </li>
    </ul>

  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          url: "localhost:3000",
          title: "modern slavery act statement"
        },
        {
          url: "http://www.renault.com",
          title: "personal data protection"
        },
        {
          url: "http://www.something.com",
          title: "corporate site"
        },
        {
          url: "http://www.bla.com",
          title: "all the tags"
        },
        {
          url: "http://www.google.com",
          title: "careers"
        },
        {
          url: "http://www.google.com",
          title: "press"
        },
        {
          url: "http://www.google.com",
          title: "Ⓒ	renault 2017"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

// Ovo moze da bude deklarisano globalno kao base klasa koju pozivamo po potrebi

.text--center {
  text-align: center;
}

// Kraj globalnih klasa. //

///////////////////////////
/// Individual classes ///
/////////////////////////

.b-footer {
  text-align: center;

  &__img {
    margin: 0 auto 3.3rem;
    width: 12.5rem;
    height: 5.1rem;
    object-fit: contain;
    @include breakpoint(desktop) {
      margin-bottom: 0;
    }
  }

  &__link {
    color: $warm-grey;
    font-size: 1rem;
    margin: 1.3rem auto;
    text-transform: uppercase;
    @include breakpoint(desktop) {
      display: inline-block;
      margin: 3.3rem 1.2rem;
    }
  }
}
</style>