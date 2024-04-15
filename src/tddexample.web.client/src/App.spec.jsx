import {render, screen} from "@testing-library/react";
import App from "@/App.jsx";
import userEvent from "@testing-library/user-event";
import {it, expect} from 'vitest'

it('should show success message when submitting form', async () => {
    render(<App/>);

    const firstNameInput = screen.getByLabelText("First Name");
    await userEvent.type(firstNameInput, 'Spongebob');

    const lastNameInput = screen.getByLabelText("Last Name");
    await userEvent.type(lastNameInput, 'Squarepants');

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const message = screen.getByText('Submitted successfully');
    expect(message).toBeInTheDocument();
});

it('should show error message when submitting form without entering in first name', async () => {
    render(<App/>);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const errorMessage = screen.getByText('First Name is required');
    expect(errorMessage).toBeInTheDocument();
});

it('should show error message when submitting form without entering in last name', async () => {
    render(<App/>);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const errorMessage = screen.getByText('Last Name is required');
    expect(errorMessage).toBeInTheDocument();
});