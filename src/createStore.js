export default function createStore(reducer) {
  let state;

  const dispatch = function (action) {
  	state = reducer(state, action);
  	render();
  };

  const getState = function () {
  	return state
  };

  dispatch({ type: '@@INIT' });

  return {
  	dispatch,
  	getState
  };
}

function render() {
  const container = document.getElementById('container');
}
