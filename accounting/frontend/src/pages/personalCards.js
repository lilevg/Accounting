import React, {useEffect, useState} from 'react';
import {
    getAll,
    create,
    deleteOne,
    getAverageSalary,
    changeSalary,
    fetchWorkersBySubdivision
} from "../API/personalCardService";
import PersonalCardItem from "../components/PersonalCardItem";
import AddNew from "../components/AddNew";
import WorkersBySudivisionNumber from "../components/WorkersBySudivisionNumber";

const PersonalCards = () => {

    const [cards, setCards] = useState([]);
    const [showAverageSalary, setShowAverageSalary] = useState(true);
    const [averageSalary, setAverageSalary] = useState(0);
    const [showWorkerSub, setShowWorkerSub] = useState(true);
    const [subdivisionNumber, setSubdivisionNumber] = useState(0);
    const [workersBySubdivision, setWorkersBySubdivision] = useState([]);

    useEffect(() => {
        getAll().then(data => setCards(data));
        getAverageSalary().then(data => setAverageSalary(data));
    }, []);

    async function createNew([fullName, birthday, enrollmentDate, position, salary, ic, subdivisionNumber]){
        const response = await create(fullName.value, birthday.value, enrollmentDate.value, position.value, salary.value, ic.value, subdivisionNumber.value);
        if(response.message?.includes('Duplicate entry')) {
            alert('this person already added');
        }
        const results = await getAll();
        setCards(results);
    }

    async function deletePersonalCard(ic){
        await deleteOne(ic);
        const results = await getAll();
        setCards(results);
    }

    async function updateSalary(ic, salary) {
        if(salary < 500) {
            alert('salary must be over 500');
            return;
        }
        await changeSalary(ic, salary);
        const results = await getAll();
        setCards(results);
    }

    function handleChangeSubdivisionNumber(subdivisionNumber) {
        fetchWorkersBySubdivision(subdivisionNumber).then(data => setWorkersBySubdivision(data));
    }

    return (
        <div className="container mt-3">
            <AddNew fetchFunction={createNew}
                    options={[
                        {name:'fullName', type:'text', value: ''},
                        {name:'birthday', type:'text', value: ''},
                        {name:'enrollmentDate', type:'date', value: ''},
                        {name:'position', type:'text', value: ''},
                        {name:'salary', type:'text', value: ''},
                        {name:'ic', type:'text', value: ''},
                        {name:'subdivisionNumber', type:'text', value: ''},
                    ]}/>

            {showAverageSalary ?
                (<button className="btn btn-outline-info m-2"
                         onClick={() => setShowAverageSalary(prev => !prev)}
                >
                    Check average salary
                </button>
                )
                : (<>
                    <button
                        className="btn btn-outline-info m-2"
                        onClick={() => setShowAverageSalary(prev => !prev)}>
                        close
                    </button>
                    <h3>
                        Average salary is <b>${averageSalary.toFixed(3)}</b>
                    </h3>
                </>)
            }
            {showWorkerSub ?
                (<button className="btn btn-outline-info m-2"
                        onClick={() => setShowWorkerSub(prev => !prev)}
                >
                    Check workers by subdivision number
                </button>
                )
                : (<>
                        <button
                            className="btn btn-outline-info m-2"
                            onClick={() => setShowWorkerSub(prev => !prev)}>
                            close
                        </button>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                {subdivisionNumber == 0 ?
                                    <span>Choose number of subdivision</span>
                                    : (
                                        <>
                                            {subdivisionNumber == 1 && <span>1 (Machine building)</span>}
                                            {subdivisionNumber == 2 && <span>2 (Logistics)</span>}
                                            {subdivisionNumber == 3 && <span>3 (Personal staff)</span>}
                                        </>
                                    )
                                }
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                <li role="button">
                                    <a className={subdivisionNumber == 1 ? "dropdown-item active" : "dropdown-item"}
                                        onClick={() => {
                                            setSubdivisionNumber(1);
                                            handleChangeSubdivisionNumber(1);
                                        }}>1 (Machine building)</a>
                                </li>
                                <li role="button">
                                    <a className={subdivisionNumber == 2 ? "dropdown-item active" : "dropdown-item"}
                                        onClick={() => {
                                            setSubdivisionNumber(2);
                                            handleChangeSubdivisionNumber(2);
                                        }}>2 (Logistics)</a>
                                </li>
                                <li role="button">
                                    <a className={subdivisionNumber == 3 ? "dropdown-item active" : "dropdown-item"}
                                        onClick={() => {
                                            setSubdivisionNumber(3);
                                            handleChangeSubdivisionNumber(3);
                                        }}>3 (Personal staff)</a>
                                </li>
                            </ul>
                        </div>
                        {workersBySubdivision.length > 0 &&
                            <table className="table table-striped mb-5 mt-3">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Salary</th>
                                </tr>
                                </thead>
                                <tbody>
                                {workersBySubdivision.map((workersBySubdivision, index) =>
                                    <tr key={workersBySubdivision.fullName}>
                                        <WorkersBySudivisionNumber card={workersBySubdivision} index={index}/>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        }
                    </>
                )
            }
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Birth year</th>
                    <th scope="col">Enrollment date</th>
                    <th scope="col">Position</th>
                    <th scope="col">Salary</th>
                    <th scope="col">IC</th>
                    <th scope="col">Subdivision</th>
                </tr>
                </thead>
                <tbody>
                {cards.map((card, index) =>
                    <tr key={card.ic}>
                        <PersonalCardItem index={index} card={card} handleDelete={deletePersonalCard} updateSalary={updateSalary}/>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default PersonalCards;