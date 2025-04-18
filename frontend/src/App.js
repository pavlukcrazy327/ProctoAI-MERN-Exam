// Theme Provider
import { CssBaseline, ThemeProvider } from '@mui/material';
import { baselightTheme } from './theme/DefaultColors';
// Router Provider
import { RouterProvider, useRoutes } from 'react-router-dom';
// import Router from './routes/Router';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './test/Homepage';
import AboutPage from './test/Aboutus';
import New from './test/new';

// Redux Provider
import { Provider } from 'react-redux';
import store from './store';
// Tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/new">New</a>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
