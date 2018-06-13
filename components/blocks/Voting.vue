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
      <button type="button" name="button" class='c-btn c-btn-submit-car-quiz'> SUBMIT</button>
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
            show:false,
            usedStars:[]
        }
    },

    computed:{
        button(){
            return this.cars.length == this.usedStars.length
        }
    },

    methods:{
        hoverStar(event){
            //cashing vars
            var star = event.target;
            var parent = star.parentNode;

            parent.childNodes.forEach((item,index)=>{
                if(index < parseInt(star.dataset.count) ){
                    //console.log(item);
                    //item.style.color = '#ffcc33';
                    item.classList.add('star__hover');
                }else{
                    item.classList.remove('star__hover');
                }
            });

            // if(star.classList.contains('c-car--unvoted') ){
            //     stars.childNodes.forEach((item,index)=>{
            //         if(index < this.voteCount){
            //             item.style.color = '#ffcc33';
            //         }
            //     });
            // }

            // console.log('Parent', parent);
            // console.log('EventTarget: ',star);
            // console.log('DATAcount: ',star.dataset.count);
            // console.log('Class List', star.classList);

        },

        unhoverStar(event){
            //cashing vars
            var stars = event.target;//in this case (UN-hover) event.target is .c-voting-stars

            stars.childNodes.forEach( (item,index)=>{
                item.classList.remove('star__hover');
            });
        },

        clickStar(event){
            //cashing vars
            var star = event.target;
            var voteCount  = parseInt(star.dataset.count);
            console.log(voteCount);
            var parent = star.parentNode;
            var clikedCar = parent.parentNode;
            var favoriteCar = document.querySelector('.c-car__favorite') || false;
            var parentData = parseInt(parent.dataset.rating);
            var parentIndex = this.usedStars.indexOf( parentData );
            console.log(favoriteCar);
            //console.log(parent,'\n', star,'\n',voteCount,'\n', this.usedStars,'\n', parentData);
            if(parentData != voteCount){
                //if not clicking on the same number of stars

                if( this.usedStars.indexOf( voteCount ) != -1 ){
                    //if in array
                    var itemToClear = document.querySelector('[data-rating = "'+voteCount+'"]');


                    if( parentData > 0 ){
                        var indexToClear = this.usedStars.indexOf(parentData);
                        this.usedStars.splice( indexToClear, 1);
                        parent.dataset.rating = voteCount;
                        console.log('in > 0');
                    }else{
                        parent.dataset.rating = voteCount;
                        console.log('in < 0');
                    }

                    //reset Item
                    itemToClear.dataset.rating = 0;
                    itemToClear.childNodes.forEach((item,index)=>{
                        item.classList.remove('star__rated');
                    })

                    //****** AUTO COMPLETE ( SWAP Logika ) ********
                    // itemToClear.childNodes.forEach((item,index)=>{
                    //     if(index < parseInt(itemToClear.dataset.rating)){
                    //         item.classList.add('star__rated');
                    //     }else{
                    //         item.classList.remove('star__rated');
                    //     }
                    // });

                }else{
                    if( parentData > 0 ){
                        var indexToClear = this.usedStars.indexOf(parentData);
                        this.usedStars.splice( indexToClear, 1);
                        parent.dataset.rating = voteCount;
                        this.usedStars.push( voteCount );
                        console.log('out > 0');
                    }else{
                        this.usedStars.push( voteCount );
                        parent.dataset.rating = voteCount;
                        console.log('out < 0');
                    }

                }


                parent.childNodes.forEach((item,index)=>{
                    if(index < voteCount ){
                        item.classList.remove('star__rated');
                        item.classList.add('star__rated');
                    }else{
                        item.classList.remove('star__rated');
                    }
                });

                //toggle submit button
                if(this.usedStars.length === 5){
                    document.querySelector('.c-btn-submit-car-quiz').style.display = 'block'
                }else{
                    document.querySelector('.c-btn-submit-car-quiz').style.display = 'none'
                }

                //mark Car as Favorite
                if(voteCount == 5){
                    if(favoriteCar){
                        favoriteCar.classList.remove('c-car__favorite')
                    }
                    clikedCar.classList.add('c-car__favorite')
                }
            }




            // if( this.usedStars.indexOf( voteCount ) != -1 ){
            //     //if User Voted with this Number of stars (clicked Number of stars)
            //     //find item that have same rate and clear it
            //     var itemToClear = document.querySelectorAll('[data-rating = "'+voteCount+'"]');
            //     itemToClear.dataset.rating = '0';
            //
            //     //ReAssign new rate to cliked element
            //     parent.dataset.rating = voteCount;
            //
            // }else{
            //     //Number of stars is  Available for Voting
            //     this.usedStars.push( voteCount );
            //     parent.dataset.rating = voteCount;
            //
            // }

            //add and remove rated class on clicked stars


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
        padding-bottom: 3.3rem;
        @include breakpoint(desktop){
            padding-bottom: 6.4rem;
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
                bottom:8.6rem;
                width:100%;
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
        bottom:4rem;
        bottom: 4.9rem;
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
            text-shadow: -1px 1px 0px silver;
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

    .c-btn-submit-car-quiz{
        display: none;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 2% 7.5%;
        @include breakpoint(desktop){
            bottom:3.6rem;
            padding: 0.8% 3.2%;
        }
    }
</style>
