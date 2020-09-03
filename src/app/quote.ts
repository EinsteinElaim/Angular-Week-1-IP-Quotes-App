export class Quote {
    public showDescription: boolean;

    constructor(public id: number, public quote: string, public author: string, public submitterName: string, public description: string, public completeDate: Date){
        this.showDescription = false;
    }

}
