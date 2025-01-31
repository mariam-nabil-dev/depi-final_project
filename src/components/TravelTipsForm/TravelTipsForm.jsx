import { useState } from "react";
import "./TravelTipsForm.css";

const TravelTipsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.country) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thank you for subscribing!");
      setFormData({ name: "", email: "", country: "" }); // Clear form
      setErrors({});
    }
  };

  return (
    <div className="travel-tips position-relative bg-accent">
      <div className="container-fluid container-lg py-5 text-center ">
        <div className="d-flex position-relative align-items-center justify-content-center flex-wrap">
          <div className="col feature-img">
            <div className="d-flex justify-content-center gap-3">
              <img
                src={"src/assets/img/h1-rev-slide-1.png"}
                alt="Rev Slide 1"
                className="slide-1"
              />
              <img
                className="slide-2"
                src={"src/assets/img/h1-rev-slide-2.png"}
                alt="Rev Slide 2"
              />
            </div>
          </div>
          <div className="col subscribe text-muted text-start">
            <div>
              <h2 className="fw-light ">BEST MONEY-SAVING TRAVEL TIPS!</h2>
              <p>
                See how I helped real readers plan, save and{" "}
                <span className="text-decoration-underline">
                  go on the trip of a lifetime
                </span>
                .
              </p>
              <p>
                And get{" "}
                <span className="text-danger fst-normal">
                  actionable steps you can use to travel anywhere
                </span>{" "}
                — no matter your income or where you're from!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="row my-2 g-3 justify-content-center"
            >
              <div className="col-12 col-md-6 col-lg">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Name"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="col-12 col-md-6 col-lg">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="col-12 col-md-6 col-lg">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`form-select  ${
                    errors.country ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Select Country</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Brazil">Brazil</option>
                  <option value="India">India</option>
                </select>
                {errors.country && (
                  <div className="invalid-feedback">{errors.country}</div>
                )}
              </div>
              <div className="col-12 col-md-6 col-lg">
                <button type="submit" className="btn btn-dark text-white w-100">
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTipsForm;
