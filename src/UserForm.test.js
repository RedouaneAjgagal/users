import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";



test('should display 2 inputs and a submit button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole("textbox");
    const submitButton = screen.getByRole("button");

    expect(inputs).toHaveLength(2);
    expect(submitButton).toBeInTheDocument();
});