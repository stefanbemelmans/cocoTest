/*just getting the wheels turning.*/

let comps = [
  { name: "A",
    amt: 1,
    price: 1
  },
  {
    name: "B",
    amt: 2,
    price: 5
    
  },
  {
    name: "C",
    amt: 3,
    price: 8
  },
  {
    name: "D",
    amt: 4,
    price: 9
  },
  
  {
    name: "E",
    amt: 5,
    price: 10
  },
  {
    name: "F",
    amt: 6,
    price: 17
  },
  {
    name: "G",
    amt: 7,
    price: 17
  },
  {
    name: "H",
    amt: 8,
    price: 20
  },
  {
    name: "I",
    amt: 9,
    price: 24
  },
  {
    name: "J",
    amt: 10,
    price: 30
  }
  ];
  
  // getting basic math down, thinking about the price comparisons 10's and 3 + 2 is more expensive than 5.
  //Also thinking about turning the comps array into an object. I've been reading about hashtables lately.
  // let one = {
  //   thing:{name: 4, other: "toms"}
  // }
  // console.log(comps);
  //  let stuff = 8;
  // let lastElem = comps.length-1;
  // console.log(lastElem);
  // let max=stuff;
  
  let choices = [];
  console.log(comps);
  function maxAmtValue(comps, stuff) {
    let compsVal = Array(stuff + 1).fill(0);
    //console.log(comps, stuff, compsVal)
    for (let curAmt= 0; curAmt <= stuff; curAmt++) {
      
      let bestPrice = 0;
      //console.log(curAmt, " current amount");
      comps.forEach(comp => {
        //console.log(comp);
        if (comp.amt <= curAmt) {
          
          // console.log(comp.amt +" amt,"+" curPrice: ", comp.price,"currentamt ",curAmt);
          // console.log(comps[[curAmt - comp.amt]], "current company value");
          
         
          let maxPrice = comp.price + compsVal[curAmt - comp.amt];
          
          //console.log(maxPrice,"max")
          bestPrice = Math.max(maxPrice, bestPrice );
        }
      });
      // console.log(bestPrice," bestPrice")
      // console.log(comps[curAmt], "hi");
      compsVal[curAmt] = bestPrice;
      // console.log(compsVal,"compsVal" );
    }
    return compsVal[stuff];
  }
  
  console.log(maxAmtValue(comps, 12)+"checkit");
  let price = maxAmtValue(comps, 12);

   for(let i= 0; i<comps.length; i++){
    for(let j= i+1, n = comps.length-1; j<n; j++, n--){
      if(comps[i].price + comps[j].price +comps[n].price <= price && comps[i].amt + comps[j].amt + comps[n].amt === 12){
        console.log("yes")
        console.log(comps[i].price,comps[j].price,comps[n].price);
        choices.push([comps[i],comps[j],comps[n]]);
      }
    }
  }
  
  for(let i= 0; i<comps.length; i++){
    for(let n = comps.length-1; n>i;  n--){
      if(comps[i].price +comps[n].price <= price && comps[i].amt + comps[n].amt === 12){
        console.log("yes")
        console.log(comps[i],comps[n]);
        choices.push([comps[i],comps[n]]);
      }
    }
  }
  
   

   console.log(choices, "unfiltered");

   let most =0;
   let choice;
   for(let x = 0; x < choices.length; x ++) {
     if(choices[x][0].price + choices[x][1].price > most){
       most = choices[x][0].price + choices[x][1].price;
       choice = choices[x];
       console.log(most, "  most", choice, "  choice");
     } 
   }

    // let amount = compsVal[stuff];
    // choice.filter(x => )
    //knew the right company had to be somwhere,
    //think i have it, just need to filter and reduce...
    //don't have it...need more falling back and regrouping.
    
  //   choices.sort();
  //   console.log(choices," sort")
    
  //  let fewChoices = choices.filter(x => x);
      
  //   fewChoices = fewChoices.filter(x => x.amt<= stuff)
  //   console.log(fewChoices, " filtered");
  //   let fewerChoices = fewChoices.sort(); 
  //   let newAr = [];
  //   for(let i = 0; i< fewerChoices.length; i ++){
    
  //     if(newAr.includes(fewerChoices[i])===false){
  //       newAr.push(fewerChoices[i]);
  //     }
  //   }
      // } fewChoices.filter(x =>{
      
    // if(!fewerChoices.includes(x)){
    // return x; 
    // }
    // });
    //console.log(fewerChoices, " fewerChoices");
    //console.log(newAr," newar")
  
