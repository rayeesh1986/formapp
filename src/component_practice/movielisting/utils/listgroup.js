import React from 'react';


const Listgroup = (props) => {
    const {genresMov, onChangeClick, onselectedItem} = props;
    //console.log(genresMov)
    return ( 
        <ul className="list-group mt-6">
            {genresMov.map(ml =>
                <li key={ml._id} id={ml._id} onClick={()=>onChangeClick(ml)}  className={(onselectedItem === ml) ? "list-group-item active": "list-group-item"}>{ml.name}</li>
            )}
        </ul>
     ); 
}

export default Listgroup;
