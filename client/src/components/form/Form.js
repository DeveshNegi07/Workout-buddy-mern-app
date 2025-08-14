import { useContext } from "react";
import axios from "axios";
import { workoutData } from "../../context/WorkoutContext";
import "./formStyle.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const Form = () => {
  const { user } = useAuthContext();
  const {
    updateFormData,
    postFormData,
    setPostFormData,
    getWorkout,
    setUpdateFormData,
  } = useContext(workoutData);

  const url = process.env.REACT_APP_BACKEND_URL;

  //POST FORM FUNCTION
  const handlePostFormChange = (e) => {
    const { name, value } = e.target;
    setPostFormData({ ...postFormData, [name]: value });
  };
  const postWorkout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/api/workouts`, postFormData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setPostFormData({
        title: "",
        reps: "",
        load: "",
      });
      getWorkout();
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  //UPDATE FORM FUNCTION
  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData({ ...updateFormData, [name]: value });
  };

  const updateWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateFormData;
    try {
      await axios.patch(
        `${url}/api/workouts/${_id}`,
        {
          title,
          reps,
          load,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setUpdateFormData({ _id: null, title: "", reps: "", load: "" });
      getWorkout();
    } catch (error) {}
  };

  return (
    <>
      <div className="form">
        {updateFormData._id ? (
          //update form
          <>
            <h1>Edit Record</h1>
            <form onSubmit={updateWorkout}>
              <div className="field">
                <label htmlFor="">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={updateFormData.title}
                  onChange={handleUpdateFieldChange}
                />
              </div>
              <div className="field">
                <label htmlFor="">Reps:</label>
                <input
                  type="number"
                  name="reps"
                  value={updateFormData.reps}
                  onChange={handleUpdateFieldChange}
                />
              </div>
              <div className="field">
                <label htmlFor="">Load(in kg):</label>
                <input
                  type="number"
                  name="load"
                  value={updateFormData.load}
                  onChange={handleUpdateFieldChange}
                />
              </div>
              <button type="submit">Update</button>
            </form>
          </>
        ) : (
          //Create form
          <>
            <h1>Create Record</h1>
            <form onSubmit={postWorkout}>
              <div className="field">
                <label htmlFor="">Title:</label>
                <input
                  type="text"
                  name="title"
                  onChange={handlePostFormChange}
                  value={postFormData.title}
                />
              </div>
              <div className="field">
                <label htmlFor="">Reps:</label>
                <input
                  type="number"
                  name="reps"
                  onChange={handlePostFormChange}
                  value={postFormData.reps}
                />
              </div>
              <div className="field">
                <label htmlFor="">Load(in kg):</label>
                <input
                  type="number"
                  name="load"
                  onChange={handlePostFormChange}
                  value={postFormData.load}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Form;
