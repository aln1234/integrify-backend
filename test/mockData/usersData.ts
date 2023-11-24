import { ROLE } from "../../constants/roles";

export default [
  {
    _id: "6557d2530fe86fe5c201e7d5",
    email: "admin@admin.com",
    password: "12345678",
    firstName: "admin",
    lastName: "admin",
    role: ROLE.ADMIN,
    avatar: "https://images.com/admin.png",
    permission: [{ name: "PRODUCTS_CREATE" }],
  },
];
