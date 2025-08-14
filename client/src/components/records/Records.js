import { useContext, useEffect } from "react";
import { workoutData } from "../../context/WorkoutContext";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./recordsStyle.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const Records = () => {
  const { user } = useAuthContext();
  const { workouts, getWorkout, deleteWorkout, setUpdateFormData } =
    useContext(workoutData);

  useEffect(() => {
    if (user) {
      getWorkout();
    }
  }, [user, getWorkout]);

  const toggleUpdate = (item) => {
    setUpdateFormData({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load,
    });
  };

  return (
    <div className="records">
      {workouts &&
        workouts.map((item) => (
          <div key={item._id} className="record">
            <h1>{item.title}</h1>
            <p>Reps: {item.reps}</p>
            <p>Load(in kg): {item.load}</p>
            <div className="btns">
              <button onClick={() => toggleUpdate(item)}>
                <GrUpdate className="icons" />
              </button>
              <button onClick={() => deleteWorkout(item._id)}>
                <RiDeleteBin6Line className="icons" />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Records;
