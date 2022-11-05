import React from "react";
import { Card } from "../../../app/components/Card";
import { NumberField } from "../wrappers/inputs/NumberField";
import { TextField } from "../wrappers/inputs/TextField";

interface Props {
  isLoading: boolean;
  errorMessage?: string;
  tableLabels: TableLabel[];
  title?: string;
  subheader?: string;
  tableHeaderComponent?: React.ReactNode;
  tableBodyComponent: React.ReactNode;
  currentPage: number;
  totalCount: number | undefined;
  itemsPerPage: number;
  orderBy?: string;
  isAscending?: boolean;
  onPageChangeHandler: (page: number) => void;
  onChangeItemsPerPageHandler: (itemsPerPage: number) => void;
  sortByHandler?: (sortBy: string) => void;
  ascendingOrderHandler?: (isAscending: boolean) => void;
}

export interface TableLabel {
  id: string;
  label: string;
  sortable?: boolean;
}

export const GenericPaginableTable: React.FC<Props> = ({
  isLoading,
  errorMessage,
  tableLabels,
  title = "",
  subheader = "",
  tableHeaderComponent: tableHeaerComponent,
  tableBodyComponent,

  itemsPerPage,
  isAscending,
  totalCount,
  currentPage,
  orderBy,
  sortByHandler,
  ascendingOrderHandler,
  onPageChangeHandler,
  onChangeItemsPerPageHandler,
  ...other
}) => {
  const numberOfPages = totalCount ? Math.ceil(totalCount / itemsPerPage) : 0;
  const [dense, setDense] = React.useState(true);

  const onPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPageChangeHandler(e.target.value ? parseInt(e.target.value) : 0);
  };
  const onChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };
  const onChangeItemsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeItemsPerPageHandler(parseInt(event.target.value, 10));
  };

  return (
    <Card {...other}>
      {tableHeaerComponent}

      <div className="flex flex-col mt-4">
        <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableLabels.map((label) => (
                  <td
                    key={label.id}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {label.label}
                  </td>
                ))}
              </tr>
            </thead>
            {tableBodyComponent}
          </table>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="flex flex-row items-center">
            <NumberField
              label="Rows per page"
              name="itemsPerPage"
              value={itemsPerPage}
              onChange={onChangeItemsPerPage}
            />
          </div>
          <div className="flex flex-row items-center ml-4">
            <span className="mr-2">Dense padding</span>
            <input type="checkbox" checked={dense} onChange={onChangeDense} />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center">
            <span className="mr-2">Page:</span>
            <NumberField
              label="Page"
              name="page"
              value={numberOfPages}
              onChange={onPageChange}
            />
            <span className="mx-2">of</span>
            <span>{numberOfPages}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
