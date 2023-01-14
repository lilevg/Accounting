import React, {useEffect, useState} from 'react';
import {getAll} from "../API/salaryStoryService";

const SalaryStory = () => {

    const [salaryStories, setSalaryStories] = useState([]);
    useEffect(() => {
        getAll().then(data => setSalaryStories(data));
    }, []);

    return (
        <table className="table table-bordered mt-5 container">
            <thead className="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">IC</th>
                <th scope="col">Old Salary</th>
                <th scope="col">New Salary</th>
                <th scope="col">Date</th>
            </tr>
            </thead>
            <tbody>
            {salaryStories.map(((story, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{story.IC}</td>
                    <td>{story.oldSalary}</td>
                    <td>{story.newSalary}</td>
                    <td>{new Date(story.date).toLocaleDateString()}</td>
                </tr>
            )))}
            </tbody>
        </table>
    );
};

export default SalaryStory;