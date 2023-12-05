import { screen, render } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";

test("Should render Body component in DOM", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </BrowserRouter>
    );
});
