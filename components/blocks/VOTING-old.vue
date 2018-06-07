<template lang="html">
    <section class="b-vote">
      <h2>Vote for Your cars</h2>
      <div class="b-vote__cars_list">
          <app-car v-for="(car,i) in cars" :carList='cars' :car='cars[i]' :key='i'></app-car>
      </div>
  </section>
</template>

<script>
import AppCar from "@/components/voting/Car.vue"

export default {
    props:['carList', 'car'],
    usedStars:[],

    components:{
        AppCar
    },
    data(){
        return{
            cars:[
                {name:'Reno Klio'},
                {name:'Reno Megan'},
                {name:'Reno Laguna'},
                {name:'Reno Kangu'},
            ]
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
                var parentIndex = this.usedStars.indexOf( parentData );

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
            }
        }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

    .b-vote{
        &__cars_list{
            display: flex;
            width: 80%;
            margin: 0 auto;
            justify-content: space-between;
        }
    }
</style>
