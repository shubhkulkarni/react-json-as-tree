# React JSON as Tree

`react-json-as-tree` is a TypeScript-based React component that renders a collapsible tree structure from a JSON or JS object. It offers high customization for rendering branch heads, tree leaves, and various display features, making it easy to visualize nested structures.

## Features

- **Supports both JSON and JS objects**: Pass valid JSON strings or JavaScript objects to generate a tree view.
- **Customizable rendering**: Fine-tune how branches and leaves are displayed using custom renderers.
- **Collapsible Nodes**: Easily control the default expansion of the tree and individual branches.
- **Lightweight**: Built with minimal dependencies for quick integration into any React project.
- **TypeScript support**: Full type definitions to ensure type safety.

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

Here's a basic example of how to use the `react-json-as-tree` component in a React TypeScript project.

```tsx
import React from "react";
import Tree from "react-json-as-tree";
import Expand from "./Expand"; // Custom expand icon component
import Collapse from "./Collapse"; // Custom collapse icon component

const root_ = {
  name: "John",
  age: 25,
  isActive: true,
  hobbies: ["reading", "gaming", "hiking"],
  address: {
    city: "New York",
    zip: "10001",
    coordinates: {
      lat: 40.7128,
      lon: -74.006,
    },
  },
  contact: {
    email: "john@example.com",
    phone: {
      home: "123-456-7890",
      work: "987-654-3210",
    },
  },
};

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">JSON Tree Example</h1>
      <Tree root={root_} />
    </div>
  );
};

export default App;
```

![image](https://github.com/user-attachments/assets/19f2cd33-f217-4c04-90fd-293981bfc05f)

## Props

### `Tree`

The main `Tree` component accepts the following props:

| Prop          | Type                     | Description                                                                |
| ------------- | ------------------------ | -------------------------------------------------------------------------- |
| `root`        | `objectType` \| `string` | The input data (JS Object or JSON string) that will be rendered as a tree. |
| `branchProps` | `BranchCustomProps`      | (Optional) Customization options for the branches (expand/collapse nodes). |
| `leaveProps`  | `LeaveCustomProps`       | (Optional) Customization options for the leaves (final nodes).             |

### `BranchCustomProps`

| Prop                 | Type                                                                     | Default        | Description                                                     |
| -------------------- | ------------------------------------------------------------------------ | -------------- | --------------------------------------------------------------- | ------------------------------------------ |
| `expandIcon`         | `React.ReactElement`                                                     | `ChevronRight` | The icon used to expand branches.                               |
| `collapseIcon`       | `React.ReactElement`                                                     | `ChevronDown`  | The icon used to collapse branches.                             |
| `defaultExpanded`    | `boolean`                                                                | `true`         | Whether branches are expanded by default.                       |
| `branchHeadRenderer` | `(name: string, isOpen: boolean,root: objectType) => React.ReactElement` | -              | Function to customize the rendering of branch heads.            |
| `indentation`        | `number`                                                                 | `24`           | The indentation width in pixels for nested branches.            |
| `hideDepthLines`     | `boolean`                                                                | `false`        | Whether to hide the depth lines (vertical lines between nodes). |
| `onBranchHeadClick`  | `(name: string, isOpen: boolean, root: objectType) => void               | Promise<void>` | -                                                               | Function to handle onClick event of heads. |

### `LeaveCustomProps`

| Prop            | Type                                                     | Default        | Description                                         |
| --------------- | -------------------------------------------------------- | -------------- | --------------------------------------------------- | ------------------------------------------- |
| `hideKeys`      | `boolean`                                                | `false`        | Whether to hide keys for leaves.                    |
| `leaveRenderer` | `(name: string, value: primitive) => React.ReactElement` | -              | Function to customize the rendering of tree leaves. |
| `onLeaveClick`  | `(name: string, value: primitive) => void                | Promise<void>` | -                                                   | Function to handle onClick event of leaves. |

### Type Definitions

The component uses the following TypeScript types for type safety:

```ts
export type objectType = Record<string, unknown>;

export type primitive = string | null | undefined | number | boolean;

export interface BranchCustomProps {
  expandIcon?: React.ReactElement;
  collapseIcon?: React.ReactElement;
  defaultExpanded?: boolean;
  branchHeadRenderer?: (name: string, isOpen: boolean) => React.ReactElement;
  indentation?: number;
  hideDepthLines?: boolean;
}

export interface LeaveCustomProps {
  hideKeys?: boolean;
  leaveRenderer?: (name: string, value: primitive) => React.ReactElement;
}

interface TreeProps {
  root: objectType | string;
  branchProps?: BranchCustomProps;
  leaveProps?: LeaveCustomProps;
}
```

## Example

```tsx
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

<Tree
  root={jsonData}
  branchProps={{
    expandIcon: <Expand />, // Custom expand icon (default: +)
    collapseIcon: <Collapse />, // Custom collapse icon (default: -)
    defaultExpanded: false, // Collapse all branches by default
    hideDepthLines: true, // Hide vertical depth lines
    indentation: 24, // Indentation width (default: 24)
    branchHeadRenderer: (name, isOpen) => <div>{name}</div>, // Custom rendering for branch head (optional)
  }}
  leaveProps={{
    hideKeys: false, // Show keys for each leaf (default: false)
    leaveRenderer: (name, value) => (
      <div>
        {name} : {value as string}
      </div>
    ), // Custom rendering for leaves
  }}
/>;
```

## Notes

1. **Maps are represented as objects**  
   Since JavaScript `Maps` are not fully supported, they are represented using standard objects, where keys are converted to strings.

2. **Sets are represented as Arrays**  
   JavaScript `Sets` are represented as arrays within the tree structure. Duplicate entries will not be visible in the tree.

3. **Functions are not supported as keys**  
   Currently, the tree structure does not support functions as object keys. Future updates may include support.

4. **Issues, Bugs, and Bug Fixes are welcomed**  
   Please feel free to submit any issues or bugs you encounter. We also welcome bug fixes and improvements through pull requests!

## Customization

Since this component is built with TypeScript and React, you can easily customize both the icons, renderers, and behaviors of the tree. Tailor it to fit your UI requirements, and style it with your preferred CSS framework or custom styles.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests. Contributions are highly appreciated!

## License

This project is licensed under the MIT License.

---
