export class Match {

    constructor(data: any) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    if (property === 'date') {
                        this[property] = new Date(data[property]);
                    } else {
                        this[property] = data[property];
                    }
                }
            }
        }
    }
}
