import {render, screen} from "@testing-library/react";
import App from "@/App.jsx";
import userEvent from "@testing-library/user-event";
import {it, expect} from 'vitest'

it('should show success message when submitting form', async () => {
    render(<App/>);

    const firstNameInput = screen.getByLabelText("First Name");
    await userEvent.type(firstNameInput, 'Spongebob');

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const message = screen.getByText('Submitted successfully');
    expect(message).not.toBeInTheDocument();
});
