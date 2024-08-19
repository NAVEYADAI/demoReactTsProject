export type user = {
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    address:string;
    userName:string;
    password:string;
}

export const getEmptyUser = ()=>{
    return({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        address:"",
        userName:"",
        password:"",
    });
}
