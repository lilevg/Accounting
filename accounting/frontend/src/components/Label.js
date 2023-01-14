import React from 'react';

const Label = ({name, type, setElement}) => {
    return (
        <div className="form-group col-3">
            <label htmlFor={name+"Input"}>{name}</label>
            <input
                type={type}
                className="form-control"
                id={name+"Input"}
                placeholder={"Enter "+name}
                onChange={(e) => {
                    if(type === 'text') setElement(e.target.value);
                    else if (type === 'date') setElement(new Date(e.target.value));
                }}
            />
        </div>
    );
};

export default Label;