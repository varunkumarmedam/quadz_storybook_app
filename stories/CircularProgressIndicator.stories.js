import { CircularProgressIndicator } from './CircularProgressIndicator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Quadz/CircularProgressIndicator',
  component: CircularProgressIndicator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    percentage: { control: 'number' },
    color: { control: 'color' },
    background: { color: 'color' },
    size: { control: 'number' },
    thickness: { control: 'number' }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    percentage: 45, color: "red", background: "black", size: 50, thickness: 20
  },
};
