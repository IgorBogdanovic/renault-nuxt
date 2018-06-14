<template lang="html">
  <section class='b-voting main-wrapper'>
      <app-voting/>
  </section>

</template>

<script>
import AppVoting from "@/components/blocks/Voting.vue"
export default {
    components:{
        AppVoting,
    }
}
</script>


<style scoped lang='scss'>
@import '~assets/scss/settings';
.b-voting{
    position:relative;
    padding-top:2.3rem;
    padding-bottom: 0;

    @include breakpoint(desktop){
        padding-top:3.6rem;
        padding-bottom: 7.6rem;
        background: $white-two;
    }
    &__title{
        @include breakpoint(desktop){

        }

        & .bolder{
            @include fontSizeRem(22, 32);
            font-family: 'Lato-Black';
            display: block;
        }
        & .cursive{
            @include fontSizeRem(25, 32);
            font-family: 'Airways';
        }
    }

    &__instructions{
        @include fontSizeRem(12,18);
        padding-top: 1.3rem;
        width: 78%;
        line-height: 1.42;
        @include breakpoint(desktop){
            line-height: 1.28;
            padding-top: 2.4rem;
            width: 36%;
        }
    }
}

</style>
