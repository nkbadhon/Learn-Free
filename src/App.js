import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layouts/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Statictics from './Components/Statictics/Statictics';
import Topics from './Components/Topics/Topics';
import QuizDetails from './Components/QuizDetails/QuizDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statictics',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/`);
          },
          element: <Statictics></Statictics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/single/:singleid',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.singleid}`);
          },
          element: <QuizDetails></QuizDetails>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
