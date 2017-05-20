var MyApplication;
(function (MyApplication) {
    var ListCtrl = (function () {
        function ListCtrl() {
            this.displayText = "Welcome to Typescript";
        }
        ListCtrl.prototype.changeScopeModel = function () {
            this.displayText = "You are loving TS.";
        };
        return ListCtrl;
    }());
    MyApplication.ListCtrl = ListCtrl;
})(MyApplication || (MyApplication = {}));
angular.module('app', [])
    .controller("ListCtrl", MyApplication.ListCtrl);
