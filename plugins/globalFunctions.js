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
};

export function sortArrayByAlphabet(arr){
    //pass array with alphabeticaly sorted strings, to get array of arrays with same letters
     var rArr = [];
     var temp = [];

     arr.reduce( function(acc, cur, index){
       if(acc[0] === cur[0]){
         temp.push(cur)
         return cur
       }else{
         rArr.push(temp);
         temp = [];
         temp.push(cur)
         if(index === arr.length - 1){
           rArr.push(temp);
         }
         return cur
       }
     }, 0);
     return rArr.splice(1);
 };

 export function cleanData(arr){
  var rArr = [];
  var count = 0;

  arr.forEach( (item, i)=>{

    if( item.type ==='slider_image'){
        console.log('sliderIMG')
      	if(count == 0 ){
         rArr.push(item)
         count ++;
        }
      }else{
        rArr.push(item);
        count = 0;
      }
  })
  return rArr;
}

export function introCut(text, charAllowed) {
  //trim text to 'charAllowed' number of characters
  if (text.length > charAllowed) {
      var textCuted = text.slice(0, charAllowed);
  } else return text;

  const wordsArray = textCuted.split(" ");
  wordsArray.pop();
  var textShort = "";
  for (let word of wordsArray) {
      textShort += word + " ";
  }   
  return textShort + "...";
}
