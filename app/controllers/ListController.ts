
 module MyApplication {
    export interface IListCtrl {
        displayText: string;
        changeScopeModel(): void;
    }


    export class ListCtrl implements IListCtrl {
        displayText: string;
        constructor() {
            this.displayText = "Welcome to Typescript"; 
        }

        changeScopeModel() {
            this.displayText = "You are loving TS.";
        }
        
    }
    
}
declare var angular: any;

angular.module('app',[])
        .controller("ListCtrl",MyApplication.ListCtrl);

