import { useEffect, useState } from "react";
import api from "../services/api";
import FoodCard from "../components/FoodCard";
import FoodBanner from "../components/FoodBanner";


function Foods(){

const [foods,setFoods]=useState([]);

const [search,setSearch]=useState("");

const [category,setCategory]=useState("All");

const [price,setPrice]=useState("All");

const [sort,setSort]=useState("");


useEffect(()=>{

getFoods();

},[]);



async function getFoods(){

try{

const res=await api.get("/foods");

setFoods(res.data);

}

catch(error){

console.log(error);

}

}



const filteredFoods =
foods.filter(food=>{


const searchMatch =
food.name
.toLowerCase()
.includes(
search.toLowerCase()
);



const categoryMatch =
category==="All" ||
food.category===category;



const priceMatch =
price==="All" ||
food.priceRange===price;



return(
searchMatch &&
categoryMatch &&
priceMatch
);


});



let finalFoods=[
...filteredFoods
];



if(sort==="high"){

finalFoods.sort(
(a,b)=>b.rating-a.rating
);

}



if(sort==="low"){

finalFoods.sort(
(a,b)=>a.rating-b.rating
);

}



return(

<>

<h1>
Veg Foods
</h1>


<FoodBanner />

<div className="filters">


<input

type="text"

placeholder="Search Food"

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

/>



<select

value={category}

onChange={(e)=>
setCategory(e.target.value)
}

>

<option>
All
</option>

<option>
Indian
</option>

<option>
Chinese
</option>

<option>
South Indian
</option>

<option>
Italian
</option>


</select>



<select

value={price}

onChange={(e)=>
setPrice(e.target.value)
}

>

<option>
All
</option>

<option>
Low
</option>

<option>
Medium
</option>

<option>
High
</option>


</select>



<select

value={sort}

onChange={(e)=>
setSort(e.target.value)
}

>


<option value="">
Sort Rating
</option>


<option value="high">
High To Low
</option>


<option value="low">
Low To High
</option>


</select>



</div>




<div className="foods">


{

finalFoods.map(food=>(


<FoodCard

key={food.id}

food={food}

/>


))


}


</div>


</>

);


}


export default Foods;