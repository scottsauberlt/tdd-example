import {render, screen} from "@testing-library/react";
import App from "@/App.jsx";
import userEvent from "@testing-library/user-event";
import {it, expect} from 'vitest'

it('should show success message when submitting form', async () => {
    // display the page
    render(<App/>);

    // grab the first name textbox and put in spongebob
    const firstNameInput = screen.getByLabelText("First Name");
    await userEvent.type(firstNameInput, 'Spongebob');
    
    const lastNameInput = screen.getByLabelText("Last Name");
    await userEvent.type(lastNameInput, 'Squarepants');

    // get the button and click it
    const button = screen.getByRole('button');
    await userEvent.click(button);

    // make sure the message Submitted successfully pops up
    const message = screen.getByText('Submitted successfully');
    expect(message).toBeInTheDocument();
});

it('should show error message when first name textbox is empty and submit button is clicked', async () => {
    // display the page
    render(<App/>);
    
    // get the button and click it
    const button = screen.getByRole('button');
    await userEvent.click(button);

    // make sure the message Submitted successfully pops up
    const message = screen.getByText('First name is required');
    expect(message).toBeInTheDocument();
});
