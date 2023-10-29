import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const nodes = [
  {
    id: "0",
    room_no: "101",
    type: "single",
  },
  {
    id: "1",
    room_no: "102",
    type: "single",
  },
  {
    id: "2",
    room_no: "103",
    type: "double",
  },
];

const COLUMNS = [
  { label: "Room No", renderCell: (item) => item.room_no },
  { label: "Room Type", renderCell: (item) => item.type },
];

export const RoomTable = () => {
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
