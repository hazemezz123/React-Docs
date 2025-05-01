# Design Pattern Workshops

## Workshop 1

### Question 1: Single Responsibility Principle (SRP)

**Question**: Why should a React component follow the Single Responsibility Principle (SRP)? Write an example of a component that violates SRP and then refactor it to follow SRP.

**Answer**: A component should have only one reason to change. If a component handles multiple responsibilities, it becomes harder to maintain.

**Bad Example (Violating SRP)**:
```jsx
function UserProfile({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <button onClick={() => alert("Logged out")}>Logout</button>
        </div>
    );
}
```

**Problem**: This component displays user details and handles logout functionality.

**Refactored Example (Following SRP)**:
```jsx
function UserInfo({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
}

function LogoutButton() {
    return <button onClick={() => alert("Logged out")}>Logout</button>;
}

function UserProfile({ user }) {
    return (
        <div>
            <UserInfo user={user} />
            <LogoutButton />
        </div>
    );
}
```

**Why is this better?**
- `UserInfo` handles displaying user data.
- `LogoutButton` is responsible only for the logout action.
- `UserProfile` combines them without mixing responsibilities.

### Question 2: Open/Closed Principle (OCP)

**Question**: How does the Open/Closed Principle (OCP) apply to React components? Show an example where a component is not following OCP and then refactor it.

**Answer**: OCP states that components should be open for extension but closed for modification.

**Bad Example (Violating OCP)**:
```jsx
function Alert({ type, message }) {
    if (type === "success") {
        return <div style={{ color: "green" }}>{message}</div>;
    } else if (type === "error") {
        return <div style={{ color: "red" }}>{message}</div>;
    } else {
        return <div>{message}</div>;
    }
}
```

**Problem**: Every time a new alert type is needed, we must modify the `Alert` component.

**Refactored Example (Following OCP)**:
```jsx
function Alert({ children, style }) {
    return <div style={style}>{children}</div>;
}

function SuccessAlert({ message }) {
    return <Alert style={{ color: "green" }}>{message}</Alert>;
}

function ErrorAlert({ message }) {
    return <Alert style={{ color: "red" }}>{message}</Alert>;
}
```

**Why is this better?**
The `Alert` component is now closed for modification but open for extension (we can add new alert types without changing `Alert`).

### Question 3: Liskov Substitution Principle (LSP)

**Question**: What is the Liskov Substitution Principle (LSP) in React? Give an example where a component violates LSP and then refactor it to follow LSP.

**Answer**: LSP states that a subclass (or child component) should be able to replace its parent without breaking the application.

**Bad Example (Violating LSP)**:
```jsx
function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

function DisabledButton() {
    return <button disabled>Cannot Click</button>; // Missing onClick
}
```

**Problem**: `DisabledButton` does not behave like `Button`. It removes functionality, which can break expectations.

**Refactored Example (Following LSP)**:
```jsx
function Button({ label, onClick, disabled = false }) {
    return <button onClick={onClick} disabled={disabled}>{label}</button>;
}
```

**Why is this better?**
`Button` can now be used as a normal or disabled button without breaking the expected behavior.

## Workshop 2

### Question 4: Interface Segregation Principle (ISP)

**Question**: How does Interface Segregation Principle (ISP) apply to React props? Show an example where a component violates ISP and refactor it.

**Answer**: ISP suggests that components should not be forced to depend on unnecessary props.

**Bad Example (Violating ISP)**:
```jsx
function UserCard({ name, email, phone, address, onDelete }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}
```

**Problem**: Every `UserCard` must handle `onDelete`, even if deletion is not needed.

**Refactored Example (Following ISP)**:
```jsx
function UserInfo({ name, email, phone, address }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
        </div>
    );
}

function UserCardWithDelete({ user, onDelete }) {
    return (
        <div>
            <UserInfo {...user} />
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}
```

**Why is this better?**
- `UserInfo` does not force delete functionality.
- `UserCardWithDelete` extends it only when needed.

### Question 5: Dependency Inversion Principle (DIP)

**Question**: How does the Dependency Inversion Principle (DIP) improve React components? Show an example where a component violates DIP and refactor it.

**Answer**: DIP states that high-level components should not depend on low-level details. Instead, both should depend on abstractions (like props or context).

**Bad Example (Violating DIP)**:
```jsx
function DataFetcher() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("https://api.example.com/data")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```

**Problem**: `DataFetcher` directly depends on the API call. If we change the data source, we must edit this component.

