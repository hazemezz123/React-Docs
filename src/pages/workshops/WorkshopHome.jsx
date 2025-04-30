import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Workshop.css';

const WorkshopHome = () => {
  const workshops = [
    {
      id: 1,
      title: 'Setting Up a React Project',
      description: 'Learn how to set up a React project using create-react-app, including installing Node.js and npm.',
      path: '/workshops/1'
    },
    {
      id: 2,
      title: 'Using Bootstrap in React',
      description: 'Integrate Bootstrap with React to create styled buttons, dynamic components with props, and card components.',
      path: '/workshops/2'
    },
    {
      id: 3,
      title: 'Handling Events and State with useState',
      description: 'Learn about event handling and state management using the useState hook in functional components.',
      path: '/workshops/3'
    },
    {
      id: 4,
      title: 'Advanced State Management',
      description: 'Explore advanced state management techniques using useReducer, useContext, and data fetching with useEffect.',
      path: '/workshops/4'
    },
    {
      id: 5,
      title: 'Routing with React Router',
      description: 'Implement client-side routing in your React applications using React Router.',
      path: '/workshops/5'
    }
  ];

  return (
    <div className="workshops-container">
      <h1 className="workshops-heading">React Workshops</h1>
      <p className="workshops-description">
        Welcome to our comprehensive React workshops! Each workshop covers different aspects of React development,
        from setting up a project to advanced state management and routing. Explore the workshops below to learn
        through practical examples and hands-on applications.
      </p>
      
      <div className="workshops-grid">
        {workshops.map(workshop => (
          <div key={workshop.id} className="workshop-card">
            <h2>Workshop {workshop.id}: {workshop.title}</h2>
            <p>{workshop.description}</p>
            <Link to={workshop.path} className="workshop-link">
              Explore Workshop
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopHome;
