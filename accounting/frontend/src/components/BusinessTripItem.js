import React from 'react';

const BusinessTripItem = ({index, card, handleDelete}) => {
    return (
        <>
            <th scope="row">{index + 1}</th>
            <td>{card.IC}</td>
            <td>{card.fullName}</td>
            <td>{new Date(card.begining).toLocaleDateString()}</td>
            <td>{new Date(card.end).toLocaleDateString()}</td>
            <td><button className="btn btn-outline-danger" onClick={() => handleDelete(card.IC)}>delete</button></td>
        </>
    );
};

export default BusinessTripItem;