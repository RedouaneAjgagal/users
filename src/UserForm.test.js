
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";



test('should display 2 inputs and a submit button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole("textbox");
    const submitButton = screen.getByRole("button", {
        name: /add user/i
    });

    expect(inputs).toHaveLength(2);
    expect(submitButton).toBeInTheDocument();
});

test('it calls onUserAdd when submitting the form', async () => {
    const mock = jest.fn();
    render(<UserForm onUserAdd={mock} />);

    const nameInput = screen.getByRole("textbox", {
        name: /name/i
    });

    const emailInput = screen.getByRole("textbox", {
        name: /email/i
    });

    await userEvent.click(nameInput);
    await userEvent.keyboard("John");

    await userEvent.click(emailInput);
    await userEvent.keyboard("john@example.com");

    const submitButton = screen.getByRole("button", {
        name: /add user/i
    });
    await userEvent.click(submitButton);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
        name: "John",
        email: "john@example.com"
    });
});

test('should clear the name and email inputs when submitting the form', async () => {
    render(<UserForm onUserAdd={() => { }} />);

    const nameInput = screen.getByRole("textbox", {
        name: /name/i
    });
    const emailInput = screen.getByRole("textbox", {
        name: /email/i
    });
    const submitButton = screen.getByRole("button", {
        name: /add user/i
    });

    await userEvent.click(nameInput);
    await userEvent.keyboard("John");

    await userEvent.click(emailInput);
    await userEvent.keyboard("john@example.com");

    await userEvent.click(submitButton);

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
});

test('should not display password input on userForm component', () => {
    render(<UserForm onUserAdd={() => { }} />);

    const passwordInput = screen.queryByRole("textbox", {
        name: /passowrd/i
    });

    expect(passwordInput).toEqual(null);
});



const toContainRole = (containerEl, role, number = 1) => {
    const elements = within(containerEl).getAllByRole(role);

    if (elements.length === number) {
        return {
            pass: true
        };
    };

    return {
        pass: false,
        message: () => `Expected to have ${number} element ${role}, but got ${elements.length}`
    }
};

expect.extend({
    toContainRole
});


test('should have only one button inside the form', () => {
    render(<UserForm onUserAdd={() => { }} />);

    const form = screen.getByRole("form", {
        name: /add user/i
    });

    expect(form).toContainRole("button");
});