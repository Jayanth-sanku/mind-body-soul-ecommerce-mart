import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Jayanth",
    lastName: "Sanku",
    email: "demo1@gmail.com",
    password: "1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses:[{
      id: uuid(),
      firstName: "Jayanth",
      lastName: "Sanku",
      street: "Abc Street",
      district: "Srikakulam",
      state: "Andhra Pradesh",
      pinCode: "532185",
      phone: "7032241926"
  }]
  },
  {
    _id: uuid(),
    firstName: "Person1",
    lastName: "Person2",
    email: "demo2@gmail.com",
    password: "12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses:[{
      id: uuid(),
      firstName: "Jayanth",
      lastName: "Sanku",
      street: "Abc Street",
      district: "Srikakulam",
      state: "Andhra Pradesh",
      pinCode: "532185",
      phone: "7032241926"
  },]
  },
];
