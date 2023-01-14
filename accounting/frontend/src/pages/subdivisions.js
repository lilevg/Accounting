import React, {useEffect, useState} from 'react';
import {getAll} from "../API/subdivisionService";
import SubdivisionItem from "../components/SubdivisionItem";

const Subdivisions = () => {

    const [cardsSub, setCardsSub] = useState([]);

    useEffect(() => {
        getAll().then(data => setCardsSub(data));
    }, []);

    return (
        <div className="container">
            <div className="col-6 offset-3">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cardsSub.sort((a,b) => a.number - b.number).map((cardSub) =>
                        <tr key={cardSub.number}>
                            <SubdivisionItem card={cardSub}/>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subdivisions;