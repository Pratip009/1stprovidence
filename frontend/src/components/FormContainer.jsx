// eslint-disable-next-line react/prop-types
const FormContainer = ({ children }) => {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
