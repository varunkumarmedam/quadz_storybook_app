import { NavigationDrawer } from './NavigationDrawer';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Quadz/NavigationDrawer',
  component: NavigationDrawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
    backgroundColor: { control: 'color' },
    labelColor: { color: 'color' },
    activeLabelColor: { control: 'color' },
    activeLabelBackgroundColor: { control: 'color' },
    closeDrawerOnSelect: { control: 'boolean' },
    closeDrawerOnOverlayClick: { control: 'boolean' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    title: "Quadz",
    backgroundColor: 'grey',
    labelColor: 'black',
    activeLabelColor: 'white',
    activeLabelBackgroundColor: 'black',
    closeDrawerOnSelect: true,
    closeDrawerOnOverlayClick: true,
  },
};
