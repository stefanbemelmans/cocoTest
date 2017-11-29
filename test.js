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
  console.log(comps);
   let stuff = 8;
  let lastElem = comps.length-1;
  console.log(lastElem);
  let max=stuff;
  
  let choices = [];
  
  function maxAmtValue(comps, stuff) {
    let curMaxVal = Array(stuff + 1).fill(0);
    console.log(comps, stuff, maxCompVal)
    for (let curAmt= 0; curAmt <= stuff; curAmt++) {
      
      let maxValue = 0;
      
      comps.forEach(comp => {
        console.log(comp);
        if (comp.amt <= curAmt) {
          console.log(comp.amt +" amt, curcap: "+ curAmt)
          
          let max = comp.price + maxCompVal[curAmt - comp.amt];
          
          console.log(max,"max")
          maxValue = Math.max(max, maxValue);
        }
      });
      
      maxCompVal[curAmt] = maxValue;
      console.log(maxCompVal,"maxCompVal" );
    }
    
    return maxCompVal[max];
  }
  
  console.log(maxAmtValue(comps, 15)+"checkit");

// This is a great learning experience, I always start with methods similar to below, 
// knowing in my head that there is a more better way to represent it
// but am unable to put my finger on it exactly. Then I get all turned around in nested and dependant for-loops and take a step back. 
// I've often found that overthinking is my worst enemy when working on a solution.   
// I looked for reference and came across "https://repl.it/@ianaandrychowicz/cake-thief--reference"
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
    
