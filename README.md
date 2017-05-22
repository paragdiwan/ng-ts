# ng-ts
Angular Controller using Typescript
---------------
- This is an attempt to create a Angular 1.x controller using Typescript.
- This controller demonstrates usuage of '$http' service.
- Angular controller is being mapped to Typescript Class and interfaces enforces that 
  we define models , actions that are implemented by a controller class.
  
  All you need is to paste the entire folder in 'webroot' and run index.html.
   
   Snippet
   --------
   
   ```javascript
     
    module MyApplication {
    /**
        *  An interface enforces that we expose appropriate models and actions required
        *  on these models to the Controller.
        */
        export interface IMessage {
            displayText: string;
            flag: boolean;
            serviceResponse: any;
            changeScopeModel(): void;
        }

        /**
        * A Controller class that exposes models via member variables and methods.
        */
        export class DemoMVVMCtrl implements IMessage {
            displayText: string; // Demo MV on the UI.
            flag: boolean; // Toggle switch
            serviceResponse: any; // Demo Service response model.
            static $inject = ['dataAccessService'];
            constructor(private dataAccessService: common.services.DataAccessService) {
                this.displayText = "Welcome to Typescript";
                this.flag = true;
            }

            changeScopeModel() {
                this.flag = !this.flag;
                if (this.flag) {
                    this.displayText = "You are loving TS."
                }
                else {
                    this.displayText = "Welcome to Typescript";
                }
            }

            /**
            * Talks to remote service to get data.
            */
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

        // Create a model along with Service dependency & Register a controller.    
        angular.module('app', ['common.services'])
            .controller("DemoMVVMCtrl", MyApplication.DemoMVVMCtrl);
    }

  ```
