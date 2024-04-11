import { useState } from "react";
import { IEmployee } from "./employeeType";

type Props = {
    data: IEmployee;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd : (data : IEmployee) => void;
}

const EditEmployee = (props: Props) => {
    const {data, onBackBtnClickHnd, onUpdateClickHnd} = props;

    /* state area */
    const [firstname, setFirstname] = useState(data.firstname);
    const [lastname, setLastname] = useState(data.lastname);
    const [email, setEmail] = useState(data.email);
    const [phone, setPhone] = useState(data.phone);
    const [address, setAddress] = useState(data.address);

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
    const updatedData : IEmployee = {
        id : data.id,
        firstname : firstname,
        lastname : lastname,
        email : email,
        phone : phone,
        address : address,
    }
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };
  

    return (
        <div className="form-container">
      
      <div>
        <h3>Employee Edit Form</h3>
      </div>

      <form onSubmit={onSubmitBtnClickHnd}>
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
          <button onClick={onBackBtnClickHnd}><i className="fa-solid fa-arrow-left"></i> Back</button>
          <button>Update Employee <i className="fa-solid fa-check"></i></button>
        </div>
      </form>
    </div>
    )
}

export default EditEmployee;