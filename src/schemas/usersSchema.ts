import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserUpdate } from "../interfaces/users.Interface";
import { addressSchema } from "./address/addresSchema";

export const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required().max(70),
  email: yup.string().email().required().max(70),
  password: yup.string().required().max(120),
  address: addressSchema,
});

export const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
});

export const userWithoutPasswordSchema = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});