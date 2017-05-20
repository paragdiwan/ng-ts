
 /// <reference path='../_all.ts' />

 module MyApplication {

    export interface IMessage {
        displayText: string;
        flag: boolean;
        changeScopeModel(): void;
    }


    export class DemoMVVMCtrl  implements IMessage {
        displayText: string;
        flag: boolean;
        constructor() {
            this.displayText = "Welcome to Typescript-";
            this.flag = true; 
        }

        changeScopeModel() {
            this.flag = !this.flag;

            if(this.flag) {
                this.displayText = "You are loving TS."
            }
            else {
                this.displayText = "Welcome to Typescript";
            }
        }
        
    }
    
}

angular.module('app',[])
        .controller("ListCtrl",MyApplication.DemoMVVMCtrl);

