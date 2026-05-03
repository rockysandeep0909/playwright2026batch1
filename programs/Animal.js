// Parent Class 


class Animal {

    constructor(name){
        this.name=name;
    }

    speak(){
        console.log('${this.name} makes a sound')
    }

}


//Child Class 

class Dog extends Animal {
    bark(){
        console.log('${this.name} says : Woof');
    }
} 


const dog=new Dog("ScobbyDobby");
dog.bark();
dog.speak();