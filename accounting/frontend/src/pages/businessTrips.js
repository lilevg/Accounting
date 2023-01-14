import React, {useEffect, useState} from 'react';
import {getAll, create, deleteOne} from "../API/businessTripService";
import BusinessTripItem from "../components/BusinessTripItem";
import AddNew from "../components/AddNew";

const BusinessTrips = () => {

    const [cardsBT, setCardsBT] = useState([]);

    useEffect(() => {
        getAll().then(data => setCardsBT(data));
    }, []);

    async function createNew([ic, beginning, end]){
        const response = await create(ic.value, beginning.value, end.value);
        if(response.message?.includes('Duplicate entry')) {
            alert('this person already added');
        }
        const results = await getAll();
        setCardsBT(results);
    }

    async function deleteBusinessTrip(ic){
        await deleteOne(ic);
        const results = await getAll();
        setCardsBT(results);
    }

    return (
        <div className="container mt-3">
            <AddNew fetchFunction={createNew}
                    options={[
                        {name:'ic', type:'text', value: ''},
                        {name:'beginning', type:'date', value: ''},
                        {name:'end', type:'date', value: ''},
                    ]}/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">IC</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Beginning</th>
                        <th scope="col">End</th>
                    </tr>
                </thead>
                <tbody>
                {cardsBT.map((cardBT, index) =>
                    <tr key={cardBT.ic}>
                        <BusinessTripItem index={index} card={cardBT} handleDelete={deleteBusinessTrip}/>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default BusinessTrips;