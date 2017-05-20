
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
        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {
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
            this.$http.get("http://date.jsontest.com/")
                .then((response) => {
                    try {
                        this.serviceResponse = response.data;
                    }
                    catch (exception) {
                        throw exception;
                    }
                });
        }
    }
}

angular.module('app',[])
        .controller("ListCtrl",MyApplication.DemoMVVMCtrl);

