export class Note {
    private _name: string = '';
    private _category: string = '';
    static categories = ['Task', 'Random Thought', 'Idea'];
    private _description: string = '';
    private _creationTime: Date;
    private _dates: Date[] = [];
    private _archived: boolean = false;
    constructor(name: string, category: string, description: string, creationTime: Date | undefined = undefined, archived: boolean = false) {
        this.name = name;
        this.description = description;
        // mark the creation time, from the arguments or automatically
        if (creationTime == null)
            this._creationTime = new Date(Date.now());
        else
            this._creationTime = creationTime;
        // check if is has a valid category
        this.category = category;
        this.archived = archived;
    }

    get name() { return this._name; }
    set name(value) { this._name = value; }
    get category() { return this._category; }
    set category(value) {
        if (Note.categories.indexOf(value) === -1) {
            throw new Error('Trying to make a Note with an invalid category');
        }
        this._category = value;
    }

    get creationTime() { return this._creationTime; }
    set creationTime(value) { this._creationTime = value; }

    get description() { return this._description; }
    set description(value: string) {
        this._description = value;
        this._dates = Note.getDatesFromText(value);
    }
    get dates() { return this._dates; }
    set dates(value) { this._dates = value; }

    get archived() { return this._archived; }
    set archived(value) { this._archived = value; }

    private static getDatesFromText(s: string) : Date[]{
        let results: Date[] = [];
        let resultsISO: Date[] = [];
        const regex = /(\d{1,2}([.\-/])\d{1,2}([.\-/])\d{4})/g;
        // corresponds to DD.MM.YYYY or DD/MM/YYYY etc., the final "g" is a flag marking that we want multiple matches
        let matches = s.match(regex);
        if (matches != null) {
            // parse substrings into Date
            results = matches.map(match => {
                let [dd, mm, yyyy] = match.split(/[\.\-\/]/);
                return new Date(+yyyy, +mm, +dd);
            });
        }
        const regexISO = /(\d{4}([.\-/])\d{1,2}([.\-/])\d{1,2})/g;
        // corresponds to the YYYY.MM.DD format
        let matchesISO = s.match(regexISO);
        if (matchesISO != null) {
            // parse substrings into Date
            resultsISO = matchesISO.map(match => {
                let [yyyy, mm, dd] = match.split(/[\.\-\/]/);
                return new Date(+yyyy, +mm, +dd);
            });
        }
        return results.concat(resultsISO);
    }
}
