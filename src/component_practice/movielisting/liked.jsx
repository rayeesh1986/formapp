import React from 'react';

const Liked = ({liked, onClick}) => {
   
        if(liked === true){
            return (
                <i style={{"cursor": "pointer"}} onClick={onClick} className="fas fa-heart"></i>
            )
        }else{
            return (
                <i style={{"cursor": "pointer"}} onClick={onClick} className="far fa-heart"></i>
            )
        }
 
}
 
export default Liked;
