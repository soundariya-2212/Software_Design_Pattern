// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Typography,
// //   CircularProgress,
// //   Button,
// //   Snackbar,
// //   Alert
// // } from '@mui/material';

// // const EnrollmentComponent = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [snackbarMessage, setSnackbarMessage] = useState('');
// //   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get('/api/courses');
// //         setCourses(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching course data:', error);
// //         setLoading(false);
// //       }
// //     };

// //     const fetchUserId = () => {
// //       // Retrieve user ID from localStorage
// //       const id = localStorage.getItem('userId');
// //       if (id) {
// //         setUserId(id);
// //       } else {
// //         console.warn('User ID not found in local storage');
// //       }
// //     };

// //     fetchCourses();
// //     fetchUserId();
// //   }, []);

// //   const handleEnroll = async (courseId) => {
// //     if (userId) {
// //       try {
// //         await axios.post('/enroll', null, {
// //           params: {
// //             courseID: courseId,
// //             userID: userId
// //           }
// //         });

// //         setSnackbarMessage('Enrollment successful!');
// //         setSnackbarSeverity('success');
// //       } catch (error) {
// //         setSnackbarMessage('Error enrolling in course.');
// //         setSnackbarSeverity('error');
// //         console.error('Error enrolling in course:', error.response ? error.response.data : error.message);
// //       } finally {
// //         setOpenSnackbar(true);
// //       }
// //     } else {
// //       setSnackbarMessage('User not logged in.');
// //       setSnackbarSeverity('error');
// //       setOpenSnackbar(true);
// //     }
// //   };

// //   const handleCloseSnackbar = () => {
// //     setOpenSnackbar(false);
// //   };

// //   if (loading) {
// //     return <CircularProgress />;
// //   }

// //   return (
// //     <div style={{ padding: '16px' }}>
// //       <Typography variant="h4" gutterBottom>Available Courses</Typography>
      
// //       <TableContainer component={Paper} style={{ marginTop: '16px' }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Title</TableCell>
// //               <TableCell>Category</TableCell>
// //               <TableCell>Difficulty Level</TableCell>
// //               <TableCell>Syllabus</TableCell>
// //               <TableCell>Schedule</TableCell>
// //               <TableCell>Prerequisites</TableCell>
// //               <TableCell>Action</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {courses.map((course) => (
// //               <TableRow key={course.id}>
// //                 <TableCell>{course.title}</TableCell>
// //                 <TableCell>{course.category}</TableCell>
// //                 <TableCell>{course.difficultyLevel}</TableCell>
// //                 <TableCell>{course.syllabus}</TableCell>
// //                 <TableCell>{course.schedule}</TableCell>
// //                 <TableCell>{course.prerequisites}</TableCell>
// //                 <TableCell>
// //                   <Button
// //                     variant="contained"
// //                     color="primary"
// //                     onClick={() => handleEnroll(course.id)}
// //                     style={{ marginTop: '8px' }}
// //                   >
// //                     Enroll
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
// //         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
// //           {snackbarMessage}
// //         </Alert>
// //       </Snackbar>
// //     </div>
// //   );
// // };

// // export default EnrollmentComponent;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Typography,
// //   CircularProgress,
// //   Button,
// //   Snackbar,
// //   Alert
// // } from '@mui/material';

// // const EnrollmentComponent = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [snackbarMessage, setSnackbarMessage] = useState('');
// //   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get('/api/courses');
// //         setCourses(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching course data:', error);
// //         setLoading(false);
// //       }
// //     };

// //     const fetchUserId = () => {
// //       // Retrieve user ID from localStorage
// //       const id = localStorage.getItem('userId');
// //       if (id) {
// //         setUserId(id);
// //       } else {
// //         console.warn('User ID not found in local storage');
// //       }
// //     };

// //     fetchCourses();
// //     fetchUserId();
// //   }, []);

// //   const handleEnroll = async (courseId) => {
// //     if (userId) {
// //       try {
// //         await axios.post('http://localhost:8080/enroll', null, {
// //           params: {
// //             courseID: courseId,
// //             userID: userId
// //           }
// //         });
// //         setSnackbarMessage('Enrollment successful!');
// //         setSnackbarSeverity('success');
// //       } catch (error) {
// //         setSnackbarMessage('Error enrolling in course.');
// //         setSnackbarSeverity('error');
// //         console.error('Error enrolling in course:', error.response ? error.response.data : error.message);
// //       } finally {
// //         setOpenSnackbar(true);
// //       }
// //     } else {
// //       setSnackbarMessage('User not logged in.');
// //       setSnackbarSeverity('error');
// //       setOpenSnackbar(true);
// //     }
// //   };

// //   const handleCloseSnackbar = () => {
// //     setOpenSnackbar(false);
// //   };

// //   if (loading) {
// //     return <CircularProgress />;
// //   }

// //   return (
// //     <div style={{ padding: '16px' }}>
// //       <Typography variant="h4" gutterBottom>Available Courses</Typography>
      
