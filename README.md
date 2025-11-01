# React Base Components

A comprehensive collection of reusable React components built with TypeScript, designed to accelerate your web application development.

## Installation

```bash
npm install react-base-components
```

## Available Components

### Accordion
A collapsible content component with the following sub-components:
- `Accordion` - Main container component
- `AccordionTitle` - Header/trigger for expanding/collapsing
- `AccordionActivateIcon` - Custom icon for expanded state
- `AccordionDesactivateIcon` - Custom icon for collapsed state

### Button
A customizable button component with support for different variants and states.

### Checkbox
An interactive checkbox component with customizable styles and labels.

### Content
A container component for managing content layout and structure.

### Dropdown
A comprehensive dropdown solution including:
- `DropdownRoot` - Main container
- `DropdownMenu` - Menu container
- `DropdownOption` - Individual option items
- Context management for dropdown state

### Form Components
- `Form` - Form container with built-in state management
- `InputText` - Text input field with validation support
- `TextArea` - Multi-line text input component

### Conditional Rendering
- `If` - Component for conditional rendering with a clean syntax

### Modal
A flexible modal system with:
- `ModalRoot` - Modal container
- `ModalOpen` - Trigger component to open the modal
- `ModalClose` - Component for closing the modal
- Context management for modal state

### Sidebar
A complete sidebar solution featuring:
- `SidebarMenu` - Main container for the sidebar
- `SidebarItem` - Individual menu items
- `SidebarHamburguer` - Toggle component
- Context management for sidebar state

## Usage Examples

### Accordion
```tsx
import { Accordion, AccordionTitle } from 'react-base-components';

<Accordion>
  <AccordionTitle>Click to expand</AccordionTitle>
  <div>Your content here</div>
</Accordion>
```

### Dropdown
```tsx
import { DropdownRoot, DropdownMenu, DropdownOption } from 'react-base-components';

<DropdownRoot>
  <DropdownMenu>
    <DropdownOption value="1">Option 1</DropdownOption>
    <DropdownOption value="2">Option 2</DropdownOption>
  </DropdownMenu>
</DropdownRoot>
```

### Form
```tsx
import { Form, InputText, Button } from 'react-base-components';

<Form onSubmit={handleSubmit}>
  <InputText name="username" placeholder="Username" />
  <Button type="submit">Submit</Button>
</Form>
```

### Modal
```tsx
import { ModalRoot, ModalOpen, ModalClose } from 'react-base-components';

<ModalRoot>
  <ModalOpen>Open Modal</ModalOpen>
  <div>
    Modal content
    <ModalClose>Close</ModalClose>
  </div>
</ModalRoot>
```

## License

MIT