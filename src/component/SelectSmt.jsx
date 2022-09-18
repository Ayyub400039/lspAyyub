const dataSmt = [
  {
    id: "1",
    label: "8",
    value: "Semester 8",
  },
  {
    id: "2",
    label: "9",
    value: "Semester 9",
  },
  {
    id: "3",
    label: "10",
    value: "Semester 10",
  },
  {
    id: "4",
    label: "11",
    value: "Semester 11",
  },
  {
    id: "5",
    label: "12",
    value: "Semester 12",
  },
  {
    id: "6",
    label: "13",
    value: "Semester 13",
  },
  {
    id: "7",
    label: "14",
    value: "Semester 14",
  },
];

export const SelectSemester = () => (
  <select name="semester" id="semester" className="form-select" required>
    {dataSmt.map((sets) => (
      <option key={sets.id} value={sets.label}>
        {sets.value}
      </option>
    ))}
  </select>
);
