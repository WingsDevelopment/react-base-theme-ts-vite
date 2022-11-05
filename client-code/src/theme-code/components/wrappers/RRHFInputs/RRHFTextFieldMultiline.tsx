// form
import { useFormContext, Controller, RegisterOptions } from "react-hook-form";
import { IFieldProps } from ".";
import { TextareaField } from "../inputs/TextareaField";
import { TextField } from "../inputs/TextField";

interface Props<T> extends IFieldProps<T> {
  rows?: number;
}

export default function RRHFTextFieldMultiline<T>({
  name,
  label,
  rules,
  rows,
  ...other
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name.toString()}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextareaField
          name={name.toString()}
          label={label}
          placeholder={label}
          onChange={field.onChange}
          value={field.value || ""}
          error={error?.message}
          rows={rows || 2}
        />
      )}
    />
  );
}
