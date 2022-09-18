import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { SelectTipe } from "../component/SelectTipe";
import { SelectSemester } from "../component/SelectSmt";
import SelectBidang from "../component/SelectBidang";

const FormSkripsi = () => {
  const { user } = useSelector((state) => state.auth);
  // script for input data to spreadsheet
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbw24tEZ7fQCe7wHdjeCaSl0FV9IHIH2_W7uxiY96BRUFbT8lBD6SFxn39hhb50TbfSW/exec";
  // create statement
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputEdit, setEdit] = useState({ nama: "", email: "" });

  // function input data
  const handleInput = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        toast.success("Data Berhasil Diinput", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  // reset field judul skripsi
  const handleFields = (eve) => {
    setInputValue(eve.target.value);
  };
  const resetField = () => {
    setInputValue("");
  };
  // edit inputan yang sudah terisi
  const inputanEdit = (b) => {
    setEdit({ ...inputEdit, [b.target.name]: b.target.value });
  };

  let current = new Date();
  let cDate =
    current.getDate() +
    "/" +
    (current.getMonth() + 1) +
    "/" +
    current.getFullYear();

  let cTime =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();
  let currDate = cDate + " - " + cTime;

  return (
    <div className="form-skripsi">
      <form
        className="form-container"
        ref={formRef}
        onSubmit={handleInput}
        name="google-sheet"
      >
        <div className="form-input hidden">
          <label htmlFor="tglInput">Waktu Input</label>
          <input type="text" name="tglInput" id="tglInput" value={currDate} />
        </div>
        <div className="form-input">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            name="nama"
            id="nama"
            defaultValue={user.displayName}
            onChange={inputanEdit}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={user.email}
            onChange={inputanEdit}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="nim">Nim</label>
          <input type="text" name="nim" id="nim" placeholder="" required />
        </div>
        <div className="form-input">
          <label htmlFor="kelas">Kelas</label>
          <input type="text" name="kelas" id="kelas" placeholder="" required />
        </div>
        <div className="form-input">
          <label htmlFor="semester">Semester</label>
          <SelectSemester />
        </div>
        <div className="form-input">
          <label htmlFor="tipe">Bentuk TA.</label>
          <SelectTipe />
        </div>
        <div className="form-input">
          <label htmlFor="tipe">Bidang TA.</label>
          <SelectBidang />
        </div>
        <div className="form-input">
          <label htmlFor="judul">Judul Skripsi</label>
          <textarea
            type="text"
            name="judul"
            id="judul"
            rows="2"
            onChange={handleFields}
            value={inputValue}
            required
          ></textarea>
        </div>
        <div className="form-btn">
          <input type="reset" onClick={resetField} />
          <input
            type="button"
            onClick={resetField}
            value="Masukkan Judul Lain.."
          />
          <input type="submit" value={loading ? "Loading..." : "Kirim"} />
        </div>
      </form>
    </div>
  );
};

export default FormSkripsi;
