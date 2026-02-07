export function printAge(age) {
    console.log(age)
}

export class CustomerDetails {

    /**
     * This function prints the first name
     * @param {string} firstName 
     */
    printFirstName(firstName) {
        console.log(firstName)
    }

    /**
     * This function prints the last name
     * @param {string} lastName 
     */
    printLastName(lastName) {
        console.log(lastName)
    }



}   

export const customer = new CustomerDetails()