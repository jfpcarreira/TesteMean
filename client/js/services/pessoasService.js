app.service('PessoasService', ['$http',
    function($http) {

        var REST_URL_PESSOAS = '/api/pessoas/';

        this.listaPessoas = function() {
            return $http.get(REST_URL_PESSOAS);
        }

        this.criaPessoa = function(objPessoa) {
            return $http.post(REST_URL_PESSOAS, objPessoa);
        }

        this.editaPessoa = function(id, objPessoa) {
            return $http.put(REST_URL_PESSOAS + id, objPessoa);
        }

        this.eliminaPessoa = function(id) {
            return $http.delete(REST_URL_PESSOAS + id);
        }

    }
]);
