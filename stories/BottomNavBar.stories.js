import { BottomNavBar } from './BottomNavBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Quadz/BottomNavBar',
  component: BottomNavBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    iconColor:{control: 'color'},
    labelColor:{control: 'color'},
    activeIconColor: {control:'color'},
    activeIconBackgroundColor: {control: 'color'},
    showLabelsOnTop: {control: 'boolean'}
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    backgroundColor:'grey',
    iconColor:'white',
    labelColor:'white',
    activeIconColor:'white',
    activeIconBackgroundColor:'red',
    showLabelsOnTop: false,
  },
};
