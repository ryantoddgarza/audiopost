import gold from '../core/system/colors/gold';
import gray from '../core/system/colors/gray';

const themeColors = {
  primary: gold[40],
  primaryHover: gold[30],
};

const textColors = {
  text: gray[90],
  textWeak: gray[50],
  textWeakHover: gray[90],

  link: gold[30],
  linkHover: gold[20],
};

const backgroundColors = {
  background: gray[1],
  backgroundWeak: '#ffffff',
  backgroundMedium: gray[5],
  backgroundStrong: gray[10],
};

export default {
  ...themeColors,
  ...textColors,
  ...backgroundColors,
};
