// 1.	צרו מחלקה עם 3 שדות ופונקציה סטטית אחת,2 שדות טקסט ושדה מספר אחד, הפונקציה היא פונקציית
// random מותאמת לפי הנתונים שהמחלקה מקבלת בבנאי.
//  לדוג': במידה והמספר הוא 1000 אז המספר שיחזור יהיה בין 0 ל 999 .
//! to it
// class Women {
//   Name;
//   Age;
//   City;
//   static counter;
//   constructor(name, age, city) {
//     this.Name = name;
//     this.Age = age;
//     this.City = city;
//   }
//   static RundomNum(age) {
//     return Math.floor(Math.random() * age);
//   }
// }
// let woman1 = new Women("keren", 22, "yahod");
// console.log(woman1);
// console.log(Women.RundomNum(woman1.Age));

// 2.	כתבו תוכנית שמקבלת מהמשתמש נתונים של שם, סיסמה, מייל ושם משתמש.
//  התוכנית יוצרת מופע של משתמש.
//! to it
// לאחר מכן היא משווה בין שני אובייקטים,
//  כדי לקבוע האם הראשון מכיל ערכי מאפיינים שווי ערך לזה השני.
//   אחד מהאובייקטים ניצור ידנית בקוד (הארדקודד).
// class User {
//   name;
//   nameUser;
//   pass;
//   email;
//   constructor(name, nameUser, pass, email) {
//     this.name = name;
//     this.nameUser = nameUser;
//     this.pass = pass;
//     this.email = email;
//   }
// }
// let userPrint = new User("keren", "keren45", 5544, "keren@gmail.com");
// btn.onclick = () => {
//   let user1 = new User(Name.value, nameUser.value, pass.value, email.value);
//   console.log(user1);
//   for (const user2 in userPrint) {
//     for (const user in user1) {
//       if (userPrint[user2] == user1[user]) {
//         // userPrint[user2]=prompt(`new ${user2} `)
//         console.log(`${userPrint[user2]} is the same`);
//         console.log(userPrint);
//       } else {
//         console.log(`Nothing is the same`);
//       }
//     }
//   }
// };

// צרו מחלקה של יישוב עם שדות של מס תושבים ושם.
// בנו פונקציה שמחזירה את הפרטים בטקסט אחד.
// לאחר מכן צרו מחלקה של מדינה, עיר וכפר, המחלקות יורשות מהמחלקה יישוב.
// הוסיפו לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת ההורה ומחזירה את הטקסט עם סוג היישוב .
// צרו פונקציה סטטית במחלקה יישוב שמקבלת מספר אובייקטים ומחזירה את האובייקט עם מספר התושבים הגדול ביותר.
// צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת את האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.

class Settlement {
  name;
  residents;
  constructor(name, residents) {
    this.name = name;
    this.residents = residents;
  }
  Text() {
    return `${this.name} ${this.residents} `;
  }
  //! מחזירה את האובייקט עם מספר התושבים הגדול ביות
  //!עובדדדדדד
  static MostResidents(array) {
    let maxResidents = 0;
      let objectPeople = null;
      for (let i = 0; i < array.length; i++) {
        if (array[i].residents > maxResidents) {
          maxResidents = array[i].residents;
          objectPeople = array[i];
        }
      }
    
      return objectPeople;
    }
  }


class City extends Settlement {
  funText() {
    return `${super.Text()} City`;
  }
}

class Country extends Settlement {
  funText() {
    return `${super.Text()}  Country`;
  }
}

class Village extends Settlement {
  funText() {
    return `${super.Text()}  Village`;
  }
}

let Settlement_One = new Settlement("lod", 55);
let Country1 = new Country("lod", 55);
let City1 = new City("Asdod", 20);
let Village1 = new Village("bilo", 10);

btnInput.onclick = () => {
  let Settlement_Two = new Settlement(NameInput.value, residentsInput.value);
  for (const key in Settlement_Two) {
    art.innerHTML += `<table><tr><td> ${Settlement_Two[key]}</td></tr></table>`;
  }
  console.log(Settlement_Two);
  console.log(Settlement_One.Text());
  console.log(Settlement.MostResidents([Country1,City1,Village1]));
  console.log(Country1.funText());
  console.log(City1.funText());
  console.log(Village1.funText());

  // console.log(Settlement_One.Text());
  // console.log(Village1.funText());
};
