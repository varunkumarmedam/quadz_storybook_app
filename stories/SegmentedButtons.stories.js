import { SegmentedButtons } from './SegmentedButtons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Quadz/SegmentedButtons',
  component: SegmentedButtons,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    labelColor: { color: 'color' },
    activeTabColor: { control: 'color' },
    activeTabBackgroundColor: { control: 'color' },
    activeTab: { control: 'number' }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    backgroundColor: 'grey',
    tabColor: 'black',
    activeTabColor: 'white',
    activeTabBackgroundColor: 'black',
    activeTab: 0
  },
};
