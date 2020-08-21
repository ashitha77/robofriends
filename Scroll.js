import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{overflow : 'auto' , border : '2px solid opaqueu', height : '400px'}}>
			{props.children}
		</div>)
};

export default Scroll;