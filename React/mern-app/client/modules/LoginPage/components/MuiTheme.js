import { createMuiTheme } from '@material-ui/core/styles';
import theme from '../../../theme';

console.log("MuiTheme: Creating mui theme... ");
const mainThemeColor = theme["themeColor"];
console.log("MuiTheme: mainThemeColor = " + mainThemeColor);

const MuiTheme = createMuiTheme({
	palette: {
		primary: {
			main: mainThemeColor,
			contrastText: '#ffffff',

		}, 
	},

	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helventica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoi UI Symbol"',
		].join(','),
	}, 			
});

export default MuiTheme;

