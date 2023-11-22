class VeterinaryClinic {
    #clients = [];
    #totalProfit = 0;
    #currentWorkload = 0;
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.#clients.length === 10) {
            throw new Error("Sorry, we are not able to accept more patients!")
        }

        const petByName = this.#clients.find(f => f.petName === petName && f.ownerName === ownerName);
        if ((petByName) && petByName.procedures.length > 0) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${petByName.procedures.join(', ') ?? ''}.`)
        }

        this.#clients.push({
            ownerName,
            petName,
            kind,
            procedures
        });

        return `Welcome ${petName} !`
    }

    onLeaving(ownerName, petName) {
        // Check if the given ownerName corresponds to a client in the clients array, if not throw an Error:
        // "Sorry, there is no such client!"
        const owner = this.#clients.find(f => f.ownerName === ownerName);
        const pet = this.#clients.find(f => f.petName === petName);

        if (!owner) {
            throw new Error('Sorry, there is no such client!')
        }
        // •	Then check if the given petName is registered under this ownerName, if not or it is registered but the procedures array is empty because all his procederues are done , then throw an Error:
        // "Sorry, there are no procedures for { petName }!"
        if (owner.petName == petName || owner.procedures.length < 1) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }
        // ·	Otherwise, on leaving you have to collect the current client bill, add it to the total clinic profit and save the data. Calculate the bill knowing that each procedure cost 500.00$.
        //  Do not forget to update the current workload. Clear the array with procedures for the current pet. 
        // When pet leaves the clinic, petName and kind should stay like information in our data, but with no more procedures in the array of procedures. After that return, the following string:
        const proceduresNum = pet.procedures.length;
        this.#currentWorkload = 500 * proceduresNum;
        pet.procedures.splice(0, proceduresNum);
        this.#totalProfit += this.#currentWorkload;
        return `Goodbye ${petName}. Stay safe!`
    }

    toString() {
        // Return the full information of the clinic.
        // ·	First, we have to calculate how busy the clinic is in percentages. Percentage represents all current pets that
        //  have procedures based on the full capacity of the clinic. The percentage is rounded to the nearest smaller number:
        // "{ clinicName } is { percentage }% busy today!" 
        const petByOwnerProcedures = this.#clients.filter(f => f.procedures.length > 0).length;
        const percentage = Math.floor(petByOwnerProcedures / this.capacity * 100)
        console.log(`${this.clinicName} is ${percentage}% busy today!`);
        // •	On the second line comes the collected profit, that must be fixed to the second digit after the decimal point: 
        // "Total profit: { profit }$"
        console.log(`Total profit: ${this.#totalProfit}.00$`);
        // On the next lines, return the whole information for the owners in the following format. Print kind property with lowercase letters.
        //  All owners should be in alphabetical order, as also pets of each of them must be in alphabetical order too:
        this.#clients
            .sort((a, b) => {
                const nameA = a.ownerName.toUpperCase(); // ignore upper and lowercase
                const nameB = b.ownerName.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                const petA = a.petName.toLowerCase();
                const petB = b.petName.toLowerCase();
                if (petA < petB) {
                    return -1;
                }
                if (petA > petB) {
                    return 1;
                }

                // names must be equal
                return 0;
            })
            .forEach(element => {
                console.log(`${element.ownerName} with: ${element.petName} - a ${element.kind.toLowerCase()} that needs: ${element.procedures ? element.procedures.join(', ') : ''}`);
            });
        return '';
    }

}
let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);

console.log(clinic.toString());


