export const getUser = async (userId) =>{
    const data = (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()
    return data
}
