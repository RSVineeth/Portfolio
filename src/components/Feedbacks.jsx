// // /* eslint-disable react/no-unescaped-entities */
// // /* eslint-disable react-refresh/only-export-components */
// // // /* eslint-disable react/prop-types */
// // // /* eslint-disable react-refresh/only-export-components */

// // // import React from "react";
// // // import { motion } from "framer-motion";

// // // import { styles } from "../styles";
// // // import { SectionWrapper } from "../hoc";
// // // import { fadeIn, textVariant } from "../utils/motion";
// // // import { testimonials } from "../constants";

// // // const FeedbackCard = ({
// // //   index,
// // //   testimonial,
// // //   name,
// // //   designation,
// // //   company,
// // //   image,
// // // }) => (
// // //   <motion.div
// // //     variants={fadeIn("", "spring", index * 0.5, 0.75)}
// // //     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
// // //   >
// // //     <p className='text-white font-black text-[48px]'>"</p>

// // //     <div className='mt-1'>
// // //       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

// // //       <div className='mt-7 flex justify-between items-center gap-1'>
// // //         <div className='flex-1 flex flex-col'>
// // //           <p className='text-white font-medium text-[16px]'>
// // //             <span className='blue-text-gradient'>@</span> {name}
// // //           </p>
// // //           <p className='mt-1 text-secondary text-[12px]'>
// // //             {designation} of {company}
// // //           </p>
// // //         </div>

// // //         <img
// // //           src={image}
// // //           alt={`feedback_by-${name}`}
// // //           className='w-10 h-10 rounded-full object-cover'
// // //         />
// // //       </div>
// // //     </div>
// // //   </motion.div>
// // // );

// // // const Feedbacks = () => {
// // //   return (
// // //     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
// // //       <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
// // //         <motion.div variants={textVariant()}>
// // //           <p className={styles.sectionSubText}>What others say</p>
// // //           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
// // //         </motion.div>
// // //       </div>
// // //       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
// // //         {testimonials.map((testimonial, index) => (
// // //           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SectionWrapper(Feedbacks, "");

// // import React, { useRef, useState } from "react";
// // import { motion } from "framer-motion";
// // import toast from 'react-hot-toast'


// // import { styles } from "../styles";
// // import { SectionWrapper } from "../hoc";
// // import { fadeIn, textVariant } from "../utils/motion";
// // // import { testimonials } from "../constants";

// // const FeedbackCard = ({ index, onSubmitFeedback }) => {
// //   const [userFeedback, setUserFeedback] = useState({
// //     name: "",
// //     profession: "",
// //     feedback: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserFeedback({ ...userFeedback, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSubmitFeedback(userFeedback);
// //     setUserFeedback({
// //       name: "",
// //       profession: "",
// //       feedback: "",
// //     });
// //   };


// //   return (
// //     <motion.div
// //       variants={fadeIn("", "spring", index * 0.5, 0.75)}
// //       className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
// //     >
// //       <p className='text-white font-black text-[48px]'>"</p>

// //       <div className='mt-1'>
// //         <p className='text-white tracking-wider text-[18px]'>Leave your feedback:</p>

// //         <form
// //           onSubmit={handleSubmit}
// //           className='mt-12 flex flex-col gap-8'
// //         >
// //           <label className='flex flex-col'>
// //             <span className='text-white font-medium mb-4'>Your Name</span>
// //             <input
// //               type='text'
// //               name='name'
// //               onChange={handleChange}
// //               placeholder="What's your good name?"
// //               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
// //             />
// //           </label>
// //           <label className='flex flex-col'>
// //             <span className='text-white font-medium mb-4'>Your Profession</span>
// //             <input
// //               type='text'
// //               name='profession'
// //               onChange={handleChange}
// //               placeholder="What's your Profession"
// //               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
// //             />
// //           </label>
// //           <label className='flex flex-col'>
// //             <span className='text-white font-medium mb-4'>Your Message</span>
// //             <textarea
// //               rows={7}
// //               name='message'
// //               onChange={handleChange}
// //               placeholder='Feedback Please?'
// //               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
// //             />
// //           </label>

// //           <button
// //             type='submit'
// //             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
// //           >
// //             Submit
// //           </button >
// //         </form>

// //       </div>
// //     </motion.div>
// //   );
// // };

// // const Feedbacks = () => {
// //   const [allFeedbacks, setAllFeedbacks] = useState([]);

// //   const onSubmitFeedback = (userFeedback) => {
// //     // Handle submission logic here, such as sending feedback to server or updating state
// //     console.log("User Feedback:", userFeedback);
// //     setAllFeedbacks([...allFeedbacks, userFeedback]);
// //   };

