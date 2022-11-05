import React from "react";
import { useForm } from "react-hook-form";
import { RButton } from "../../theme-code/components/wrappers/RButton";
import MyFormProvider from "../../theme-code/components/wrappers/RRHFInputs/MyFormProvider";
import RRHFCheckbox from "../../theme-code/components/wrappers/RRHFInputs/RRHFCheckbox";
import RHFDatepicker from "../../theme-code/components/wrappers/RRHFInputs/RRHFDatepicker";
import RRHFNumberField from "../../theme-code/components/wrappers/RRHFInputs/RRHFNumberField";
import RRHFRadioGroup from "../../theme-code/components/wrappers/RRHFInputs/RRHFRadioGroup";
import RRHFSelect from "../../theme-code/components/wrappers/RRHFInputs/RRHFSelect";
import RRHFTextField from "../../theme-code/components/wrappers/RRHFInputs/RRHFTextField";
import RRHFTextFieldMultiline from "../../theme-code/components/wrappers/RRHFInputs/RRHFTextFieldMultiline";
import { Card } from "../components/Card";
import { RPage } from "../components/Page/RPage";

interface ITestFormData {
  name: string;
  email: string;
  age: number;
  isCool: boolean;
  tagId: string;
  multiTagId: string[];
  tagIdRadio: string;
  birthDate: Date;
  description: string;
  searchableTagId: string[];
}

const TAGS = [
  { value: "1", label: "Tag 1" },
  { value: "2", label: "Tag 2" },
  { value: "3", label: "Tag 3" },
];

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
          <RRHFTextField<ITestFormData> name="name" label="name" />
          <RRHFNumberField<ITestFormData> name="age" label="age" />
          <RRHFCheckbox<ITestFormData> name="isCool" label="is cool" />
          <RRHFSelect<ITestFormData>
            options={TAGS}
            name="tagId"
            label="tagId"
          />
          <RRHFSelect<ITestFormData>
            options={TAGS}
            name="multiTagId"
            label="Multi tag id"
            isMultiple={true}
          />
          <RRHFSelect<ITestFormData>
            options={TAGS}
            name="searchableTagId"
            label="Searchable multi tag id"
            isMultiple={true}
            isSearchable={true}
          />
          <RHFDatepicker<ITestFormData> name="birthDate" label="Bith date" />
          <RRHFRadioGroup<ITestFormData>
            options={TAGS}
            name="tagIdRadio"
            label="tagIdRadio"
          />
          <RRHFTextFieldMultiline<ITestFormData>
            name="description"
            label="Description"
          />
          <RButton type="submit">Submit</RButton>
        </Card>
      </MyFormProvider>
    </RPage>
  );
};

export default TestPage;
