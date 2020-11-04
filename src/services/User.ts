export default function createUser(name ='', age: number, techs: Array<string>) {
    const data = {
        name,
        age,
        techs
    }
    return data
}