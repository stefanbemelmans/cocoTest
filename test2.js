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

  let choices = [];
//alright, another change in direction. go with what you know. I got the loop with three iterators working
// the fourth one is elusive. I'm going to work it so the three is all I need. 
let stuff = 24;
let newcompanies = [];
// while(stuff>=0){
  if(stuff>=10){
     newcompanies = companies.filter(x => x.amount !== 10);
    stuff=stuff-10;
    console.log(stuff, newcompanies);
}
console.log(newcompanies, "newcompanies again")
checkMatches(newcompanies, stuff)


    function checkMatches(coss, amount){
      let half = amount/2;
      let prod = amount;
      let len = coss.length;
      console.log(half);

        //tryin to grab 3 digit combos
      for(let x= 0; x <coss.length; x++){
        console.log("trxng two and three")
          for(let j = x+1, n = coss.length-1; j<n; j++, n--){
            if(coss[x].amount + coss[j].amount + coss[n].amount === amount){
              console.log("yes")
              let sum =coss[x].price+ coss[j].price + coss[n].price;
              console.log(coss[x].price,coss[j].price,coss[n].price);
              choices.push({comp1:coss[x],
                            comp2:coss[j],
                            compe3: coss[n],
                            total:sum
                            }); 
                          }
                        }
                      }
  // xf(coss[x].amount + coss[y].amount === amoun t|| coss[j].amount +coss[k].amount===amount || coss[x].amount +coss[k].amount ===amount || coss[k].amount +coss[x].amount===amount){
    //      console.log("yes");))
         
 //trying for four iterators, no dice so far
      // for(let x= 0, y=coss.length-1; x<companies.length; x++, y--){
      //  for(let j = x+1, k=y-1; k<j; j++, k--){
      //    if(companies[x].amount + companies[y].amount + companies[j].amount +companies[k].amount === amount || companies[x].amount + companies[y].amount === half || companies[j].amount +companies[k].half || companies[x].amount +companies[k].amount ||companies[k].amount +companies[i].amount===half ){
      //      console.log("yes");
      //      let sum =companies[x].price + companies[j].price + companies[y].price;
      //      console.log(companies[x].price,companies[j].price,companies[n].price);
      //      choices.push({comp1:companies[i],
      //                   comp2:companies[j],
      //                   compe3: companies[n],
      //                   total:sum
      //    } )

      // 
   

      // for(let i= 0; i<companies.length; i++){
      //     for(let j= i+1, n = companies.length-1; j<n; j++, n--){
      //       if(companies[i].amount + companies[j].amount + companies[n].amount === amount){
      //         console.log("yes")
      //         let sum =companies[i].price+ companies[j].price + companies[n].price;
      //         console.log(companies[i].price,companies[j].price,companies[n].price);
      //         choices.push({comp1:companies[i],
      //                       comp2:companies[j],
      //                       compe3: companies[n],
      //                       total:sum
      //       } )
      //     }
      //     }
      //   }


    // for(let i= 0; i<companies.length; i++){
    //  for(let j= i+1, n = companies.length-1; j<n; j++, n--){
    //    if(companies[i].amount + companies[j].amount + companies[n].amount === amount){
    //      console.log("yes")
    //      let sum =companies[i].price+ companies[j].price + companies[n].price;
    //      console.log(companies[i].price,companies[j].price,companies[n].price);
    //      choices.push({comp1:companies[i],
    //                   comp2:companies[j],
    //                   compe3: companies[n],
    //                   total:sum
    //    } )
    //  }
    // }
    // }
  
// two digits
   for(let i= 0; i<companies.length; i++){
     for(let n = companies.length-1; n>i;  n--){
       if(companies[i].amount + companies[n].amount === amount){
         console.log("yes")
         console.log(companies[i],companies[n]);
         let sum = companies[i].price + companies[n].price; 
         choices.push({comp1:companies[i],
                      comp2:companies[n],
                      total:sum
         })
       }
     }
   }
   for(let i= 0; i<companies.length; i++){
    
       if(companies[i].amount === amount){
         console.log("yes")
         console.log(companies[i]);
        let sum = companies[i].price; 
         choices.push({comp1:companies[i],
                      total:sum
                      
       })
     }
   }
   
    console.log(choices, "unfiltered");
    
    let most =0;
    let choice;
   
   choice = choices.forEach(x => {
     console.log(x.total)
     if(x.total > most){
       most = x.total;
       console.log(most)
     }
      
   })
   console.log(most," choice");
  choice = choices.find(x => x.total === most)
  // choices.map(x => {
  //   x.reduce((a, b) => a + b.price);
  // })
    // for(let x = 0; x < choices.length; x ++) {
    //   console.log(choices[x]);
    //   for(let i = 0; i < choices.length; i++)
    //   if(choices[x].total + choices[x][i].price > most){
    //     most = choices[x][0].price + choices[x][1].price;
    //     choice = choices[x];
    //     console.log(most, "  most", choice, "  choice");
    //   } 
    
    return choice;
    }
   
