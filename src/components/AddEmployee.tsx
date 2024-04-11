import { useState } from "react";
import { IEmployee } from "./employeeType";

type Props = {
  onBackBtnClick: () => void;
  onSubmitClickHnd: (data : IEmployee) => void;
};

/* state area */
const AddEmployee = (props: Props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { onBackBtnClick, onSubmitClickHnd } = props;

  /* functions area */
  const onFirstnameChangeHnd = (e: any) => {
    setFirstname(e.target.value);
  };

  const onLastnameChangeHnd = (e: any) => {
    setLastname(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onPhoneChangeHnd = (e: any) => {
    setPhone(e.target.value);
  };

  const onAdressChangeHnd = (e: any) => {
    setAddress(e.target.value);
  };

  /* form submission event */
  const onSubmitBtnClickHnd = (e : any) => {
    e.preventDefault();
    const data : IEmployee = {
        id : new Date().toJSON().toString(),
        firstname : firstname,
        lastname : lastname,
        email : email,
        phone : phone,
        address : address,
    }
    onSubmitClickHnd(data);
    onBackBtnClick();
  };

  return (
    <div className="form-container">
      
      <div>
        <h3>Add Employee Form</h3>
      </div>

      <form className="add-form" onSubmit={onSubmitBtnClickHnd}>
        <div className="add-sec">
          <label>First Name : </label>
          <input
            type="text"
            value={firstname}
            onChange={onFirstnameChangeHnd}
          />
        </div>

        <div className="add-sec">
          <label>Last Name : </label>
          <input 
          type="text" 
          value={lastname} 
          onChange={onLastnameChangeHnd} 
          />
        </div>

        <div className="add-sec">
          <label>Email : </label>
          <input 
          type="email" 
          value={email} 
          onChange={onEmailChangeHnd}
          />
        </div>

        <div className="add-sec">
          <label>Phone : </label>
          <input 
          type="number" 
          value={phone} 
          onChange={onPhoneChangeHnd}
          />
        </div>

        <div className="add-sec">
          <label>Address : </label>
          <input 
          type="text" 
          value={address} 
          onChange={onAdressChangeHnd}
          />
        </div>

        <div className="add-btn">
          <button onClick={onBackBtnClick}><i className="fa-solid fa-arrow-left"></i>Back</button>
          <button>Add Employee <i className="fa-solid fa-check"></i></button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;