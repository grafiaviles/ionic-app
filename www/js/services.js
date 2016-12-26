angular.module('starter.services', [])
.service('Todos', function Todos () {

  this.data = [{
    id: 0,
    desc: 'Ben Sparrow',
    completado: false,
  }, {
    id: 1,
    desc: 'Max Lynx',
    completado: false,
  }, {
    id: 2,
    desc: 'Adam Bradleyson',
    completado: false,
  }]

    this.all = function all () {
        return this.data;
    }
    
    this.remove = function remove (chat) {
        this.data.splice(this.data.indexOf(chat), 1)
    }
    
    this.get = function get (id) {
        var todo = {}
        this.data.map(function(el) {
            if (el.id == id) {
                todo = el
            }
        })
    return todo
    }
});
