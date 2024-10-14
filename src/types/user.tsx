export type user = {
    id: string
    fName: string
    lName: string
    phone: string
    address: string
    userName: string
    password: string
}

export const getEmptyUser = () => {
    return {
        id: '',
        fName: '',
        lName: '',
        phone: '',
        address: '',
        userName: '',
        password: '',
    }
}

export const tmpDemoUser = () => {
    return {
        id: '1',
        fName: 'Nave',
        lName: 'Yadai',
        // email:"NaveYadai@gmail.com",
        phone: '0542492699',
        address: 'ערבי נחל 24 בני עייש',
        userName: 'Nave32147',
        password: 'N1a2v3e4',
    }
}
