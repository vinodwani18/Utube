import { screen, render } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../utils/store";

test("Should render Sidebar component in DOM", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Sidebar/>
            </Provider>
        </BrowserRouter>
    );

    const home = screen.getByText("Home");
    // const searchButton = screen.getByText("Search");

    expect(home).toBeInTheDocument();
    // expect(searchButton).toHaveTextContent("Search");
});

test("Should render Sidebar component in DOM with button", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Sidebar/>
            </Provider>
        </BrowserRouter>
    );

    const homeLink = screen.getByRole('link', {name: 'Home'});

    expect(homeLink).toBeInTheDocument();
    // expect(searchButton).toHaveTextContent("Search");
});