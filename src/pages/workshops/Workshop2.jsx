import React from "react";
import { Link } from "react-router-dom";
import CodeSnippet from "../../components/CodeSnippet";
import "../../style/WorkshopPage.css";

const Workshop2 = () => {
  const bootstrapButtonCode = `// src/App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}

export default App;`;

  const indexWithBootstrapCode = `// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`;

  const buttonComponentCode = `// src/ButtonComponent.js
import React from 'react';

function ButtonComponent({ label }) {
  return <button className="btn btn-primary mx-2">{label}</button>;
}

export default ButtonComponent;`;

  const appWithButtonComponentCode = `// src/App.js
import React from 'react';
import ButtonComponent from './ButtonComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent label="Click Me!" />
      <ButtonComponent label="Submit" />
    </div>
  );
}

export default App;`;

  const cardComponentCode = `// src/Card.js
import React from 'react';

function Card({ title, text, image }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={\`\${process.env.PUBLIC_URL}/images/\${image}\`}
        className="card-img-top"
        alt="card"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;`;

  const appWithCardComponentCode = `// src/App.js
import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-around">
        <Card title="Card 1" text="This is the first card." image="team-1.jpg" />
        <Card title="Card 2" text="This is the second card." image="team-2.jpg" />
        <Card title="Card 3" text="This is the third card." image="team-3.jpg" />
        <Card title="Card 4" text="This is the fourth card." image="team-4.jpg" />
      </div>
    </div>
  );
}

export default App;`;

  return (
    <div className="workshop-container">
      <h1 className="workshop-title">Workshop 2: Using Bootstrap in React</h1>

      <div className="workshop-description">
        <p>
          This workshop demonstrates how to integrate Bootstrap with React
          applications. You'll learn how to add Bootstrap to your project,
          create styled buttons, and build reusable components that accept props
          for dynamic content.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Prerequisites</h2>
        <ul>
          <li>Completed Workshop 1: Setting Up a React Project</li>
          <li>Basic knowledge of React components</li>
          <li>Familiarity with Bootstrap CSS classes</li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Installing Bootstrap</h2>
        <p>
          To add Bootstrap to your React project, run the following command:
        </p>
        <CodeSnippet
          title="Terminal"
          language="bash"
          code="npm install bootstrap"
        />
        <p>
          Then, import Bootstrap CSS in your <code>src/index.js</code> file:
        </p>
        <CodeSnippet
          title="index.js with Bootstrap"
          language="jsx"
          code={indexWithBootstrapCode}
        />
      </div>

      <div className="workshop-section">
        <h2>Application 1: Bootstrap Button</h2>
        <p>Let's create a simple button styled with Bootstrap classes:</p>
        <CodeSnippet
          title="App.js with Bootstrap Button"
          language="jsx"
          code={bootstrapButtonCode}
        />
        <p>
          This will render a primary-styled button using Bootstrap's{" "}
          <code>btn</code> and <code>btn-primary</code> classes.
        </p>
        <div className="demo-container">
          <button className="btn btn-primary">Click Me</button>
        </div>
      </div>

      <div className="workshop-section">
        <h2>Application 2: Dynamic Button Component with Props</h2>
        <p>Now, let's create a reusable button component that accepts props:</p>
        <CodeSnippet
          title="ButtonComponent.js"
          language="jsx"
          code={buttonComponentCode}
        />
        <p>And use it in our App component:</p>
        <CodeSnippet
          title="App.js with ButtonComponent"
          language="jsx"
          code={appWithButtonComponentCode}
        />
        <p>
          This creates a reusable button component that accepts a{" "}
          <code>label</code> prop, allowing you to create multiple buttons with
          different text.
        </p>
        <div className="demo-container">
          <button className="btn btn-primary mx-2">Click Me!</button>
          <button className="btn btn-primary mx-2">Submit</button>
        </div>
      </div>

      <div className="workshop-section">
        <h2>Application 3: Card Component with Props</h2>
        <p>
          Let's create a more complex card component using Bootstrap's card
          classes:
        </p>
        <CodeSnippet title="Card.js" language="jsx" code={cardComponentCode} />
        <p>And use it in our App component:</p>
        <CodeSnippet
          title="App.js with Card Component"
          language="jsx"
          code={appWithCardComponentCode}
        />
        <p>
          This creates a reusable card component that accepts <code>title</code>
          , <code>text</code>, and <code>image</code> props, allowing you to
          create multiple cards with different content.
        </p>
        <div className="demo-container">
          <div className="d-flex flex-wrap justify-content-around">
            <div className="card" style={{ width: "18rem", margin: "10px" }}>
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">This is the first card.</p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", margin: "10px" }}>
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">This is the second card.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="note">
          Note: For the card images to work, you need to place image files
          (e.g., team-1.jpg, team-2.jpg) in the <code>public/images/</code>{" "}
          folder.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>Now that you've learned how to use Bootstrap in React, you can:</p>
        <ul>
          <li>Explore more Bootstrap components and classes</li>
          <li>Create more complex reusable components</li>
          <li>Learn about React state management</li>
        </ul>
        <p>
          Continue to <Link to="/workshops/3">Workshop 3</Link> to learn about
          handling events and state with useState.
        </p>
      </div>
    </div>
  );
};

export default Workshop2;
