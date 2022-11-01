// form
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "../inputs/TextField";

type Props<T> = {
  name: keyof T;
  label: string;
};

export default function RRHFTextField<T>({ name, label, ...other }: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name.toString()}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          name={name.toString()}
          label={label}
          placeholder={label}
          onChange={field.onChange}
          value={field.value || ""}
        />
      )}
    />
  );
}
