export async function getAll() {
    const response = await fetch('http://localhost:5003/api/subdivision/getAll');
    const result = await response.json();
    return result;
}