**Refactored Example (Following DIP)**:
```jsx
function DataDisplay({ fetchData }) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetchData().then(setData);
    }, [fetchData]);
    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}

// Usage with API
function App() {
    const fetchData = () => fetch("https://api.example.com/data").then(res => res.json());
    return <DataDisplay fetchData={fetchData} />;
}
```

**Why is this better?**
`DataDisplay` depends on an abstract `fetchData` function, making it reusable with different data sources.

## Workshop 3

### Question 6: Factory Pattern

**Question**: Let's say we want to create different button components based on the state (like primary button, secondary button, danger button).

**Example**:
```jsx
// Factory function
function createButton(type) {
    switch (type) {
        case "primary":
            return <button className="btn-primary">Primary</button>;
        case "secondary":
            return <button className="btn-secondary">Secondary</button>;
        case "danger":
            return <button className="btn-danger">Danger</button>;
        default:
            return <button className="btn-default">Default</button>;
    }
}

// Use the factory
export default function App() {
    return (
        <div>
            {createButton("primary")}
            {createButton("danger")}
        </div>
    );
}
```

### Question 7: Singleton Pattern

**Question**: Setting up application state using React Context as a unified source of shared information in the application.

**Example**:
```jsx
import React, { createContext, useContext, useState } from "react";

// Create a single context to store state
const AppContext = createContext();

export function AppProvider({ children }) {
    const [theme, setTheme] = useState("light");
    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to access application context
export function useAppContext() {
    return useContext(AppContext);
}

// Usage
export default function App() {
    const { theme, setTheme } = useAppContext();
    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    );
}
```

## Workshop 4

### Question 8: Adapter Design Pattern

**Question**: Adapting an API that provides data in a different format.

**Example**:
```jsx
// Data from API comes in different format
const apiData = {
    user_name: "JohnDoe",
    user_email: "john@example.com"
};

// Convert data to fit the component
class UserAdapter {
    constructor(apiData) {
        this.name = apiData.user_name;
        this.email = apiData.user_email;
    }
}

// React component uses data in a new format
function UserInfo({ user }) {
    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default function App() {
    const adaptedUser = new UserAdapter(apiData);
    return <UserInfo user={adaptedUser} />;
}
```

### Question 9: Composite Pattern

**Question**: Displaying nested comments that contain responses.

**Example**:
```jsx
import React from "react";

function Comment({ text, replies }) {
    return (
        <div style={{ marginLeft: "20px", marginTop: "10px" }}>
            <p>{text}</p>
            {replies && replies.map((reply, index) => (
                <Comment key={index} text={reply.text} replies={reply.replies} />
            ))}
        </div>
    );
}

const commentData = {
    text: "This is a main comment",
    replies: [
        {
            text: "This is a reply",
            replies: [
                { text: "This is a nested reply" }
            ]
        }
    ]
};

export default function App() {
    return (
        <div>
            <Comment text={commentData.text} replies={commentData.replies} />
        </div>
    );
}
```

## Workshop 5

### Question 10: Template Method Pattern

**Question**: Making a Hot Beverage Using Specific Steps. We have a base class `HotBeverage` that contains the sequence of steps to make a hot beverage, where water is boiled, ingredients are added, and the beverage is poured. Some of the steps in subclasses will be dedicated to making coffee or tea.

**Step 1: Create the HotBeverage base class**:
```javascript
class HotBeverage {
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
}
```

**Step 2: Create the Tea and Coffee subclasses**:
```javascript
class Tea extends HotBeverage {
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
}
```

**Step 3: Using Classes in React**:
```jsx
import React, { useEffect } from "react";

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
}
```

**Results when running**:
When you run the app, it will display in the console the sequence of steps for preparing tea and coffee, using the Template Method Pattern to handle each drink according to the common steps.

**Expected result in Console**:
```
Preparing Tea:
Boiling water...
Steeping the tea...
Pouring into cup...
Adding lemon...

Preparing Coffee:
Boiling water...
Dripping coffee through filter...
Pouring into cup...
Adding sugar and milk...
```

**Description**:
- The `HotBeverage` base class defines the basic brewing steps: `prepare`, `boilWater`, `pourInCup`.
- The `Tea` and `Coffee` subclasses customize the `brew` and `addCondiments` steps to match the type of beverage.
- The `App` component creates objects of `Tea` and `Coffee` and uses a function to execute the preparation steps.