"use client";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@/components/atoms/text-field";
import { LoginProps } from "@/lib/interfaces";
import { loginSchema } from "@/lib/schemas/auth.schema";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/lib/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useToken from "@/lib/hooks/useToken";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter()
  const { token , setToken } = useToken()

  return (
    <div className="max-w-sm mx-auto p-10 my-20">
      <h1 className="text-2xl font-black text-heading text-center mb-6">
        ورود به حساب کاربری
      </h1>
      <form
        onSubmit={handleSubmit(loginSubmit)}
        className="max-w-md mx-auto flex flex-col gap-4 mt-8"
      >
        <TextField
          type={"text"}
          placeholder="نام کاربری"
          {...register("username")}
          error={errors.username?.message}
        />
        <TextField
          type={"password"}
          placeholder="رمز عبور"
          {...register("password")}
          error={errors.password?.message}
        />
        <Link href={"/auth/register"} className="text-sm hover:text-heading">
          ثبت نام نکرده اید؟
        </Link>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 rounded-xl border text-white font-semibold border-blue bg-blue leading-7 active:scale-90 duration-150"
        >
          {isLoading ? "صبر کنید ..." : "وارد شوید"}
        </button>
      </form>
      <Toaster />
    </div>
  );

  function loginSubmit(data: LoginProps) {
    setIsLoading(true);
    login(data).then((res) => {
      toast.success("شما با موفقیت وارد شدید");
      setIsLoading(false);
      setToken(res)
      router.push('/profile')
    }).catch(err => {
      setIsLoading(false)
      toast.error(err.response.data.message);
    });
  }
}
