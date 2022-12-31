import { Button , Form} from 'react-bootstrap';
//import { useState } from 'react';
import Rating from './Rating'; 
import { CartState } from '../context/Context';

const Filters = () => {
   //const [rate, setRate] = useState(2);//wen we clik ie shld chang d rate
   const {
    productState: { byStock , byfastDelivery,sort,  byRating, searchQuery },
    productDispatch
          }= CartState(); 

   //console.log(productState);
   //console.log(byStock , byfastDelivery, byRating,sort, searchQuery );
    return(
      <div className="filters">
        <span className="title">Filter products </span>
        <span>
          <Form.Check
          inline
          label='Ascending'
          name='group1'
          type='radio'
          id={'inline-1'}
          onChange={() => 
            productDispatch({
             type: "SORT_BY_PRICE",
             payload: "lowToHigh",
            })
         } checked={ sort === "lowToHigh"? true : false}

          />
        </span>
        <span>
          <Form.Check
          inline
          label='Descending'
          name='group1'
          type='radio'
          id={'inline-2'}
          onChange={() => 
            productDispatch({
             type: "SORT_BY_PRICE",
             payload: "highToLow",
            })
         } checked={ sort === "highToLow"? true : false}
          />
        </span>
        <span>
          <Form.Check
          inline
          label='Include Out of Stock'
          name='group1'
          type='checkbox'
          id={'inline-3'}
          onChange={() => 
            productDispatch({
             type: "FILTER_BY_STOCK", 
            })
         } 
         checked={ byStock}
          />
        </span>
        <span>
          <Form.Check
          inline
          label='Fast Delivery Only'
          name='group1'
          type='checkbox'
          id={'inline-4'}
          onChange={() => 
            productDispatch({
             type: "FILTER_BY_DELIVERY", 
            })
         } 
         checked={ byfastDelivery}
          />
        </span>

        <span> 
           <label style={{paddingRight :10}}>Rating:</label> 
           <Rating 
           rating={byRating} 
           onClick={(i) => 
             productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
             })
          } 
          style={{cursor: "pointer"}}/>
        </span>

       <Button
        variant="light"
         onClick={()=> 
          productDispatch({
            type: "CLEAR_FILTERS",
            
           })
         
         }>Clear Filter</Button>
      </div>
   ) 
}

export default Filters;
//Group checkboxes or radios on the same horizontal row by adding the inline prop.
//for radio grp wid same name,only 1 will be active
//Rating=line50-onlick here is recieving 'i' comp.#2