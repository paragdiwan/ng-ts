/// <reference path='../_all.ts' />
var MyApplication;
(function (MyApplication) {
    var DemoMVVMCtrl = (function () {
        function DemoMVVMCtrl(dataAccessService) {
            this.dataAccessService = dataAccessService;
            this.displayText = "Welcome to Typescript";
            this.flag = true;
        }
        DemoMVVMCtrl.prototype.changeScopeModel = function () {
            this.flag = !this.flag;
            if (this.flag) {
                this.displayText = "You are loving TS.";
            }
            else {
                this.displayText = "Welcome to Typescript";
            }
        };
        DemoMVVMCtrl.prototype.getDataFromService = function () {
            var _this = this;
            try {
                this.dataAccessService.getDataFromResource().then(function (response) {
                    try {
                        _this.serviceResponse = response.data;
                    }
                    catch (exception) {
                        throw exception;
                    }
                });
            }
            catch (exception) {
                throw exception;
            }
        };
        DemoMVVMCtrl.$inject = ['dataAccessService'];
        return DemoMVVMCtrl;
    }());
    MyApplication.DemoMVVMCtrl = DemoMVVMCtrl;
    angular.module('app', ['common.services'])
        .controller("ListCtrl", MyApplication.DemoMVVMCtrl);
})(MyApplication || (MyApplication = {}));
