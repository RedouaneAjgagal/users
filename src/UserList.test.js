import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from "./UserList";

const renderComponent = () => {
    const users = [
        {
            name: "John",
            email: "john@example.com"
        },
        {
            name: "Sam",
            email: "sam@example.com"
        }
    ];
    render(<UserList users={users} />);

    return {
        users
    }
}

test('should display users', () => {
    const { users } = renderComponent();

    const rows = within(screen.getByTestId("usersTable")).getAllByRole("row");

    expect(rows).toHaveLength(users.length);
});

test('should render the name and email of each user', () => {
    const { users } = renderComponent();

    for (let user of users) {
        const name = screen.getByRole("cell", {
            name: user.name
        });
        const email = screen.getByRole("cell", {
            name: user.name
        });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});