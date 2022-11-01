import React from "react";
import { useForm } from "react-hook-form";
import MyFormProvider from "../../theme-code/components/wrappers/RRHFInputs/MyFormProvider";
import RRHFTextField from "../../theme-code/components/wrappers/RRHFInputs/RRHFTextField";
import { Card } from "../components/Card";

interface ITestFormData {
  name: string;
  email: string;
}

export const TestPage = () => {
  const methods = useForm<ITestFormData>({});
  const { handleSubmit } = methods;

  const onSubmit = (data: ITestFormData) => {
    console.log(data);
  };

  return (
    <div>
      <MyFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Card>
          test
          <RRHFTextField<ITestFormData> name="name" label="test" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </Card>
      </MyFormProvider>
    </div>
  );
};

export default TestPage;
