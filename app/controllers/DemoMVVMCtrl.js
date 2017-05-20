/// <reference path='../_all.ts' />
var MyApplication;
(function (MyApplication) {
    var DemoMVVMCtrl = (function () {
        function DemoMVVMCtrl() {
            this.displayText = "Welcome to Typescript-";
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
        return DemoMVVMCtrl;
    }());
    MyApplication.DemoMVVMCtrl = DemoMVVMCtrl;
})(MyApplication || (MyApplication = {}));
angular.module('app', [])
    .controller("ListCtrl", MyApplication.DemoMVVMCtrl);
