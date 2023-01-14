import React, {useState} from 'react';
import Label from "./Label";

const ListForm = ({handleSubmit, options}) => {

    const [state, setState] = useState(options);

    return (
        <div>
            <h2 className="text-center">Add new business trip</h2>
            <form onSubmit={e => e.preventDefault()}>
                <div className="row">
                    {options.map(option => (
                        <Label
                            name={option.name}
                            type={option.type}
                            setElement={(value) => {
                                const filteredOptions = state.filter(item => item.name !== option.name);
                                const newOption = state.find(item => item.name === option.name);
                                newOption.value = value;
                                setState([...filteredOptions, newOption]);
                        }}/>)
                    )}
                </div>
                <div className="row">
                    <div className="offset-4">
                        <button
                            type="submit"
                            className="btn btn-primary mt-3 mb-3 col-3 "
                            onClick={() => handleSubmit(state)}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ListForm;