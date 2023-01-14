import React, {useState} from 'react';
import ListForm from "./ListForm";

const AddNew = ({fetchFunction, options}) => {
    const [addNew, setAddNew] = useState(true);

    return (
        <>
        {addNew ?
            (<button className="btn btn-outline-info"
                     onClick={() => setAddNew(prev => !prev)}>
                add new
            </button>)
            : (<>
                <button
                    className="btn btn-outline-info"
                    onClick={() => setAddNew(prev => !prev)}>
                    close
                </button>
                <ListForm handleSubmit={fetchFunction} options={options}/>
            </>)
        }
        </>
    );
};

export default AddNew;