//got the number of highest price, now to determine what companies paid,
// and thinking i can do it all in one fell swoop without the initial function. 

  // for(let i= 0; i<comps.length; i++){
  //   for(let j= i+1, n = comps.length-1; j<n; j++, n--){
  //     if(comps[i].price + comps[j].price +comps[n].price === price){
  //       console.log("yes")
  //       console.log(comps[i],comps[j],comps[n]);
  //       choices.push(comps[i],comps[j],comps[n]);
  //     }
  //   }
  // }



  // for(let i= 0, n=comps.length-1; i<comps.length/2; n--, i++){
  //   let j= i+1;
  //   for(let k = 0; k<)
  //   if(comps[i].price + comps[j].price +comps[n].price === price){
  //     console.log("yes")
  //     console.log(comps[i],comps[j],comps[n]);
  //   choices.push(comps[i],comps[j],comps[n]);
      
  //   }}

//     if (choices.length===0){
//     for(let i= 0, n=comps.length-1; i< comps.length; n--, i++){
      
//       //let n= comps.length-1;
//       if(comps[i].price + +comps[n].price === price){
//         console.log("yes")
//         console.log(comps[i],comps[n]);
//       choices.push(comps[i],comps[n]);
        
//       }
//     }
//   }
  
// console.log(choices,"  choices new");

// This is a great learning experience, I always start with methods similar to below, 
// knowing in my head that there is a more better way to represent it
// but am unable to put my finger on it exactly. Then I get all turned around in nested and dependant for-loops and take a step back. 
// I've often found that overthinking is my worst enemy when working on a solution.   
// I looked for reference and came across "https://repl.it/@ianaandrychowicz/cake-thief"
// which was essentially exactly what I was thinking about. 

  // for(let i = lastElem; i >= 0; i --){
  //   console.log(max +"max")
  //   console.log(comps[i].amt)
  //   if(max >= comps[i].amt){
  
  //   max = max % comps[i].amt;
  //   choices.push(comps[i]);
    
  //   }
    
  // }

  //insight at 4am, starting to get a little turned around. Need to fallback and regroup
//   if(max < 10){
//     if( max % 2 === 0  ){
    
//       let total = 0;
      
//      for(let i = 1; i <= filComps.length /2; i++){
//        if(filComps[i].amt + filComps[i+1].amt <= max){
//          console.log("middle of the function");
//          filComps2.push({comp: filComps[i],
//                        comp2: filComps[i+1],
//                        total: filComps[i].amt + filComps[i+1].amt,
//                        totPrice: filComps[i].price + filComps[i+1].price
                         
//          })
//    }
//  }
//     }
//   }
//    console.log(filComps2, "filComps2")
//    for(let i = 0; i < filComps.length/2; i++){
//      for(let j = filComps.length-1; j > i; j--){
//         if(filComps[i].amt + filComps[j].amt === max){
//           choices.push({comp: filComps[i],
//                        comp2: filComps[j],
//                        total: filComps[i].amt + filComps[j].amt,
//                        totPrice: filComps[i].price + filComps[j].price
                         
                         
//           })
       
//      }
//      }
//    }
  //I like to brute force first to ensure functionality then refactor later. 
    
  // if(stuff >= comps[lastElem].amt){
  //   max = stuff % comps[lastElem].amt;
  //   console.log( max +"left")
  //   choices.push(comps[lastElem]);
  //   console.log(choices)
  // }
   
  //  console.log(max+ "ii")
  
    
  //   console.log(choices,"iii");
    
