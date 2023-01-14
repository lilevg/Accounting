import React, {useState} from 'react';

const PersonalCardItem = ({index, card, handleDelete, updateSalary}) => {
    const [salary, setSalary] = useState(card.salary);
    return (
        <>
            <th scope="row">{index + 1}</th>
            <td>{card.fullName}</td>
            <td>{card.birthday}</td>
            <td>{new Date(card.enrollmentDate).toLocaleDateString()}</td>
            <td>{card.position}</td>
            <td>
                <div className="row">
                    <div className="col-5">
                        <input
                            className="form-control"
                            type="number"
                            value={salary}
                            onChange={e => {
                                setSalary(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        className="btn btn-outline-secondary offset-1 col-5"
                        onClick={() => updateSalary(card.IC, salary)}>save</button>
                </div>
            </td>
            <td>{card.IC}</td>
            <td>{card.subdivisiontitle}</td>
            <td><button className="btn btn-outline-danger" onClick={() => handleDelete(card.IC)}>delete</button></td>
        </>
    );
};

export default PersonalCardItem;