import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import VideoContainer from "../VideoContainer";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../../utils/store";
import MOCK_DATA from "../mocks/videoList.mock.json";

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("VideoContainer", () => {
  it("renders VideoContainer component with video cards", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
            <Provider store={store}>
                <VideoContainer />
            </Provider>
        </BrowserRouter>
      );
    });

    // const node = screen.getAllByTestId("videoCard");
    // expect(node).toBeInTheDocument();
    // Wait for the asynchronous data fetching to complete
    await waitFor(() => {
        const nodes = screen.queryAllByTestId("videoCard");
        expect(nodes.length).toBeGreaterThan(0);
      });
    
  });
});
