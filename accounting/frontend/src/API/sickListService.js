export async function getAll() {
    const response = await fetch('http://localhost:5003/api/sickList/getAll');
    const result = await response.json();
    return result;
}
export async function create(ic, beginning, end) {
    const response = await fetch('http://localhost:5003/api/sickList/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ic, beginning, end})
    });
    const result = await response.json();
    return result;
}

export async function deleteOne(ic) {
    const response = await fetch('http://localhost:5003/api/sickList/delete/' + ic, {
        method: 'DELETE',
    });
    const result = await response.json();
    return result;
}