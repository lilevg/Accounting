import React from 'react';

const SubdivisionItem = ({card}) => {
    return (
        <>
            <th>{card.number}</th>
            <td>{card.title}</td>
        </>
    );
};

export default SubdivisionItem;