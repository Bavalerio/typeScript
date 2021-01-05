function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);  
}

const mergObj =  merge( { name: 'Brayan', hobbies: ['Cars'] }, { age: 30 });

console.log(mergObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) : [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText =  `got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Happy new Year yeeee!!!!'));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;  
}

extractAndConvert({name: 'Bryan'}, 'name');


class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1){
      return
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [ ...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Brayan');
textStorage.addItem('Valerio');
textStorage.removeItem('Brayan');
console.log(textStorage.getItems());

// const numberStorage = new DataStorage<object>();

// numberStorage.addItem({name: 'Bryan'});
// numberStorage.addItem({name: 'Valerio'});
// numberStorage.removeItem({name: 'Bryan'});
// console.log(numberStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
 
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}