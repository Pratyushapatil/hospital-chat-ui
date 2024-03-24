import "./Dashboard.style.css";

const Dashboard = () => {
  const handleAddMemberClick = () => {
    // Logic to handle adding a member
    console.log("Add member clicked");
  };
  const handleAddPatientClick = () => {
    // Logic to handle adding a patient
    console.log("Add patient clicked");
  };
  const handleUpdateBedClick = () => {
    // Logic to handle Update bed number
    console.log("Update Bed clicked");
  };
  const handleDeleteMemberClick = () => {
    // Logic to handle Delete Member number
    console.log("Delete Member clicked");
  };
  const handleDeletePatientRecordClick = () => {
    // Logic to handle Delete Patient number
    console.log("Delete Patient clicked");
  };

  //});

  /*const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
*/

  return (
    <div>
      <title>Dashboard</title>
      <form>
        <div>
          <h2>Welcome to Kaushyalya Hospital Committee Chat forum</h2>
        </div>
        <div>
          <button type="button" onClick={handleAddMemberClick}>
            Add Member
          </button>
          <button type="button" onClick={handleAddPatientClick}>
            Add Patient
          </button>
          <button type="button" onClick={handleUpdateBedClick}>
            Update Bed Number
          </button>
          <button type="button" onClick={handleDeleteMemberClick}>
            Delete Member
          </button>
          <button type="button" onClick={handleDeletePatientRecordClick}>
            Delete Patient Record
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
