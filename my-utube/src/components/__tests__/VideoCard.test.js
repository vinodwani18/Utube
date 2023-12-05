import { screen, render } from "@testing-library/react";
import VideoCard from "../VideoCard";
import MOCK_DATA from "../mocks/video.mocks.json"

test("Should render Video card component in DOM", () => {
    render(<VideoCard info={MOCK_DATA}/>);

    const text = screen.getByText("Overwatch 2 - EVERY HERO CHANGE for Season 8");
    expect(text).toBeInTheDocument();

});
