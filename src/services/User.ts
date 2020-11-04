interface techData {
    title: string,
    experience: number
}

interface userData {
    name?: string,
    age: number,
    techs: Array<string | techData>
}

export default function createUser({ name ='', age, techs }: userData) {
    const data = {
        name,
        age,
        techs
    }
    return data
}