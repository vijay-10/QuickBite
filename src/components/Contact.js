import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({email: "", subject: "", message: ""});

  const success = () => {
    toast.success("Message sent!", {position: toast.POSITION.BOTTOM_CENTER});
  }
  const warning = () => {
    toast.warning("Please fill all the details!", {position: toast.POSITION.BOTTOM_CENTER});
  }


  const inputHandler = (id, data) => {
    if (id == "email") setContactInfo(prevState => ({...prevState, email: data}))
    else if (id == "subject") setContactInfo(prevState => ({...prevState, subject: data}))
    else setContactInfo(prevState => ({...prevState, message: data}))
  }

  const handleSubmit =(e) => {
    if (validateContactInfo(contactInfo)) {
      e.preventDefault();
      // do something with contactInfo state
      setContactInfo({email: "", subject: "", message: ""});
      success();
    }
    else {
      e.preventDefault();
      warning();
    }
  }

  const validateContactInfo = (contactInfo) => {
    if (contactInfo.email && contactInfo.subject && contactInfo.message) return true;
    else return false;
  }

  return (
    <div>
      <section className="bg-white">
        <div className="py-8 lg:py-6 px-4 mx-auto max-w-screen-md">
          <h1 className="mb-4 text-4xl font-bold text-center text-gray-600">
            Contact Us
          </h1>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-gray-600"
              >
                Your email:
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => inputHandler('email', e.target.value)}
                value={contactInfo.email}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@quickbite.com"
                />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-base font-medium text-gray-600"
                >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                onChange={(e) => inputHandler('subject', e.target.value)}
                value={contactInfo.subject}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                placeholder="Let us know how we can help you"
                />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-gray-600"
                >
                Your message:
              </label>
              <textarea
                id="message"
                rows="6"
                onChange={(e) => inputHandler('message', e.target.value)}
                value={contactInfo.message}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="py-3 px-5 text-sm font-bold text-center rounded-lg hover:bg-orange-400 hover:text-white bg-gray-200 text-gray-600 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
        <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default Contact;
