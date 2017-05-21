
 /// <reference path='../_all.ts' />

 module MyApplication {

    export interface IMessage {
        displayText: string;
        flag: boolean;
        serviceResponse: any;
        changeScopeModel(): void;
    }


    export class DemoMVVMCtrl  implements IMessage {
        displayText: string;
        flag: boolean;
        serviceResponse: any;
        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: common.services.DataAccessService) {
            this.displayText = "Welcome to Typescript";
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

        getDataFromService() {
            try {
                this.dataAccessService.getDataFromResource().then((response) => {
                    try {
                        this.serviceResponse = response.data;
                    }
                    catch (exception) {
                        throw exception;
                    }
                })
            }
            catch (exception) {
                throw exception;
            }
        }
    }
    
     angular.module('app', ['common.services'])
         .controller("ListCtrl", MyApplication.DemoMVVMCtrl);
         
}
