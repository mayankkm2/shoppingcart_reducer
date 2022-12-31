import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const Rating = ({rating, onClick, style}) => {//importin state
    return( //takin empty array of 5 val//check d ratin for every iteration
     <>
    
      { [...Array(5)].map((_,i) => ( //'i' is current index//here onclick will be sending 'i' compnnt#1
         <span key={i} onClick={() => onClick(i)} style={style}> 
            { rating > i ? (//if ratin > curr index , its goin to render filled icon //inside onclick ll be comin frm parent comp
                <AiFillStar fontSize='15px'/>
            ): (
                <AiOutlineStar fontSize='15px'/>
            ) }
         </span> 
       ))}
    
     </>
    );
}

export default Rating;