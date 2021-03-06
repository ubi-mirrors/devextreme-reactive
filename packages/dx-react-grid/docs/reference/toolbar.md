# Toolbar Plugin Reference

A plugin that renders the Grid toolbar.

## User Reference

### Dependencies

none

### Properties

Name | Type | Default | Description
-----|------|---------|------------
rootComponent | ComponentType&lt;[Toolbar.RootProps](#toolbarrootprops)&gt; | | A component that renders the toolbar root element.

## Interfaces

### Toolbar.RootProps

Describes properties passed to a component that renders the toolbar root element.

Field | Type | Description
------|------|------------
children? | ReactNode | A React node to be placed in the toolbar.

## Plugin Components

Name | Properties | Description
-----|------------|------------
Toolbar.Root | [Toolbar.RootProps](#toolbarrootprops) | A component that renders the toolbar root element.

Additional properties are added to the component's root element.

## Plugin Developer Reference

### Imports

Name | Plugin | Type | Description
-----|--------|------|------------
header | [Template](../../../dx-react-core/docs/reference/template.md) | object? | A template that renders the grid header.

### Exports

Name | Plugin | Type | Description
-----|--------|------|------------
toolbarContent | [Template](../../../dx-react-core/docs/reference/template.md) | object? | A template that renders the toolbar content.
