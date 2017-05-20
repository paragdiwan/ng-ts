# ng-ts
Angular Controller using Typescript
---------------
- This is an attempt to create a Angular 1.x controller using Typescript.
- Angular controller is being mapped to Typescript Class and interfaces enforces that 
  we define models , actions that are implemented by a controller class.
    
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

