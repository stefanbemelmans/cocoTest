let companies = [
  { name: "A",
    amount: 1,
    price: 1
  },
  {
    name: "B",
    amount: 2,
    price: 5
    
  },
  {
    name: "C",
    amount: 3,
    price: 8
  },
  {
    name: "D",
    amount: 4,
    price: 9
  },
  
  {
    name: "E",
    amount: 5,
    price: 10
  },
  {
    name: "F",
    amount: 6,
    price: 17
  },
  {
    name: "G",
    amount: 7,
    price: 17
  },
  {
    name: "H",
    amount: 8,
    price: 20
  },
  {
    name: "I",
    amount: 9,
    price: 24
  },
  {
    name: "J",
    amount: 10,
    price: 30
  }
  ];
  let newResults;
  let choices = [];
  let stuff = 22; //change this to test
let newcompanies = companies;
let select=[];

//tried to make a functional page but ran out of time, still working on it after the fact.
// document.getElementById("amount").onclick = runIt;

// function runIt(e) {
  
//   stuff = document.getElementById("number").value;
  
//   let results = checkMatches(newcompanies, stuff);
 
  
//   for(let result in results){
//     console.log(result);
//       console.log(Object.values(result));
//     }
//   newResults = JSON.stringify(results, null, 4); // (Optional) beautiful indented output.*stackoverflow*
//  console.log(newResults); 
    
//   };

//   document.getElementById('results').innerHTML= newResults;
 
  

checkMatches(newcompanies, stuff)


    function checkMatches(coss, goods){
      let half = amount/2;
      let prod = amount;
      let len = coss.length;
      console.log(half);
//I know there is optimization to be done.
        //tryin to grab 4 digit combos
      for(let x= 0; x <coss.length; x++){
        console.log("trxng two and three")// need to fix z overlap
          for(let j = x+1, n =len-1; n>j; n --){//this line was key in understanding and functionality. j is relational to x as z is to n, sort of see it all fit together.
            let z= n-1
            if(coss[x].amount + coss[j].amount + coss[z].amount + coss[n].amount === goods){
              console.log("yesfor4")
              let sum = coss[x].price + coss[j].price + coss[n].price + coss[n-1].price;
              console.log(coss[x].price,coss[j].price,coss[n].price);
              choices.push({comp1:coss[x],
                            comp2:coss[j],
                            comp3:coss[n],
                            comp4:coss[z],
                            total:sum
                            }); 
                          }
                          
                        }
                      }
           //tryin to grab 3 digit combos
      for(let x= 0; x <coss.length; x++){
        console.log("trxng two and three")
          for(let j = x+1, n =len-1; n>j; n --){
        
            if(coss[x].amount + coss[j].amount + coss[n].amount === goods){
              console.log("yesfor4")
              let sum = coss[x].price + coss[j].price + coss[n].price + coss[n-1].price;
              console.log(coss[x].price,coss[j].price,coss[n].price);
              choices.push({comp1:coss[x],
                            comp2:coss[j],
                            comp3:coss[n],
                            
                            total:sum
                            }); 
                          }
                          
                        }
                      }

   for(let i= 0; i<coss.length; i++){
     for(let n = coss.length-1; n>i;  n--){
       if(coss[i].amount + coss[n].amount === goods){
         console.log("yes")
         console.log(coss[i],coss[n]);
         let sum = coss[i].price + coss[n].price; 
         choices.push({comp1:coss[i],
                      comp2:coss[n],
                      total:sum
         })
       }
     }
   }
   for(let i= 0; i<coss.length; i++){
    
       if(coss[i].amount === goods){
         console.log("yes")
         console.log(coss[i]);
        let sum = coss[i].price; 
         choices.push({comp1:coss[i],
                      total:sum
                      
       })
     }
   }
   
    console.log(choices, "unfiltered");
    
    let most =0;
    let choice;
   
   let highest = choices.filter(x => {
     console.log(x.total)
     if(x.total > most){
       most = x.total;
       choice = x;
       console.log(most)
     }
     
    })
   console.log(most,choice," choice");
 
    console.log(choice);
    console.log(highest);
    return choice;
    
    }
   