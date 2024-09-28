To be updated -----
---

# React JSON as Tree

`react-json-as-tree` is a lightweight and highly customizable React component that takes JSON or JS objects as input and renders a collapsible tree structure. Styled with Tailwind CSS for easy integration with modern UI frameworks.

## Features

- **Supports both JSON and JS Objects**: You can pass in JSON strings or JavaScript objects.
- **Collapsible Nodes**: Each node in the tree is collapsible, allowing you to expand and collapse sections for better readability.
- **Lightweight**: Minimal dependencies with simple integration.
- **Customizable**: Easily style the component using Tailwind CSS classes.

## Installation

You can install the package via npm:

```bash
npm install react-json-as-tree
```

or yarn:

```bash
yarn add react-json-as-tree
```

## Usage

Here's a basic example of how to use the `react-json-as-tree` component in your React project.

```jsx
import React from "react";
import JsonTree from "react-json-as-tree";

const data = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["Reading", "Traveling"],
};

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">JSON Tree Example</h1>
      <JsonTree data={data} />
    </div>
  );
};

export default App;
```

## Props

The `react-json-as-tree` component accepts the following props:

| Prop  | Type            | Description                                     |
|-------|-----------------|-------------------------------------------------|
| `data`| `Object` or `JSON`| The input data (JS Object or JSON string) that will be rendered as a tree. |
| `collapsed` | `boolean`  | (Optional) Whether to collapse all nodes by default. Default is `false`. |
| `theme` | `string`      | (Optional) Tailwind CSS classes to style the tree. Default is `text-gray-700`. |

## Customization

Since this component uses Tailwind CSS, you can easily customize its appearance by overriding the default styles:

```jsx
<JsonTree data={data} theme="text-blue-700 bg-gray-100 p-2" />
```

## Example

```jsx
const jsonData = {
  company: "Example Corp",
  employees: [
    { name: "John", role: "Developer" },
    { name: "Jane", role: "Designer" },
  ],
  location: {
    city: "San Francisco",
    country: "USA",
  },
};

<JsonTree data={jsonData} collapsed={true} />
```

This will render a tree where all nodes are collapsed by default.

## Dependencies

- **React**: ^17.0.0
- **Tailwind CSS**: ^3.0.0

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

---
