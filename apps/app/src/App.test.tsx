import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import {render, screen} from "@testing-library/react";
import {test, expect} from "vitest";

test('smoke', () => {
    render(<div>Hello</div>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
})
