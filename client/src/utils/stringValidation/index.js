export const hasSpecialChar = (str) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    return specialChars.test(str)
}

export const isValidEmail = (email) => {
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return validEmail.test(email)
}

export const meetsLengthReq = (pass) => {
    return (16 >= pass.length && pass.length >= 5)
}


