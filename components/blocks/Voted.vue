<template lang="html">
  <section class='b-voting main-wrapper'>
      <div class="inner-wrapper">
          <h2 class='b-voting__title'><span class='cursive'>RANKING</span><span class='bolder'>LIST</span></h2>
      </div>
      <div class="b-voted-cars inner-wrapper">
        <div class="b-voted__cars_list">
            <div class="c-car" v-for="(car,i) in cars" :key='i' :class="{'c-car__favorite':car.favorite}">
                <div class="c-car__image">
                    <img  class="u-only-mob" src="https://dummyimage.com/157x157/eb00eb/fff.jpg&text" >
                    <img  class="u-only-desktop" src="https://dummyimage.com/208x208/eb00eb/fff.jpg&text">
                </div>
                <div class="c-car__points">
                    <p>{{i + 1}}</p>
                </div>
            </div>
        </div>
    </div>
  </section>

</template>

<script>
export default {
    data(){
        return{
            cars:[
                {name:'Reno Klio', favorite:false },
                {name:'Reno Megan', favorite:true},
                {name:'Reno Laguna', favorite:false},
                {name:'Reno Kajar', favorite:false},
                {name:'Reno Capture', favorite:false},
            ],
        }
    }
}
</script>


<style scoped lang='scss'>
@import '~assets/scss/settings';
.b-voting{
    position:relative;
    padding-top:6.4rem;
    padding-bottom: 0;

    @include breakpoint(desktop){
        padding-top:5.1rem;
        padding-bottom: 19.6rem;
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
}

.b-voted-cars{
    padding-top: 1.4rem;
    @include breakpoint(desktop){
        padding-top: 5.6rem;
    }
}

.b-voted__cars_list{
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;

    @include breakpoint(desktop){

    }
}

.c-car{
    width:47%;
    position: relative;
    margin-bottom: 2.2rem;
    @include breakpoint(desktop){
        width: 18.7%;
        margin-bottom: 0;
    }
    & img{
        width: 100%;
    }

    &__points{
        position: absolute;
        bottom: 1rem;
        left: 1.5rem;
        font-family: 'Lato-Black';
        @include fontSizeRem(38,58);
        color:$sun-yellow;
        @include breakpoint(desktop){
            bottom: 1rem;
            left: 1.5rem;
        }
    }

    &__favorite{
        &::after{
            // content:#{$svgIcon};
            content:'';
            background: rgba(0,0,0,0.5)  no-repeat center;
            background-image: url('~/static/images/favorite.svg');
            background-size: 30%;
            position: absolute;
            text-align: center;
            margin: auto;
            top:0;
            left:0;
            right:0;
            bottom:0;
        }
    }
}

</style>
