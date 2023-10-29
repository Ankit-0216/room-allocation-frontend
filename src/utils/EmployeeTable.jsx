import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const nodes = [
  {
    id: "0",
    empId: "NTE-778",
    name: "Ankit Kumar Sethi",
  },
  {
    id: "1",
    empId: "NTE-779",
    name: "Test Employee 1",
  },
  {
    id: "2",
    empId: "NTE-780",
    name: "Test Employee 2",
  },
];

const COLUMNS = [
  { label: "Employee ID", renderCell: (item) => item.empId },
  { label: "Name", renderCell: (item) => item.name },
];

export const EmployeeTable = () => {
  const data = { nodes };
  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background-color: #eaf5fd;
      `,
      Row: `
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
        }
      `,
    },
  ]);

  return <CompactTable columns={COLUMNS} data={data} theme={theme} />;
};
