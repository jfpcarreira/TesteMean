app.controller('pessoasController', ['$scope', '$resource', '$http', 'PessoasService',
    function($scope, $resource, $http, PessoasService) {

        var Pessoa = $resource('/api/pessoas');

        $scope.listaPessoas = function() {
            PessoasService.listaPessoas().
                success(function(data, status, headers, config) {
                    console.log('PESSOAS LISTADAS COM SUCESSO!');
                    $scope.pessoas = data;
                }).
                error(function(data, status, headers, config) {
                    console.log('ERRO!');
                });
        }

        $scope.criaPessoa = function() {
            var pessoa = new Pessoa();
            pessoa.nome = $scope.nome;
            pessoa.apelido = $scope.apelido;
            pessoa.idade = $scope.idade;

            PessoasService.criaPessoa(pessoa).
                success(function(data, status, headers, config) {
                    console.log('PESSOA CRIADA COM SUCESSO!');
                    $scope.nome = $scope.apelido = $scope.idade = '';
                    $scope.listaPessoas();
                }).
                error(function(data, status, headers, config) {
                    console.log('ERRO!');
                });
        }

        $scope.editaPessoa = function(id) {
            var pessoa = new Pessoa();
            pessoa.nome = "TESTE";

            PessoasService.editaPessoa(id, pessoa).
                success(function(data, status, headers, config) {
                    console.log('PESSOA EDITADA COM SUCESSO!');
                    $scope.listaPessoas();
                }).
                error(function(data, status, headers, config) {
                    console.log('ERRO!');
                });
        }

        $scope.eliminaPessoa = function(id) {
            PessoasService.eliminaPessoa(id).
                success(function(data, status, headers, config) {
                    console.log('DELETE COM SUCESSO!');
                    $scope.listaPessoas();
                }).
                error(function(data, status, headers, config) {
                    console.log('ERRO!');
                });
        }
    }
]);