// //   return (
// //     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
// //       <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
// //         <motion.div variants={textVariant()}>
// //           <p className={styles.sectionSubText}>What others say</p>
// //           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
// //         </motion.div>
// //       </div>
// //       {/* <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
// //         {testimonials.map((testimonial, index) => (
// //           <FeedbackCard
// //             key={testimonial.name}
// //             index={index}
// //             onSubmitFeedback={onSubmitFeedback}
// //           />
// //         ))}
// //       </div> */}
// //       <FeedbackCard/>

// //       {/* Display all feedbacks */}
// //       <div className="all-feedbacks">
// //         {allFeedbacks.map((feedback, index) => (
// //           <div key={index} className="user-feedback">
// //             <p>{feedback.name}</p>
// //             <p>{feedback.profession}</p>
// //             <p>{feedback.feedback}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };



// // export default SectionWrapper(Feedbacks, "");

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "../axios";
// import toast from "react-hot-toast";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const FeedbackCard = ({ index, onSubmitFeedback }) => {
//   const [userFeedback, setUserFeedback] = useState({
//     name: "",
//     profession: "",
//     feedback: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserFeedback({ ...userFeedback, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("/feed", userFeedback)
//       .then(() => {
//         console.log("Feedback is submitted");
//         toast.success("Thank you for giving Feedback");
//         onSubmitFeedback(userFeedback);
//         setUserFeedback({
//           name: "",
//           profession: "",
//           feedback: "",
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <motion.div
//       variants={fadeIn("", "spring", index * 0.5, 0.75)}
//       className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full mt-10'
//     >
//       <p className='text-white font-black text-[48px]'>"</p>

//       <div className='mt-1'>
//         <p className='text-white tracking-wider text-[18px]'>Leave your feedback:</p>

//         <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={userFeedback.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Profession</span>
//             <input
//               type='text'
//               name='profession'
//               value={userFeedback.profession}
//               onChange={handleChange}
//               placeholder="What's your Profession"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={5}
//               name='feedback'
//               value={userFeedback.feedback}
//               onChange={handleChange}
//               placeholder='Feedback Please?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// const Feedbacks = () => {
//   const [allFeedbacks, setAllFeedbacks] = useState([]);

//   useEffect(() => {
//     axios.get("/feed")
//     .then((response) => {
//       setAllFeedbacks(response.data)
//     })
//     .catch((error) => {
//       console.error("Error fetching feedbacks", error);
//     })
//   }, []);

//   const onSubmitFeedback = (userFeedback) => {
//     console.log("User Feedback:", userFeedback);
//     axios
//       .post("/feed", userFeedback) // Replace "/api/feedback" with your actual API endpoint
//       .then(() => {
//         console.log("Feedback is submitted to the server");
//         setAllFeedbacks([...allFeedbacks, userFeedback]);
//         localStorage.setItem("feedbacks", JSON.stringify([...allFeedbacks, userFeedback]));
//         toast.success("Thank you for giving Feedback");
//       })
//       .catch((error) => {
//         console.error("Error submitting feedback to the server:", error);
//       });
//   };

//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px] flex flex-col md:flex-row`}>
//       <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex-1`}>
//         <motion.div variants={textVariant()} className='p-4'>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//         <div className="flex-1 flex flex-col md:flex-row">
//           <div className="md:w-1/2">
//             <FeedbackCard onSubmitFeedback={onSubmitFeedback} />
//           </div>

