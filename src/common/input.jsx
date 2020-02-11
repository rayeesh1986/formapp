import React from 'react';

const Input = ({name, onChangedata, value, label}) => {
    return (
        <React.Fragment>
<label htmlFor={name}>{label}</label>
        <input
            value={value}
            onChange={onChangedata}
            autoFocus
            refs={name}
            type="text" 
            className="form-control"
            id={name}
            name={name}
            autoComplete="off"
        />
        </React.Fragment>
     );
}
 
export default Input;