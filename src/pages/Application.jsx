// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { apiRequest } from "../utils";

// const Application = () => {
//   const { user } = useSelector((state) => state.user);
//   const [applications, setApplications] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchApplications = async (userId) => {
//       try {
//         const res = await apiRequest({
//           url: `/applications/${user._id}`, // Adjust the endpoint according to your backend API
//           token: user.token,
//           method: "GET",
//         });

//         if (res?.success) {
//           setApplications(res?.data);
//           console.log(data);
//         } else {
//           setError(res.message);
//         }
//       } catch (err) {
//         setError("Failed to fetch applications.");
//         console.log(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (user?.token) {
//       fetchApplications();
//     }
//   }, [user]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-5">
//       <h1 className="text-2xl font-bold mb-5">My Applications</h1>
//       {applications.length === 0 ? (
//         <p>You have not applied for any jobs yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {applications.map((application) => (
//             <div
//               key={application._id}
//               className="bg-white shadow-md p-4 rounded-md"
//             >
//               <h2 className="text-xl font-semibold">{application.jobTitle}</h2>
//               <p>{application.companyName}</p>
//               <p>{application.status}</p>{" "}
//               {/* Status can be 'Pending', 'Accepted', etc. */}
//               <Link
//                 to={`/job-detail/${application.jobId}`}
//                 className="text-blue-600 mt-2 block"
//               >
//                 View Job Details
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Application;
