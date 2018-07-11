export class User {
    _id: string;
    email: string;
    password: string;
    prenom: string;
    nom: string;

    constructor(data: any) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    this[property] = data[property];
                }
            }
        }
    }
}
