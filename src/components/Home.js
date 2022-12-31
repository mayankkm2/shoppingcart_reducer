import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import './style.css';
import Filters from "./Filter";


const Home = () => {
   const { state: {products} ,
           productState: { byStock , byfastDelivery,sort,  byRating, searchQuery },
         } = CartState();//destructured further

  //console.log(products);
const transformProducts = () => {
  let sortedProducts = products;
  
  if(sort) {
   sortedProducts= sortedProducts.sort((a,b) =>(
     sort === "lowToHigh" ? a.price - b.price :  b.price- a.price  //dat means its goin to be in ascending order ie puts a before b
   ));
  }
 
  if(!byStock) {//if bystock is false(for true, andar ni jayega)
   sortedProducts= sortedProducts.filter((prod) => prod.inStock);//if its false,its disply prod dat r currntly in state only
  }

  if(byfastDelivery) {
   sortedProducts= sortedProducts.filter((prod) => prod.fastDelivery);
  }

  if(byRating) {
   sortedProducts = sortedProducts.filter(
      (prod) => prod.ratings >= byRating
   );
  }

  if(searchQuery) {
   sortedProducts = sortedProducts.filter(
      (prod) => prod.name.toLowerCase().includes(searchQuery)
   );
  }

  return sortedProducts;
}

   return ( 
      <div className="home">
       <Filters/>
       <div className="productContainer">
         {transformProducts().map((prod) => {
            return <SingleProduct prod={prod} key={prod.id}/>
         })}
       </div>
      </div>
    ) 
}

export default Home;
// By using display flex in parent elements, child elements automatically align like columns or rows with auto width and auto height
//flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines