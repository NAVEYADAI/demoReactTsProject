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

export const tmpDemoUser = () =>{
    return({
        firstName:"Nave",
        lastName:"Yadai",
        email:"NaveYadai@gmail.com",
        phone:"0542492699",
        address:"ערבי נחל 24 בני עייש",
        userName:"Nave32148",
        password:"N1a2v3e4",
    })
}
