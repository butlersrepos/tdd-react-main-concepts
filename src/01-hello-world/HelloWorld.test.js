import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import HelloWorld from './HelloWorld'

test("should render as h1", () => {
	const renderer = new ShallowRenderer()

	renderer.render(<HelloWorld />)
	// const result = renderer.getRenderOutput()
})
