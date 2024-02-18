class Animal{
    coonstructor(name,legCount, speaks){
        this.name = name;
        this.legCount =legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log("Hi there iam an animal and my sound is " + this.speaks);
    }
}

let dog=new Animal("Dog",4,"bhow bhow");
let cat=new Animal("cat",4,"meow meow");
cat.speak();
