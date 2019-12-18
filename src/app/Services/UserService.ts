import {Item, ItemService} from './ItemService'

export class User {
    id: string;
    name: string;
    forSale: Item[];
    recievedRatings: string[];
    givenRatings: string[];
}

export class UserService {
    currentUser: User;
    users: User[];

    constructor(
        private itemService: ItemService
    ){
        this.currentUser = {
            id: "000",
            name: "NoUser",
            forSale: [],
            recievedRatings: [],
            givenRatings: []
        };

        this.users = [
            this.currentUser,
            {
                id: "001",
                name: "User1",
                forSale: [],
                recievedRatings: [],
                givenRatings: []
            },
            {
                id: "002",
                name: "User2",
                forSale: [],
                recievedRatings: [],
                givenRatings: []
            },
            {
                id: "003",
                name: "User3",
                forSale: [],
                recievedRatings: [],
                givenRatings: []
            }
        ];
    }

    getAllUsers(){
        return [...this.users];
    }

    loginUser(id: string){
        this.currentUser = this.users.find(user => {
            return user.id === id;
        });
    }

    logoutUser(){
        this.currentUser = undefined;
        
    }

    addUser(){
        let newUser = new User; 
        newUser.id = "00" + (this.users.length).toString();
        newUser.name = "User" + (this.users.length).toString();
        this.users.push(newUser)
        
    }
}
