import React from 'react';
import Navbar from '../components/Navbar';
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import axios from 'axios';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // import styles
import '../styles/contact.css';

gsap.registerPlugin(useGSAP);

function Contacts() {
  useGSAP(() => {
    gsap.fromTo(".Homecont", { height: 0, opacity: 0 }, { height: "100vh", opacity: 1, duration: 1 });
    gsap.fromTo("#input", { x: 101, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.2, delay: 1 });
    gsap.fromTo("#btn", { x: -101, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.2, delay: 1 });
    gsap.fromTo(".hee", { x: -1001, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, delay: 1 });
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://mern-backend-ee1e.onrender.com/addUser", data);
      toast.success(response.data.message || "Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Error adding user");
    }
  };

  return (
    <>
    <Navbar />
      <div className="Homecont">
      
      <div className="cont">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className="co">Contact</h2>

          <input
            id="input"
            placeholder="Enter Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <input
            type="email"
            id="input"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <textarea
            id="input"
            placeholder="Enter Your Message"
            rows={4}
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <p className="error">{errors.message.message}</p>}

          <input type="submit" id="btn" value="Send" />

          <p className="hee">More To Contact ▼</p>
          <div className="emo">
            <p className="do">
              <Mail /> <span>sahilsahu7816@gmail.com</span>
            </p>
            <p className="do">
              <Phone /> <a href="tel:9019274981">9019274981</a>
            </p>
            <p className="do">
              <Linkedin />
              <a
                href="https://www.linkedin.com/in/mohammed-hussain-484026260/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mohammed Hussain
              </a>
            </p>
            <p className="do">
              <Github />
              <a
                href="https://github.com/Mohammed-Hussain192"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mohammed-Hussain192
              </a>
            </p>
          </div>
        </form>

        <div className="join">
          <h1 className="j">Join us</h1>
          <p className="hee">
            "Alone we can do so little; together we can do so much." <br />
            – Helen Keller
          </p>
        </div>
      </div>

      {/* Add ToastContainer once in your app (here in this component is fine) */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="colored" 
      />
    </div>
    </>
  );
}

export default Contacts;
