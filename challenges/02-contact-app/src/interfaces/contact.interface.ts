export default interface IContact {
  id: number; // Date.now()
  name: string;
  phone: string; // The phone is a string to check it in the form submit with a regular expression
}
