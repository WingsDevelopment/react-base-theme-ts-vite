import React from "react";
import { useForm } from "react-hook-form";
import { RButton } from "../../theme-code/components/wrappers/RButton";
import MyFormProvider from "../../theme-code/components/wrappers/RRHFInputs/MyFormProvider";
import RRHFTextField from "../../theme-code/components/wrappers/RRHFInputs/RRHFTextField";
import { Card } from "../components/Card";
import { RPage } from "../components/Page/RPage";

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
    <RPage title="Test page">
      <MyFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Card>
          test
          <RRHFTextField<ITestFormData> name="name" label="test" />
          <RButton type="submit">Submit</RButton>
        </Card>
      </MyFormProvider>
    </RPage>
  );
};

export default TestPage;
