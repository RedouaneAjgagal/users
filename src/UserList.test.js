import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from "./UserList";

test('should display users', () => {
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

    const rows = within(screen.getByTestId("usersTable")).getAllByRole("row");

    expect(rows).toHaveLength(users.length);
});