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
let stuff = 9;
let newcompanies = companies;
let select=[];
// while(stuff>=0){
  // if(stuff>=10){
  //   let temp = companies.filter(x => x.amount === 10);
  //   select.push(temp[0]);
  //    newcompanies = companies.filter(x => x.amount !== 10);
  //   stuff=stuff-10;
  //   console.log(stuff,"stuff newcompanies after 10: ",newcompanies);
  //   console.log(select, " so far");
  // }
  // if(stuff >= 5){
  //   let temp1 = newcompanies.filter(x => x.amount === 2);
  //   let temp2 =(newcompanies.filter(x => x.amount === 3));
  //   select.push(temp1[0]);
  //   select.push(temp2[0]);
     
  
  // newcompanies = newcompanies.filter(x => x.amount !== 2);
  // newcompanies = newcompanies.filter(x => x.amount !== 3);
  // stuff = stuff-5;
  // console.log(stuff, "current stuff after 5 and the companies left: ", newcompanies);
  // console.log(select, "the select for companies so far");
  // }

checkMatches(newcompanies, stuff)


    function checkMatches(coss, amount){
      let half = amount/2;
      let prod = amount;
      let len = coss.length;
      console.log(half);

        //tryin to grab 4 digit combos
      for(let x= 0; x <coss.length; x++){
        console.log("trxng two and three")
          for(let j = x+1, n =len-1; n>j; n --){//this line was key in understanding and functionality. j is relational to x as z is to n, sort of see it all fit together.
            let z= n-1
            if(coss[x].amount + coss[j].amount + coss[z].amount + coss[n].amount === amount){
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

                       //tryin to grab 3 digit combos
      for(let x= 0; x <coss.length; x++){
        console.log("trxng two and three")
          for(let j = x+1, n =len-1; n>j; n --){
        
            if(coss[x].amount + coss[j].amount + coss[n].amount === amount){
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
       if(coss[i].amount + coss[n].amount === amount){
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
    
       if(coss[i].amount === amount){
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
   
   choices = choices.forEach(x => {
     console.log(x.total)
     if(x.total > most){
       choice = x;
       console.log(most)
     }
     
    })
   console.log(most,choice," choice");
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
    console.log(choice);
    console.log(select);
    return choice;
    
    }
   
