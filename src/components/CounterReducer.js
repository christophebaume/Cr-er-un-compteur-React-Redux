// const lightReducer = (state = "on", action) => {
// 	if (action.type === "SWITCH") {
// 		return state === "on" ? "off" : "on";
// 	}
// 	return state;
// };
// export default lightReducer;

const CounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD1':
			return state + 1;
		case 'REMOVE1':
			return state - 1;
		case 'RESET':
			return state = 0;
		default:
			return state;
	}
}
export default CounterReducer;