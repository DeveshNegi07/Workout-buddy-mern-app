import { createContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export const workoutData = createContext();
const WorkoutContext = ({ children }) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const { user } = useAuthContext();
  //GET REQUEST STATE
  const [workouts, setWorkouts] = useState(null);
  //GET REQUEST FUNCTION
  const getWorkout = async () => {
    try {
      const response = await axios.get(`${url}/api/workouts`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setWorkouts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  //POST REQUEST STATE
  const [postFormData, setPostFormData] = useState({
    title: "",
    reps: "",
    load: "",
  });

  //DELETE FORM FUNCTION
  const deleteWorkout = async (id) => {
    try {
      await axios.delete(`${url}/api/workouts/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      getWorkout();
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };

  //UPDATE REQUEST STATE
  const [updateFormData, setUpdateFormData] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });

  return (
    <workoutData.Provider
      value={{
        workouts,
        setWorkouts,
        postFormData,
        setPostFormData,
        updateFormData,
        setUpdateFormData,
        getWorkout,
        deleteWorkout,
      }}
    >
      {children}
    </workoutData.Provider>
  );
};

export default WorkoutContext;
