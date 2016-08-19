'use strict';
class Person{
    constructor(name){
        this.name = name ;
        this.hobbies = [];
    }
    get hobby(){
        return this.hobbies;
    }
    set hobby(hobby){
        this.hobbies.push(hobby);
    }
}

class Student extends Person{

}

var p = new Student('kevin');
p.hobby = 'ball';
p.hobby = 'game';

console.log(p.hobby);