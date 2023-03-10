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

//to see please just inpect and go to application then open local storage(left side of tab);
