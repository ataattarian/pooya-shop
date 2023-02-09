'use client'
import TextField from "@/components/atoms/text-field";
import { RegisterProps } from "@/lib/interfaces";
import { registerSchema } from "@/lib/schemas/auth.schema";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { signUp } from "@/lib/services/auth";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: yupResolver(registerSchema),
  });
  return (
    <div className="max-w-sm mx-auto p-10 my-20">
      <h1 className="text-2xl font-black text-heading text-center mb-6">
        ایجاد حساب کاربری
      </h1>
      <form onSubmit={handleSubmit(registerSubmit)} className="max-w-md mx-auto flex flex-col gap-4 mt-8">
        <TextField
          type={"text"}
          placeholder="نام"
          {...register("first_name")}
          error={errors.first_name?.message}
        />
        <TextField
          type={"text"}
          placeholder="نام خانوادگی"
          {...register("last_name")}
          error={errors.last_name?.message}
        />
        <TextField
          type={"email"}
          placeholder="ایمیل"
          {...register("email")}
          error={errors.email?.message}
        />
        <TextField
          type={"text"}
          placeholder="رمز عبور"
          {...register("password")}
          error={errors.password?.message}
        />
        <Link href={"/auth/login"} className="text-sm hover:text-heading">
          ورود به حساب؟
        </Link>
        <button className="px-4 py-2 rounded-xl border text-white font-semibold border-blue bg-blue leading-7 active:scale-90 duration-150">
          ساخت حساب
        </button>
      </form>
    </div>
  );

  function registerSubmit(data: RegisterProps) {
    setIsLoading(true);
    signUp(data).then((res) => {
      toast.success("حساب کاربری با موفقیت ساخته شد!");
      console.log(res);
      setIsLoading(false);
    });
  }
}
