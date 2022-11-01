import React from "react";

interface TextFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  helperText,
  required,
  placeholder,
  type,
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {helperText}
        </p>
      )}
    </div>
  );
};
