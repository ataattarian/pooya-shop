import * as y from "yup";

export const loginSchema = y.object({
  username: y
    .string()
    .required("نام کاربری الزامی میباشد"),
  password: y
    .string()
    .min(4, "رمز عبور نباید کمتر از 4 کارکتر باشد")
    .required("رمز عبور الزامی میباشد"),
});

export const registerSchema = y.object({
  first_name: y.string().required('نام الزامی میباشد'),
  last_name: y.string().required('نام خانوادگی الزامی میباشد'),
  email: y
    .string()
    .email("ایمیل را صحیح وارد کنید")
    .required("ایمیل الزامی میباشد"),
  password: y
    .string()
    .min(4, "رمز عبور نباید کمتر از 4 کارکتر باشد")
    .required("رمز عبور الزامی میباشد"),
});
