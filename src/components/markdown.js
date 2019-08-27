import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'

import Image from './image'
import ApiSelect from './api_select'

const H2 = props => {

	return (
		<h2
			className="h2" 
			style={{
				padding: '.5em 1em',
				background: 'rebeccapurple',
				color: 'white',
			}}
		>
			{props.children}
		</h2>
	)
}

const components = {
	h2: H2,
	img: Image,
	ApiSelect
}

const MarkdownBlock = (props) => {

	return (
		<MDXProvider components={components}>
			<MDXRenderer>
        {props.post}
      </MDXRenderer>
		</MDXProvider>
	)
}

export default MarkdownBlock;