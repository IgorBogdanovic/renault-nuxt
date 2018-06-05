<template lang="html">
  <section class="b-vote">
    <h2>Vote for Your cars</h2>
    <div class="b-vote__cars_list">
        <div class="c-car c-car--unvoted" id='1' @mouseover="hoverParent" @mouseleave='leaveParent'>
            <div class="c-car__image">
                <img src="https://dummyimage.com/208x208/000/fff.jpg&text=Reno+Laguna" alt="">
            </div>
            <div class="c-voting-stars" id='01'>
                <span v-for='(star, i) in marks' :key='i' :class='`star${++i}`'>{{'★'}}</span>
            </div>
        </div>
        <div class="c-car c-car--unvoted" id='2' @click='rateMe' @mouseover="hoverParent" @mouseleave='leaveParent' >
            <div class="c-car__image">
                <img src="https://dummyimage.com/208x208/000/fff.jpg&text=Reno+Capture" alt="">
            </div>
            <div class="c-voting-stars" id='02'>
                <span v-for='(star, i) in marks' :key='i' :class='`star${++i}`'>{{'★'}}</span>
            </div>
        </div>
        <div class="c-car c-car--unvoted" id='3' @mouseover="hoverParent" @mouseleave='leaveParent'>
            <div class="c-car__image">
                <img src="https://dummyimage.com/208x208/000/fff.jpg&text=Reno+Clio" alt="">
            </div>
            <div class="c-voting-stars" id='03'>
                <span v-for='(star, i) in marks' :key='i' :class='`star${++i}`'>{{'★'}}</span>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            stars:[3],
            marks:[1,2,3],
            hoverTarget:'',

        }
    },

    methods:{
        rateMe(event){
            console.log(event.target);
        },
        hoverParent(event){

            var parent = event.target.closest(".c-car").querySelector('.c-voting-stars');
            parent.childNodes.forEach((item,index)=>{
                if(index<2){
                    item.style.color = 'blue';
                }
            })
            //parent.childNodes[1].style.color = 'blue';

        },

        leaveParent(event){
            var parent = event.target.closest(".c-car").querySelector('.c-voting-stars');
            parent.childNodes.forEach((item,index)=>{
                if(index<2){
                    item.style.color = 'silver';
                }
            })
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
            &:hover{
                .star1{
                    color:$sun-yellow;
                }
            }
        }
        & span{
            transition:all 0.3s ease;
            padding-top: 2rem;
            font-size:3.5rem;
            //color:$sun-yellow;
            color:silver;
        }
    }
</style>
