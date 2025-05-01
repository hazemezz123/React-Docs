import React from "react";
import { Link } from "react-router-dom";
import CodeHighlighter from "../../components/CodeHighlighter";
import WorkshopWrapper from "../../components/WorkshopWrapper";
import "../../style/WorkshopPage.css";

const TemplateMethod = () => {
  const templateMethodCode = `class HotBeverage {
    prepare() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    boilWater() {
        console.log("Boiling water...");
    }

    pourInCup() {
        console.log("Pouring into cup...");
    }

    brew() {
        throw new Error("This method should be overridden in subclass.");
    }

    addCondiments() {
        throw new Error("This method should be overridden in subclass.");
    }
}`;

  const teaAndCoffeeCode = `class Tea extends HotBeverage {
    brew() {
        console.log("Steeping the tea...");
    }

    addCondiments() {
        console.log("Adding lemon...");
    }
}

class Coffee extends HotBeverage {
    brew() {
        console.log("Dripping coffee through filter...");
    }

    addCondiments() {
        console.log("Adding sugar and milk...");
    }
}`;

  const reactUsageCode = `import React, { useEffect } from "react";

export default function App() {
    useEffect(() => {
        const tea = new Tea();
        const coffee = new Coffee();
        console.log("Preparing Tea:");
        tea.prepare();
        console.log("\nPreparing Coffee:");
        coffee.prepare();
    }, []);

    return (
        <div>
            <h1>Hot Beverage Preparation</h1>
            <p>Check the console to see the preparation steps for Tea and Coffee.</p>
        </div>
    );
}`;

  return (
    <WorkshopWrapper>
      <h1 className="workshop-title">Template Method Pattern in React</h1>

      <div className="workshop-description">
        <p>
          The Template Method Pattern defines the skeleton of an algorithm in a
          method, deferring some steps to subclasses. It lets subclasses
          redefine certain steps of an algorithm without changing the
          algorithm's structure.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Understanding the Template Method Pattern</h2>
        <p>The Template Method Pattern is particularly useful when:</p>
        <ul>
          <li>
            You want to implement the invariant parts of an algorithm once and
            leave the variant parts to subclasses
          </li>
          <li>
            You want to control the points at which subclassing is allowed
          </li>
          <li>
            You need to enforce certain steps in a specific sequence, while
            allowing customization of certain steps
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Step 1: Create the Base Class</h2>
        <p>
          First, we'll create a base class with the template method that defines
          the algorithm's skeleton:
        </p>
        <CodeHighlighter
          title="HotBeverage.js"
          language="javascript"
          code={templateMethodCode}
        />
        <p>Key points about the base class:</p>
        <ul>
          <li>
            <code>prepare()</code> is our template method that defines the
            algorithm's structure
          </li>
          <li>
            <code>boilWater()</code> and <code>pourInCup()</code> are concrete
            methods with default implementations
          </li>
          <li>
            <code>brew()</code> and <code>addCondiments()</code> are abstract
            methods that subclasses must implement
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Step 2: Create the Concrete Subclasses</h2>
        <p>
          Next, we'll create concrete subclasses that implement the abstract
          methods:
        </p>
        <CodeHighlighter
          title="TeaAndCoffee.js"
          language="javascript"
          code={teaAndCoffeeCode}
        />
        <p>
          These subclasses customize the brewing and condiment steps while
          inheriting the common preparation sequence.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Step 3: Using the Pattern in React</h2>
        <p>
          Finally, we'll use our template method pattern classes in a React
          component:
        </p>
        <CodeHighlighter title="App.jsx" language="jsx" code={reactUsageCode} />
        <p>
          In this component, we create instances of our concrete classes (Tea
          and Coffee) and call their template methods to execute the algorithm
          with their specific implementations.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Expected Console Output</h2>
        <pre className="console-output">
          {`Preparing Tea:
Boiling water...
Steeping the tea...
Pouring into cup...
Adding lemon...

Preparing Coffee:
Boiling water...
Dripping coffee through filter...
Pouring into cup...
Adding sugar and milk...`}
        </pre>
      </div>

      <div className="workshop-section">
        <h2>Benefits of the Template Method Pattern</h2>
        <ul>
          <li>
            Promotes code reuse by encapsulating common steps in the base class
          </li>
          <li>
            Ensures consistency by controlling the algorithm's overall structure
          </li>
          <li>
            Provides clean extension points for customizing behavior without
            modifying existing code
          </li>
          <li>
            Makes it easy to change one step of an algorithm without affecting
            others
          </li>
        </ul>
      </div>

      <div className="workshop-section">
        <h2>Practice Exercise</h2>
        <p>
          Try implementing a data fetching component using the Template Method
          Pattern. Create a base <code>DataFetcher</code> class with methods
          like <code>fetchData()</code>, <code>processData()</code>, and{" "}
          <code>displayData()</code>. Then implement concrete subclasses for
          different data types (users, products, etc.) that customize how data
          is processed and displayed.
        </p>
      </div>

      <div className="workshop-section">
        <h2>Next Steps</h2>
        <p>Explore other design patterns that work well with React:</p>
        <ul>
          <li>
            <Link to="/designPattern/factoryAndSingleton">
              Factory & Singleton Patterns
            </Link>
          </li>
          <li>
            <Link to="/designPattern/adapterAndComposite">
              Adapter & Composite Patterns
            </Link>
          </li>
        </ul>
      </div>
    </WorkshopWrapper>
  );
};

export default TemplateMethod;
