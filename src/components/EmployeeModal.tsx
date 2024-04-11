import { IEmployee } from "./employeeType";

type Props = {
    onClose : () => void;
    data : IEmployee
}

const EmployeeModal = (props : Props) => {
    const {onClose, data} = props;
  return (
    <>
      {/* <!-- The Modal --> */}
      <div id="myModal" className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <div>
            <h3 className="modal-heading">Employee Information</h3>
            <div className="modal-rows">
                <div>
                    <label>First Name : <span>{data.firstname}</span></label>
                </div>
                <div>
                    <label>Last Name : <span>{data.lastname}</span></label>
                </div>
                <div>
                    <label>Email : <span>{data.email}</span></label>
                </div>
                <div>
                    <label>Phone : <span>{data.phone}</span></label>
                </div>
                <div>
                    <label>Address : <span>{data.address}</span></label>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeModal;
