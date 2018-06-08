<template lang="html">
  <div class="c-tags-atlas">
      <div class="c-tags-atlas__inner">
          <h2 class='c-tags-atlas__title'>{{inicial}}</h2>
          <ul class='c-tags-atlas__list'>
              <li class='c-tags-atlas__index' v-for="(tag, index) in tagsList" :key='index'>
                  <a class='c-tags-atlas__link' href="#" >{{tag}}</a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

    props:['inicial', 'tagsList']
}
</script>

<style lang="scss">
@import '~assets/scss/settings';

.c-tags-atlas{
    margin-bottom: 4.6rem;
    padding: 0 6%;
    @include breakpoint(desktop){
        padding: 0;
        width: 21%;
        margin-bottom: 4.6rem;
    };

    &__title{
        font-family: 'Airways';
        @include fontSizeRem(38.67, 46);
        color:$sun-yellow;
    }

    &__list{
        margin-top: 1.7rem;
        @include breakpoint(desktop){
            margin-top: 1.7rem;
        }
    }
    &__index{
        margin-bottom: 1.3rem;
        @include breakpoint(desktop){
            margin-top: 0.65rem;
        }
    }
    &__link{
        @include fontSizeRem(16.40, 15);
        transition: color .18s ease;

        &:hover{
            color:$sun-yellow;
        }
    }

}
</style>
