module common.services {

    interface IDataAccessService {
        getDataFromResource();
    }

    export class DataAccessService implements IDataAccessService {

        static $inject = ['$http'];
        constructor(private $http:ng.IHttpService) {
        }

        getDataFromResource() {
           return this.$http.get("http://date.jsontest.com/")
        }
    }
        angular.module("common.services",[])       
           .service("dataAccessService", DataAccessService); 
}
