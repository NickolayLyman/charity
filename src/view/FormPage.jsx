import Form from '../components/Form/Form';

const FormPage = () => {
  const formSubmit = event => {
    event.preventDefault();
  };
  return <Form formSubmit={formSubmit} />;
};
export default FormPage;
