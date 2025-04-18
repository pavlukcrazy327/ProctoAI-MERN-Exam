// Theme Provider
import { CssBaseline, ThemeProvider } from '@mui/material';
import { baselightTheme } from './theme/DefaultColors';
// Router Provider
import { RouterProvider, useRoutes } from 'react-router-dom';
// import Router from './routes/Router';
// import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate, createBrowserRouter, createRoutesFromElements, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Redux Provider
import { Provider } from 'react-redux';
import store from './store';
// Tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import PrivateRoute from './views/authentication/PrivateRoute';
import FullLayout from './layouts/full/FullLayout';
import ExamPage from './views/student/ExamPage';
import SamplePage from './views/sample-page/SamplePage';
import Success from './views/Success';
import ResultPage from './views/student/ResultPage';
import TeacherRoute from './views/authentication/TeacherRoute';
import CreateExamPage from './views/teacher/CreateExamPage';
import AddQuestions from './views/teacher/AddQuestions';
import ExamLogPage from './views/teacher/ExamLogPage';

import ExamLayout from './layouts/full/ExamLayout';
import ExamDetails from './views/student/ExamDetails';
import TestPage from './views/student/TestPage';
import UserAccount from './views/authentication/UserAccount';

import BlankLayout from './layouts/blank/BlankLayout';
import Error from './views/authentication/Error';
import Register from './views/authentication/Register';
import Login from './views/authentication/Login';
function App() {
  // const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer />
        <CssBaseline />
        {/* {routing} */}
        {/* <RouterProvider router={Router} /> */}
        <Router>
          <Routes>
          {/* // Private Routes */}
          <Route path="" element={<PrivateRoute />}>
            {/* // Main layout */}
            <Route path="/" element={<FullLayout />}>
              <Route index={true} path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" exact={true} element={<ExamPage />} />
              <Route path="/sample-page" exact={true} element={<SamplePage />} />
              <Route path="/Success" exact={true} element={<Success />} />
              <Route path="/exam" exact={true} element={<ExamPage />} />
              <Route path="/result" exact={true} element={<ResultPage />} />
              <Route path="" element={<TeacherRoute />}>
                <Route path="/create-exam" exact={true} element={<CreateExamPage />} />
                <Route path="/add-questions" exact={true} element={<AddQuestions />} />
                <Route path="/exam-log" exact={true} element={<ExamLogPage />} />
              </Route>
            </Route>
            <Route path="/" element={<ExamLayout />}>
              <Route path="exam/:examId" exact={true} element={<ExamDetails />} />
              <Route path="exam/:examId/:testId" exact={true} element={<TestPage />} />
            </Route>
          </Route>
          {/* User layout */}
          <Route path="/user" element={<FullLayout />}>
            <Route path="account" exact={true} element={<UserAccount />} />
            <Route path="profile" exact={true} element={<UserAccount />} />
          </Route>
    
          {/* Authentication layout */}
          <Route path="/auth" element={<BlankLayout />}>
            <Route path="404" element={<Error />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
            {/* <Route path="*" element={<Navigate to="/auth/404" />} /> */}
          </Route>
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
