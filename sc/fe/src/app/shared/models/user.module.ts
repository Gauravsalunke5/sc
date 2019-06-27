class User {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public username: string;
    public address: string;

    constructor(data: any) {
        this.id = data.id ? data.id : null;
        this.name = data.name ? data.name : null;
        this.email = data.email ? data.email : null;
        this.username = data.username ? data.username : null;
    }
}