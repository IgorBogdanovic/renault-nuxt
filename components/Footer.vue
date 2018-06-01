<template>
<footer class="footer">
   <img src="~static/logo-footer.png" alt="logo" class="footer__img">
   <ul>
       <li v-for="(link, index) in links" :key="index" class="footer__link text--center text--bolder"> 
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
          url: "http://www.google.com",
          title: "modern slavery act statement"
          },{
          url: "http://www.renault.com",
          title: "personal data protection"
          },{
          url: "http://www.something.com",
          title: "corporate site"
          },{
          url: "http://www.bla.com",
          title: "all the tags"
          },{
          url: "http://www.google.com",
          title: "careers"
          },{
          url: "http://www.google.com",
          title: "press"
          },{
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

.text--bolder {
  font-family: 'Lato-Bold';
}

// Kraj globalnih klasa. //

////////////////////////////////
///////  Ko Rano Rani   ///////
/////// Dve Srece Grabi //////
/////// Novine I 500 Eura ///
////// Maznuh Nekoj Babi ///
///////////////////////////

.footer {

  @include breakpoint(desktop) {

  }

  &__img {
    margin: 3rem auto;
    width: 12.5rem;
    height: 5.1rem;
    object-fit: contain;
  }

  &__link {
    color: $warm-grey;
    font-size: 1rem;
    margin: 1rem auto;
    text-transform: uppercase;
      @include breakpoint(desktop) {
        display: inline-block;
        margin: 3.3rem 1.2rem;
    }
  }

}
</style>