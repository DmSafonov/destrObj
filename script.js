const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   }
};

console.log(options.name);

for (let key in options){ //перебор объекта
   console.log(`Свойство ${key} объекта ${options[key]}`);
};

for (let key in options){ //перебор объекта в объекте

   if(typeof(options[key]) === 'object'){
      for(let i in options[key]){
         console.log(`Свойство ${i} объекта ${options[key][i]}`);
      }
   } else{
         console.log(`Свойство ${key} объекта ${options[key]}`);
      }
};

const {border, bg} = options.colors; //Деструктуризация

console.log(border);
