export async function getAll() {
    const response = await fetch('http://localhost:5003/api/personalCard/getAll');
    const result = await response.json();
    return result;
}

export async function getAverageSalary() {
    const response = await fetch('http://localhost:5003/api/personalCard/getAverageSalary');
    const result = await response.json();
    return result;
}

export async function create(fullName, birthday, enrollmentDate, position, salary, ic, subdivisionNumber) {
    const response = await fetch('http://localhost:5003/api/personalCard/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({fullName, birthday, enrollmentDate, position, salary, ic, subdivisionNumber})
    });
    const result = await response.json();
    return result;
}

export async function deleteOne(ic) {
    const response = await fetch('http://localhost:5003/api/personalCard/delete/' + ic, {
        method: 'DELETE',
    });
    const result = await response.json();
    return result;
}

export async function changeSalary(ic, salary) {
    const response = await fetch('http://localhost:5003/api/personalCard/updateSalary', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            ic,
            newSalary: salary
        })
    });
    const result = await response.json();
    return result;
}

export async function fetchWorkersBySubdivision(sbdnumber) {
    const response = await fetch('http://localhost:5003/api/personalCard/getWorkersBySubdivisionNumber/' + sbdnumber);
    const result = await response.json();
    return result;
}
