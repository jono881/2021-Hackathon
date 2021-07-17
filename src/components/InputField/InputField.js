import React from 'react';

const InputField = ({handleChange})=> {

    return (
        <input type="text" placeholder="Search for word" onChange={handleChange} />
    )
}

export default InputField