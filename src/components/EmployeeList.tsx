import { useState } from "react";
import EmployeeModal from "./EmployeeModal";
import { IEmployee } from "./employeeType";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd : (data : IEmployee) => void;
  onEdit : (data : IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false)
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data :IEmployee) => {
    setDataToShow(data)
    setShowModal(true)
  }

  const onCloseModal = () =>
    setShowModal(false)

  return (
    <div>
      <div className="list-heading">
        <h3>Employee List</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        {list.map((employee) => {
          return (
            <tbody>
              <tr key={employee.id}>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.address}</td>
                <td>
                  <div className="actions-btn">
                    <input type="button" value="View" onClick={() => viewEmployee(employee)}/>
                    <input type="button" value="Edit" onClick={() => onEdit(employee)}/>
                    <input type="button" value="Delete" onClick={() => onDeleteClickHnd(employee)}/>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (<EmployeeModal onClose={onCloseModal} data={dataToShow}/> )}
    </div>
  );
};

export default EmployeeList;
