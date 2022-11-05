import { AsyncContent } from "../../../../../../theme-code/components/loadable/AsyncContent";
import { DefaultReadOnlyTextField } from "../../../../../../theme-code/components/wrappers/ReadOnlyInputs/DefaultReadOnlyTextField";
import { RSingleColumnBox } from "../../../../../../theme-code/components/wrappers/RSingleColumnBox";
import { Tag } from "../../../models/Tag";

interface Props {
  tag: Tag | undefined;
  isLoading: boolean;
}

export const DetailsTagBody: React.FC<Props> = ({ tag, isLoading }) => {
  return (
    <AsyncContent isLoading={isLoading}>
      <RSingleColumnBox>
        <DefaultReadOnlyTextField value={tag?.id?.toString()} label="Id" />

        <DefaultReadOnlyTextField
          value={tag?.title?.toString()}
          label="Title"
        />

        <DefaultReadOnlyTextField
          value={tag?.description?.toString()}
          label="Description"
        />

        <DefaultReadOnlyTextField
          value={tag?.urlSlug?.toString()}
          label="Url Slug"
        />

        <DefaultReadOnlyTextField
          value={tag?.createdAt?.toString()}
          label="Created At"
        />

        <DefaultReadOnlyTextField
          value={tag?.updatedAt?.toString()}
          label="Updated At"
        />

        <DefaultReadOnlyTextField
          value={tag?.order?.toString()}
          label="Order"
        />
      </RSingleColumnBox>
    </AsyncContent>
  );
};
