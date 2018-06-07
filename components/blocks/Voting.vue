<template lang="html">
  <section class="b-vote">
    <h2>Vote for Your cars</h2>
    <div class="b-vote__cars_list">
        <div class="c-car c-car--unvoted" id='1'>
            <div class="c-car__image">
                <img src="https://dummyimage.com/208x208/000/fff.jpg&text=Reno+Laguna" alt="">
            </div>
            <div class="c-voting-stars" id='01' data-rating='0' @mouseover="hoverStar" @mouseleave='unhoverStar' @click='clickStar'>
                <span v-for='(star, i) in cars' :key='i' :class='`star star${++i}`' :data-count='`${i+1}`'>{{'★'}}</span>
            </div>
        </div>
        <div class="c-car c-car--unvoted" id='2' >
            <div class="c-car__image">
                <img src="https://dummyimage.com/208x208/000/fff.jpg&text=Reno+Capture" alt="">
            </div>
            <div class="c-voting-stars" id='02' data-rating='0' @mouseover="hoverStar" @mouseleave='unhoverStar' @click='clickStar'>
                <span v-for='(star, i) in cars' :key='i' :class='`star star${++i}`' :data-count='`${i+1}`'>{{'★'}}</span>
            </div>
        </div>
        <div class="c-car c-car--unvoted" id='3'>
            <div class="c-car__image">
                <img src="https://dummyimage.com/208x208/000/fff.jpg&text=Reno+Clio" alt="">
            </div>
            <div class="c-voting-stars" id='03' data-rating='0' @mouseover="hoverStar" @mouseleave='unhoverStar' @click='clickStar'>
                <span v-for='(star, i) in cars' :key='i' :class='`star star${++i}`' :data-count='`${i+1}`'>{{'★'}}</span>
            </div>
        </div>
        <div class="c-car c-car--unvoted" id='4' >
            <div class="c-car__image">
                <img src="https://dummyimage.com/208x208/000/fff.jpg&text=Reno+Megan" alt="">
            </div>
            <div class="c-voting-stars" id='04' data-rating='0' @mouseover="hoverStar" @mouseleave='unhoverStar' @click='clickStar'>
                <span v-for='(star, i) in cars' :key='i' :class='`star star${++i}`' :data-count='`${i+1}`'>{{'★'}}</span>
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
                {name:'Reno Klio'},
                {name:'Reno Megan'},
                {name:'Reno Laguna'},
                {name:'Reno Laguna'},
            ],
            voteCount:1,
            hoverTarget:'',
            usedStars:[],
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
            var parent = star.parentNode;
            var parentData = parseInt(parent.dataset.rating);
            var parentIndex = this.usedStars.indexOf( parentData )

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
                console.log(this.usedStars);

                parent.childNodes.forEach((item,index)=>{
                    if(index < voteCount ){
                        item.classList.remove('star__rated');
                        item.classList.add('star__rated');
                    }else{
                        item.classList.remove('star__rated');
                    }
                });
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

    .b-vote__cars_list{
        display: flex;
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;
    }

    .c-car{
        &--unvoted{
            // &:hover{
            //     .star1{
            //         color:$sun-yellow;
            //     }
            // }
        }
    }

    .c-voting-stars{
        padding-top: 1.86rem;

        .star{
            transition:all 0.15s ease;
            padding-top: 2rem;
            font-size:3.5rem;
            color:white;
            text-shadow: -1px 1px 0px silver;
            fill:red;

            &__rated{
                color:$sun-yellow;
                animation-name: ScalingStar;
                animation-duration: 0.2s;
            }

            &__hover{
                color:#ffbf00;
                cursor:pointer;
            }
        }
        @keyframes ScalingStar {
            0%  {font-size:3.5rem;}
            60% {font-size:3.9rem;}
            100% {font-size:3.5rem;}
        }
    }
</style>
