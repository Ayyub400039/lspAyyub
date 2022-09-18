const dataTipe = [
  {
    id: "1",
    label: "Skripsi",
    value: "Skripsi",
  },
  {
    id: "2",
    label: "Komprehensif",
    value: "Komprehensif",
  },
  {
    id: "3",
    label: "Tesis",
    value: "Tesis",
  },
];

export const SelectTipe = () => (
  <select name="tipe" id="tipe" className="form-select" required>
    {dataTipe.map((sets) => (
      <option key={sets.id} value={sets.value}>
        {sets.label}
      </option>
    ))}
  </select>
);
