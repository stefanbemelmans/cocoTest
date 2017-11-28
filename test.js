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
  let one = {
    thing:{name: 4, other: "toms"}
  }
  console.log(comps);
   let stuff = 8;
  let lastElem = comps.length-1;
  console.log(lastElem);
  let max=stuff;
  
  let choices = [];
  
  for(let i = lastElem; i >= 0; i --){
    console.log(max +"max")
    console.log(comps[i].amt)
    if(max >= comps[i].amt){
  
    max = max % comps[i].amt;
    choices.push(comps[i]);
    
    }
    
  }
  //I like to brute force first to ensure functionality then refactor later. 
    
  // if(stuff >= comps[lastElem].amt){
  //   max = stuff % comps[lastElem].amt;
  //   console.log( max +"left")
  //   choices.push(comps[lastElem]);
  //   console.log(choices)
  // }
   
   console.log(max+ "ii")
  
    
    console.log(choices,"iii");
    
