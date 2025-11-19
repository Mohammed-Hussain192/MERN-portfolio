import React, { useState } from 'react';
import Navbar from '../components/Navbar';
<<<<<<< HEAD
import { Phone, Mail, Linkedin, Github, Loader } from "lucide-react";
=======
import { Phone, Mail, Linkedin, Github } from "lucide-react";
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16
import axios from 'axios';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css';
<<<<<<< HEAD
import Particles from '../components/Orb';
=======
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16

gsap.registerPlugin(useGSAP);

function Contacts() {
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
  const [loading, setLoading] = useState(false); // ✅ New state for button loading
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16

  useGSAP(() => {
    gsap.fromTo(".Homecont", { height: 0, opacity: 0 }, { height: "100vh", opacity: 1, duration: 1 });
    gsap.fromTo("#input", { x: 101, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.2, delay: 1 });
    gsap.fromTo("#btn", { x: -101, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.2, delay: 1 });
    gsap.fromTo(".hee", { x: -1001, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, delay: 1 });
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
<<<<<<< HEAD
    setIsSubmitting(true);
=======
    setLoading(true); // Start loading
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16
    try {
      const response = await axios.post("https://mern-backend-ee1e.onrender.com/addUser", data);
      toast.success(response.data.message || "Message sent successfully!");
      reset();
    } catch (error) {
<<<<<<< HEAD
      toast.error(error.response?.data?.message || "Error sending message");
    } finally {
      setIsSubmitting(false);
    }
=======
      toast.error("Error adding user");
    }
    setLoading(false); // Stop loading
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16
  };

  return (
    <>
      <Navbar />
      <div className="Homecont">
<<<<<<< HEAD
        <div className="orb-container">
          <Particles
            particleColors={['#000000ff', '#ff1212ff']}
            particleCount={700}
            particleSpread={10}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        
=======
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16
        <div className="cont">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2 className="co">Contact</h2>

            <input
              id="input"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
<<<<<<< HEAD
              disabled={isSubmitting}
=======
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16
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
<<<<<<< HEAD
              disabled={isSubmitting}
=======
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <textarea
              id="input"
              placeholder="Enter Your Message"
              rows={4}
              {...register("message", { required: "Message is required" })}
<<<<<<< HEAD
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}

            <button 
              type="submit" 
              id="btn" 
              disabled={isSubmitting}
              className={isSubmitting ? "submitting" : ""}
            >
              {isSubmitting ? (
                <>
                  <Loader className="spinner" />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
=======
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}

            <input
              type="submit"
              id="btn"
              value={loading ? "Sending..." : "Send"} // ✅ Change text based on state
              disabled={loading} // ✅ Disable button while loading
            />
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16

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

<<<<<<< HEAD
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
=======
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
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16
        />
      </div>
    </>
  );
}

<<<<<<< HEAD
export default Contacts;
=======
export default Contacts;
>>>>>>> fa494cbc4902e97cf30b85876b88915333e7db16