//           {/* Display all feedbacks */}
//           <div className="all-feedbacks md:w-1/2 mt-10 md:mt-0">
//             {allFeedbacks.slice(-3).map((feedback, index) => (
//               <div key={index} className="user-feedback bg-black-200 p-4 rounded-xl mb-4 mt-10">
//                 <p className='text-white font-black text-[48px]'>"</p>
//                 <div className='mt-1'>
//                   {/* Display feedback information */}
//                   <p className='text-white tracking-wider text-[18px]'>{feedback.feedback}</p>
//                   <div className='mt-7 flex justify-between items-center gap-1'>
//                     <div className='flex-1 flex flex-col'>
//                       <p className='text-white font-medium text-[16px]'>
//                         <span className='blue-text-gradient'>@</span> {feedback.name}
//                       </p>
//                       <p className='mt-1 text-secondary text-[12px]'>
//                         {feedback.profession}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default SectionWrapper(Feedbacks, "");


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const FeedbackCard = ({ index, onSubmitFeedback }) => {
//   const [userFeedback, setUserFeedback] = useState({
//     name: "",
//     profession: "",
//     feedback: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserFeedback({ ...userFeedback, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmitFeedback(userFeedback);
//     setUserFeedback({
//       name: "",
//       profession: "",
//       feedback: "",
//     });
//     toast.success("Thank you for giving Feedback");
//   };

//   return (
//     <motion.div
//       variants={fadeIn("", "spring", index * 0.5, 0.75)}
//       className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full mt-10'
//     >
//       <p className='text-white font-black text-[48px]'>"</p>

//       <div className='mt-1'>
//         <p className='text-white tracking-wider text-[18px]'>Leave your feedback:</p>

//         <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={userFeedback.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Profession</span>
//             <input
//               type='text'
//               name='profession'
//               value={userFeedback.profession}
//               onChange={handleChange}
//               placeholder="What's your Profession"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={5}
//               name='feedback'
//               value={userFeedback.feedback}
//               onChange={handleChange}
//               placeholder='Feedback Please?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// const Feedbacks = () => {
//   const [allFeedbacks, setAllFeedbacks] = useState([]);

//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px] flex flex-col md:flex-row`}>
//       <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex-1`}>
//         <motion.div variants={textVariant()} className='p-4'>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//         <div className="flex-1 flex flex-col md:flex-row">
//           <div className="md:w-1/2">
//             <FeedbackCard onSubmitFeedback={(feedback) => {
//               setAllFeedbacks([...allFeedbacks, feedback]);
//               localStorage.setItem("feedbacks", JSON.stringify([...allFeedbacks, feedback]));
//             }} />
//           </div>

//           {/* Display all feedbacks */}
//           <div className="all-feedbacks md:w-1/2 mt-10 md:mt-0">
//             {allFeedbacks.slice(-3).map((feedback, index) => (
//               <div key={index} className="user-feedback bg-black-200 p-4 rounded-xl mb-4 mt-10">
//                 <p className='text-white font-black text-[48px]'>"</p>
//                 <div className='mt-1'>
//                   {/* Display feedback information */}
//                   <p className='text-white tracking-wider text-[18px]'>{feedback.feedback}</p>
//                   <div className='mt-7 flex justify-between items-center gap-1'>
//                     <div className='flex-1 flex flex-col'>
//                       <p className='text-white font-medium text-[16px]'>
//                         <span className='blue-text-gradient'>@</span> {feedback.name}
//                       </p>
//                       <p className='mt-1 text-secondary text-[12px]'>
//                         {feedback.profession}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default SectionWrapper(Feedbacks, "");


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const initialFeedbacks = [
  {
    "name": "Shiva",
    "profession": "Student",
    "feedback": "Excellent Work ...!",
    "id": "0c07"
  },
  {
    "id": "9886",
    "name": "Nithin",
    "profession": "Student",
    "feedback": "Well Done Bro ...!\nIf possible teach me Also bro. \n"
  },
  {
    "id": "9886",
    "name": "Amma",
    "profession": "Mother",
    "feedback": "Baa chesavu Banagaram"
  }
];

const FeedbackCard = ({ index, onSubmitFeedback }) => {
  const [userFeedback, setUserFeedback] = useState({
    name: "",
    profession: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFeedback({ ...userFeedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFeedback(userFeedback);
    setUserFeedback({
      name: "",
      profession: "",
      feedback: "",
    });
    toast.success("Thank you for giving Feedback");
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full mt-10'
    >
      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>Leave your feedback:</p>

        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={userFeedback.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Profession</span>
            <input
              type='text'
              name='profession'
              value={userFeedback.profession}
              onChange={handleChange}
              placeholder="What's your Profession"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name='feedback'
              value={userFeedback.feedback}
              onChange={handleChange}
              placeholder='Feedback Please?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const [allFeedbacks, setAllFeedbacks] = useState(initialFeedbacks.slice(-3));

  useEffect(() => {
    // Save initial feedbacks to localStorage
    localStorage.setItem("feedbacks", JSON.stringify(initialFeedbacks));
  }, []);

  const onSubmitFeedback = (newFeedback) => {
    setAllFeedbacks(prevFeedbacks => {
      if (prevFeedbacks.length < 3) {
        return [...prevFeedbacks, newFeedback];
      } else {
        return [...prevFeedbacks.slice(1), newFeedback];
      }
    });
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] flex flex-col md:flex-row`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex-1`}>
        <motion.div variants={textVariant()} className='p-4'>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <FeedbackCard onSubmitFeedback={onSubmitFeedback} />
          </div>

          {/* Display all feedbacks */}
          <div className="all-feedbacks md:w-1/2 mt-10 md:mt-0">
            {allFeedbacks.map((feedback, index) => (
              <div key={index} className="user-feedback bg-black-200 p-4 rounded-xl mb-4 mt-10">
                <p className='text-white font-black text-[48px]'>"</p>
                <div className='mt-1'>
                  {/* Display feedback information */}
                  <p className='text-white tracking-wider text-[18px]'>{feedback.feedback}</p>
                  <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex-1 flex flex-col'>
                      <p className='text-white font-medium text-[16px]'>
                        <span className='blue-text-gradient'>@</span> {feedback.name}
                      </p>
                      <p className='mt-1 text-secondary text-[12px]'>
                        {feedback.profession}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

