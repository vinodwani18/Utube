import { screen, render } from "@testing-library/react";
import Head from "../Head";
import { Provider } from "react-redux";
import store from "../../utils/store";

test("Should render Head component in DOM", () => {
    render(
        <Provider store={store}>
            <Head/>
        </Provider>
    );

    const button = screen.getByRole("button");
    const searchButton = screen.getByText("Search");

    expect(button).toBeInTheDocument();
    expect(searchButton).toHaveTextContent("Search");
});
