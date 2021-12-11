export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface Login {
    email: string,
    password: string
}

export interface AuthenticationResponse {
    jwt : string
}

export interface Product {
    productName : string,
    price : number,
    description : string,
    image : string
}