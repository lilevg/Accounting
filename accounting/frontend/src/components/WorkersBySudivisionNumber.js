import React from 'react';

const WorkersBySudivisionNumber = ({card, index}) => {
    return (
        <>
            <th scope="row">{index + 1}</th>
            <td>{card.fullName}</td>
            <td>{card.position}</td>
            <td>{card.salary}</td>
        </>
    );
};

export default WorkersBySudivisionNumber;