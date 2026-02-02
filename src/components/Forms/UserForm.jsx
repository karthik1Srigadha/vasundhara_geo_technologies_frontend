import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", id: "", password: ""
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const validate = () => {
    let err = {};
    if (!formData.name) err.name = "Required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Invalid Email";
    if (!formData.id) err.id = "Required";
    if (!formData.password) err.password = "Required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(formData);
    setFormData({ name: "", email: "", id: "", password: "" });
  };

  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-xl font-bold">User Form</h2>

      <form onSubmit={submit}>
        {["name", "email", "id"].map(field => (
          <div key={field}>
            <input
              className="border p-1 w-full mt-2"
              placeholder={field}
              value={formData[field]}
              onChange={e =>
                setFormData({ ...formData, [field]: e.target.value })
              }
            />
            <p className="text-red-500">{errors[field]}</p>
          </div>
        ))}

        <input
          type={show ? "text" : "password"}
          className="border p-1 w-full mt-2"
          placeholder="Password"
          value={formData.password}
          onChange={e =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
        <p className="text-red-500">{errors.password}</p>

        <button className="bg-green-500 text-white px-3 mt-2">
          Submit
        </button>
      </form>

      {submitted && (
        <pre className="bg-gray-100 mt-3 p-2">
          {JSON.stringify(submitted, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default UserForm;
