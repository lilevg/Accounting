import React, {useEffect, useState} from 'react';
import {getAll, create, deleteOne} from "../API/sickListService";
import SickListItem from "../components/SickListItem";
import AddNew from "../components/AddNew";

const SickList = () => {

    const [cardsSL, setCardsSL] = useState([]);

    useEffect(() => {
        getAll().then(data => setCardsSL(data));
    }, []);

    async function createNew([ic, beginning, end]){
        const response = await create(ic.value, beginning.value, end.value);
        if(response.message?.includes('Duplicate entry')) {
            alert('this person already added');
        }
        const results = await getAll();
        setCardsSL(results);
    }

    async function deleteSickList(ic){
        await deleteOne(ic);
        const results = await getAll();
        setCardsSL(results);
    }

    return (
        <div className="container mt-3">
            <AddNew
                fetchFunction={createNew}
                options={[
                    {name:'ic', type:'text', value: ''},
                    {name:'beginning', type:'date', value: ''},
                    {name:'end', type:'date', value: ''},
                ]}
            />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">IC</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Begining</th>
                    <th scope="col">End</th>
                </tr>
                </thead>
                <tbody>
                {cardsSL.map((cardSL, index) =>
                    <tr key={cardSL.ic}>
                        <SickListItem index={index} card={cardSL} handleDelete={deleteSickList}/>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default SickList;