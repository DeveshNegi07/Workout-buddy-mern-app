import Form from "../../components/form/Form";
import Records from "../../components/records/Records";
import "./homeStyle.css";

const Home = () => {
  return (
    <section className="home-section">
      <Records />
      <Form />
    </section>
  );
};

export default Home;
