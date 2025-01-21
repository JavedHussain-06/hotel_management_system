import { useForm, FieldValues, Path } from "react-hook-form";
import { Input } from "./Input";
import { Button } from "./Button";
import { motion } from "framer-motion";

interface AuthFormProps<T extends FieldValues> {
  title: string;
  onSubmit: (data: T) => void;
  isRegister?: boolean;
}

export const AuthForm = <T extends FieldValues>({
  title,
  onSubmit,
  isRegister,
}: AuthFormProps<T>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<T>();

  return (
    <motion.div
      className="max-w-lg bg-white shadow-md  rounded-lg p-1 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold text-center mb-6 border-b-2">{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isRegister && (
          <Input
            label="Name"
            type="text"
            {...register("name" as Path<T>, { required: "Name is required" })}
            error={errors.name?.message?.toString()}
          />
        )}
        <Input
          label="Email"
          type="email"
          {...register("email" as Path<T>, { required: "Email is required" })}
          error={errors.email?.message?.toString()}
        />
        <Input
          label="Password"
          type="password"
          {...register("password" as Path<T>, { required: "Password is required" })}
          error={errors.password?.message?.toString()}
        />
        <Button type="submit">{title}</Button>
      </form>
    </motion.div>
  );
};
