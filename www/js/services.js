angular.module('starter.services', [])

.service('Todos', function Todos () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  this.data = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

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
