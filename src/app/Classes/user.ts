export class User {
    _id: string;
    email: string;
    password: string;
    prenom: string;
    nom: string;

    constructor(_id: string, prenom: string, nom: string, email: string, password: string) {
        this._id = _id;
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
        this.password = password;
    }
}
