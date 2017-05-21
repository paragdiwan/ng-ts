var common;
(function (common) {
    var services;
    (function (services) {
        var DataAccessService = (function () {
            function DataAccessService($http) {
                this.$http = $http;
            }
            DataAccessService.prototype.getDataFromResource = function () {
                return this.$http.get("http://date.jsontest.com/");
            };
            DataAccessService.$inject = ['$http'];
            return DataAccessService;
        }());
        services.DataAccessService = DataAccessService;
        angular.module("common.services", [])
            .service("dataAccessService", DataAccessService);
    })(services = common.services || (common.services = {}));
})(common || (common = {}));
