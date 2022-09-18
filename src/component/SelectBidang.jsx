import React from "react";

const dataBidang = [
  {
    id: 1,
    bidang: "Data Mining",
  },
  {
    id: 2,
    bidang: "ERP",
  },
  {
    id: 3,
    bidang: "IoT",
  },
  {
    id: 4,
    bidang: "Jaringan Komputer",
  },
  {
    id: 5,
    bidang: "Machine Learning",
  },
  {
    id: 6,
    bidang: "Mobile Programing",
  },
  {
    id: 7,
    bidang: "Pemrograman Web",
  },
  {
    id: 8,
    bidang: "Pengolahan Citra Digital",
  },
  {
    id: 9,
    bidang: "Sistem Cerdas",
  },
  {
    id: 10,
    bidang: "Sistem Informasi",
  },
  {
    id: 11,
    bidang: "Sistem Pakar",
  },
  {
    id: 12,
    bidang: "SPK",
  },
];

const SelectBidang = () => {
  return (
    <>
      <select name="bidang" id="bidang" className="form-select" required>
        {dataBidang.map((sets) => (
          <option key={sets.id} value={sets.bidang}>
            {sets.bidang}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBidang;
