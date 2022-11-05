import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AsyncContent } from "../../../../../components/wrappers/AsyncContent";
import MyFormProvider from "../../../../../components/input/reactHookForms/MyFormProvider";
import RRHFTextField from "../../../../../components/input/reactHookForms/RRHFTextField";
import { RSingleColumnBox } from "../../../../../components/wrappers/RSingleColumnBox";
import { REQUIRED_FIELD_ERROR_MESSAGE } from "../../../../../utils/utils";
import { Tag } from "../../../models/Tag";

interface Props {
  submitHandler: (tag: Tag) => Promise<void>;
  isLoading: boolean;
  initialData: Tag;
}

export const UpdateTagForm: React.FC<Props> = ({
  submitHandler,
  isLoading,
  initialData,
}) => {
  const methods = useForm<Tag>();
  const { handleSubmit } = methods;

  useEffect(() => {
    methods.reset(initialData);
  }, [initialData, methods]);

  const onSubmit: SubmitHandler<Tag> = async (tag: Tag) => {
    await submitHandler(tag);
  };

  return (
    <AsyncContent isLoading={isLoading}>
      <MyFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RSingleColumnBox>
          <RRHFTextField<Tag>
            name="title"
            label="Title"
            rules={{ required: "this field is required" }}
          />
          <RRHFTextField<Tag> name="description" label="Description" />
          <RRHFTextField<Tag> name="urlSlug" label="Url Slug" />
          <RRHFTextField<Tag> name="order" label="Order" />

          <button type="submit">Submit</button>
        </RSingleColumnBox>
      </MyFormProvider>
    </AsyncContent>
  );
};
