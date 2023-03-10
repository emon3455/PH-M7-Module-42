let count=0;

const addObject=()=>{
    const person={
        name: "emon",
        age:21
    }
    count++;
    const stringPerson = JSON.stringify(person);
    localStorage.setItem(`user${count}`,stringPerson);
}


const removeObject=()=>{
    const user=localStorage.removeItem(`user${count}`);
    count--;
}

const getAGE=()=>{
    const user1=localStorage.getItem("user1");
    const user1Object = JSON.parse(user1);
    console.log(user1Object.age);
}

const clearStorage=()=>{
    localStorage.clear();
    count=0;
}

//localStorage.getItem("key name"); //for get any item from local storage
//localStorage.length; //to see the length of the local storage

//to see please just inpect and go to application then open local storage(left side of tab);