// //       <TableContainer component={Paper} style={{ marginTop: '16px' }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Title</TableCell>
// //               <TableCell>Category</TableCell>
// //               <TableCell>Difficulty Level</TableCell>
// //               <TableCell>Syllabus</TableCell>
// //               <TableCell>Schedule</TableCell>
// //               <TableCell>Prerequisites</TableCell>
// //               <TableCell>Action</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {courses.map((course) => (
// //               <TableRow key={course.id}>
// //                 <TableCell>{course.title}</TableCell>
// //                 <TableCell>{course.category}</TableCell>
// //                 <TableCell>{course.difficultyLevel}</TableCell>
// //                 <TableCell>{course.syllabus}</TableCell>
// //                 <TableCell>{course.schedule}</TableCell>
// //                 <TableCell>{course.prerequisites}</TableCell>
// //                 <TableCell>
// //                   <Button
// //                     variant="contained"
// //                     color="primary"
// //                     onClick={() => handleEnroll(course.id)}
// //                     style={{ marginTop: '8px' }}
// //                   >
// //                     Enroll
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
// //         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
// //           {snackbarMessage}
// //         </Alert>
// //       </Snackbar>
// //     </div>
// //   );
// // };

// // export default EnrollmentComponent;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Typography,
// //   CircularProgress,
// //   Button,
// //   Snackbar,
// //   Alert
// // } from '@mui/material';

// // const EnrollmentComponent = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [snackbarMessage, setSnackbarMessage] = useState('');
// //   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get('/api/courses'); // Adjust endpoint as needed
// //         setCourses(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching course data:', error);
// //         setLoading(false);
// //       }
// //     };

// //     const fetchUserId = () => {
// //       const id = localStorage.getItem('userId'); // Replace with actual method to get user ID
// //       if (id) {
// //         setUserId(id);
// //       }
// //     };

// //     fetchCourses();
// //     fetchUserId();
// //   }, []);

// //   const handleEnroll = async (courseId) => {
// //     if (userId) {
// //       try {
// //         await axios.put('/enroll/status', null, {
// //           params: {
// //             courseID: courseId,
// //             userID: userId,
// //             isEnrolled: true
// //           }
// //         });

// //         setSnackbarMessage('Enrollment successful!');
// //         setSnackbarSeverity('success');
// //       } catch (error) {
// //         setSnackbarMessage('Error enrolling in course.');
// //         setSnackbarSeverity('error');
// //         console.error('Error enrolling in course:', error.response ? error.response.data : error.message);
// //       } finally {
// //         setOpenSnackbar(true);
// //       }
// //     } else {
// //       setSnackbarMessage('User not logged in.');
// //       setSnackbarSeverity('error');
// //       setOpenSnackbar(true);
// //     }
// //   };

// //   const handleCloseSnackbar = () => {
// //     setOpenSnackbar(false);
// //   };

// //   if (loading) {
// //     return <CircularProgress />;
// //   }

// //   return (
// //     <div style={{ padding: '16px' }}>
// //       <Typography variant="h4" gutterBottom>Available Courses</Typography>
      
// //       <TableContainer component={Paper} style={{ marginTop: '16px' }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Title</TableCell>
// //               <TableCell>Category</TableCell>
// //               <TableCell>Difficulty Level</TableCell>
// //               <TableCell>Syllabus</TableCell>
// //               <TableCell>Schedule</TableCell>
// //               <TableCell>Prerequisites</TableCell>
// //               <TableCell>Action</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {courses.map((course) => (
// //               <TableRow key={course.id}>
// //                 <TableCell>{course.title}</TableCell>
// //                 <TableCell>{course.category}</TableCell>
// //                 <TableCell>{course.difficultyLevel}</TableCell>
// //                 <TableCell>{course.syllabus}</TableCell>
// //                 <TableCell>{course.schedule}</TableCell>
// //                 <TableCell>{course.prerequisites}</TableCell>
// //                 <TableCell>
// //                   <Button
// //                     variant="contained"
// //                     color="primary"
// //                     onClick={() => handleEnroll(course.id)}
// //                     style={{ marginTop: '8px' }}
// //                   >
// //                     Enroll
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
// //         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
// //           {snackbarMessage}
// //         </Alert>
// //       </Snackbar>
// //     </div>
// //   );
// // };

// // export default EnrollmentComponent;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

const EnrollmentComponent = () => {
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

  useEffect(() => {
    // Fetch courses from the backend
    axios.get('http://localhost:8080/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleClickOpen = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCourse(null);
  };

  const handleEnroll = () => {
    axios.post('http://localhost:8080/enroll', null, {
      params: {
        courseId: selectedCourse.id,
        userId: userId,
        userEmail: userEmail
      }
    })
    .then(response => {
      alert('Enrollment successful');
      setOpen(false);
      setSelectedCourse(null);
    })
    .catch(error => {
      console.error('Error enrolling in course:', error);
      alert('Failed to enroll in course');
    });
  };

  return (
    <div className='mt-40 -ml-40'>
      <Typography variant="h6">ENROLLMENTS</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Title</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map(course => (
              <TableRow key={course.id}>
                <TableCell>{course.title}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleClickOpen(course)}>
                    Enroll
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Enrollment</DialogTitle>
        <DialogContent>
          {selectedCourse && (
            <div>
              <p>Do you want to enroll in the course: <strong>{selectedCourse.title}</strong>?</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEnroll} color="primary">
            Enroll
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EnrollmentComponent;


