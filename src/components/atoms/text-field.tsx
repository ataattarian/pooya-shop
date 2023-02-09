import { forwardRef, InputHTMLAttributes } from "react";
import styles from "@/lib/sass/input.module.scss";
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const TextField = forwardRef<any, TextFieldProps>(({ error, ...rest }, ref) => (
  <>
    <input
      ref={ref}
      autoComplete="off"
      className={styles["text-field"]}
      {...rest}
    />
    {error ? <p className="text-sm text-rose-400 dark:text-rose-300 -mt-1">{error}</p> : ""}
  </>
));

export default TextField;
