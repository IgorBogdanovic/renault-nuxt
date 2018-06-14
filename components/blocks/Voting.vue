<template lang="html">
    <div class="b-vote-quiz inner-wrapper">
      <div class="b-vote__cars_list">
          <div class="c-car" v-for="(car,i) in cars" :key='i'>
              <div class="c-car__image">
                  <img src="https://dummyimage.com/308x308/eb00eb/fff.jpg&text" alt="">
              </div>
              <div class="c-voting-stars" data-rating='0' @mouseover="hoverStar" @mouseleave='unhoverStar' @click='clickStar'>
                  <span v-for='(star, i) in cars' :key='i' class='star' :data-count='`${i+1}`'>{{'★'}}</span>
              </div>
          </div>
      </div>
      <button type="button" name="button" class='c-btn c-btn--submit-car-quiz c-btn c-btn--disabled' disabled > SUBMIT</button>
  </div>

</template>

<script>
export default {
    data(){
        return{
            cars:[
                {name:'Reno Klio'},
                {name:'Reno Megan'},
                {name:'Reno Laguna'},
                {name:'Reno Kajar'},
                {name:'Reno Capture'},
            ],
            usedStars:[]
        }
    },

    methods:{
        hoverStar(event){
            //cashing vars
            var star = event.target;
            var parent = star.parentNode;

            parent.childNodes.forEach((item,index)=>{
                if(index < parseInt(star.dataset.count) ){
                    item.classList.add('star__hover');
                }else{
                    item.classList.remove('star__hover');
                }
            });
        },

        unhoverStar(event){
            //cashing vars
            var stars = event.target;
            stars.childNodes.forEach( (item,index)=>{
                item.classList.remove('star__hover');
            });
        },

        clickStar(event){
            //cashing vars
            var star = event.target; //clicked star
            var voteCount  = parseInt(star.dataset.count); //number of points on clicked star
            var parent = star.parentNode; //parent node that wraps all stras for rating
            var clikedCar = parent.parentNode; //div that holds image and rating system
            var favoriteCar = document.querySelector('.c-car__favorite') || false; //if we have car with max number of stars
            var parentData = parseInt(parent.dataset.rating);//number of points assigned to car
            var parentIndex = this.usedStars.indexOf( parentData ); //for tracking in usedStars array
            var submitBtn   = document.querySelector('.c-btn--submit-car-quiz');//submit button

            //if not clicking on the number of stars already assigned to car
            if(parentData != voteCount){
                if( this.usedStars.indexOf( voteCount ) != -1 ){
                    //if already voted with this num of points
                    var itemToClear = document.querySelector('[data-rating = "'+voteCount+'"]');

                    if( parentData > 0 ){
                        //and if cliked item HAS VOTING points
                        var indexToClear = this.usedStars.indexOf(parentData);
                        this.usedStars.splice( indexToClear, 1);
                        parent.dataset.rating = voteCount;
                    }else{
                        //or if cliked item HAS NO VOTING points
                        parent.dataset.rating = voteCount;
                    }

                    //Reset Item to 0 stars
                    itemToClear.dataset.rating = 0;
                    itemToClear.childNodes.forEach((item,index)=>{
                        item.classList.remove('star__rated');
                    })

                }else{
                    //if used did NOT vote with this num of points
                    if( parentData > 0 ){
                        //and if cliked item HAS VOTING points
                        var indexToClear = this.usedStars.indexOf(parentData);
                        this.usedStars.splice( indexToClear, 1);
                        parent.dataset.rating = voteCount;
                        this.usedStars.push( voteCount );
                    }else{
                        //or if cliked item HAS NO VOTING points
                        this.usedStars.push( voteCount );
                        parent.dataset.rating = voteCount;
                    }
                }

                //toggle Classes on rated item
                parent.childNodes.forEach((item,index)=>{
                    if(index < voteCount ){
                        item.classList.remove('star__rated');
                        item.classList.add('star__rated');
                    }else{
                        item.classList.remove('star__rated');
                    }
                });

                //toggle submit button
                if(this.usedStars.length === this.cars.length ){
                    submitBtn.classList.remove('c-btn--disabled');
                    submitBtn.removeAttribute("disabled")
                }else{
                    submitBtn.classList.add('c-btn--disabled');
                    submitBtn.disabled = true;
                }

                //mark Car as Favorite
                if(voteCount == this.cars.length ){
                    if(favoriteCar){
                        favoriteCar.classList.remove('c-car__favorite')
                    }
                    clikedCar.classList.add('c-car__favorite')
                }else{
                    if( parentData == this.cars.length){
                        favoriteCar.classList.remove('c-car__favorite')
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";
    .b-vote-quiz{
        padding-top: 1.4rem;
        @include breakpoint(desktop){
            padding-top: 2.4rem;
        }
    }

    .b-vote__cars_list{
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
        padding-bottom: 8.6rem;
        @include breakpoint(desktop){
            width: 18.7%;
            padding-bottom: 3.4rem;
        }
        & img{
            width: 100%;
        }

        &__favorite{
            &::after{
                // content:#{$svgIcon};
                content:'';
                background: rgba(0,0,0,0.5)  no-repeat center;
                background-image: url('~/static/images/favorite.svg');
                background-size: 33%;
                position: absolute;
                text-align: center;
                margin: auto;
                top:0;
                left:0;
                right:0;
                bottom:8.6rem;

                @include breakpoint(desktop){
                    top:0;
                    bottom:3.4rem;
                }
            }
        }
    }

    .c-voting-stars{
        text-align: center;
        position: absolute;
        width: 100%;
        bottom: 4.7rem;
        display: flex;
        padding: 0px 3%;
        justify-content: space-between;
        @include breakpoint(desktop){
            display: block;
            bottom:0;
        }

        .star{

            transition:all 0.15s ease;
            padding:0 0.22rem;
            @include fontSizeRem(23, 25)
            color:$white;
             -webkit-text-stroke: 1px silver;
             @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
                 //IE 11 fallBack
                 text-shadow:-1px 1px 0px silver;
              }
            @include breakpoint(desktop){
                color:$white-two;
            }

            &__rated{
                color:$sun-yellow;
                animation-name: ScalingStarMob;
                animation-duration: 0.2s;
                @include breakpoint(desktop){
                    animation-name: ScalingStarDesk;
                }
            }


            &__hover{
                color:#ffbf00;
                cursor:pointer;
            }
        }
        @keyframes ScalingStarDesk {
            0%  {font-size:2.5rem;}
            60% {font-size:2.7rem;}
            100% {font-size:2.5rem;}
        }
        @keyframes ScalingStarMob {
            0%  {font-size:2.3rem;}
            60% {font-size:2rem;}
            100% {font-size:2.3rem;}
        }
    }
</style>
