export function sortSliders(arr){
    //pass 'elements' property from asincData to get array of arrays with sliders
    let rArr = [];
    let temp = [];
    arr.map( (acc, cur) => {
      if( acc.type ==='slider_image'){
        temp.push(acc);
        return cur;
      }else{
        if(temp.length){
            rArr.push(temp);
          //console.log(rArr)
            temp = [];
            return cur;
        }else{
        return cur;
        }
      }
   });
   return rArr;
}
