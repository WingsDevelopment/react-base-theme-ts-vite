import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AsyncContent } from "../../../../../../theme-code/components/loadable/AsyncContent";
import MyFormProvider from "../../../../../../theme-code/components/wrappers/RRHFInputs/MyFormProvider";
import RRHFTextField from "../../../../../../theme-code/components/wrappers/RRHFInputs/RRHFTextField";
import RRHFTextFieldMultiline from "../../../../../../theme-code/components/wrappers/RRHFInputs/RRHFTextFieldMultiline";
import { RSingleColumnBox } from "../../../../../../theme-code/components/wrappers/RSingleColumnBox";
import { CreateTag } from "../../../models/CreateTag";

interface Props {
  submitHandler: (createTag: CreateTag) => Promise<void>;
  isLoading: boolean;
}

export const CreateTagForm: React.FC<Props> = ({
  submitHandler,
  isLoading,
}) => {
  const methods = useForm<CreateTag>();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<CreateTag> = async (createTag: CreateTag) => {
    await submitHandler(createTag);
  };

  return (
    <AsyncContent isLoading={isLoading}>
      <MyFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RSingleColumnBox>
          <RRHFTextField<CreateTag>
            name="title"
            label="Title"
            rules={{ required: "This field is required" }}
          />
          <RRHFTextFieldMultiline<CreateTag>
            name="description"
            label="Description"
          />
          <RRHFTextField<CreateTag> name="urlSlug" label="Url Slug" />
          <RRHFTextField<CreateTag> name="order" label="Order" />

          <button type="submit">Submit</button>
        </RSingleColumnBox>
      </MyFormProvider>
    </AsyncContent>
  );
};
