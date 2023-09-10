export default class Team {
 constructor(name) {
  this.name = name;
  this.members = new Set();
 }

 add(character) {
  if (this.members.has(character)) {
   throw new Error(`${character} такой персонаж уже существует.`);
  } else {
   this.members.add(character);
  }
 }

 addAll(...character) {
  for (const char of character) {
   if (this.members.has(char)) {
    this.members.delete(...char);
   } else {
    this.members.add(char);
   }
  }
 }

 toArray() {
  const characterArr = [...this.members];
  return characterArr;
 }
}