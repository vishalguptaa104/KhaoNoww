const { render, act, screen, fireEvent } = require("@testing-library/react");
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mock/mockRestaurantList.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // console.log(screen);
  // console.log(screen.debug(null, Infinity));
  const searchBtn = screen.getByTestId("searchb");
  const searchInput = screen.getByTestId("searchRes");
  //   console.log(searchInput);

  fireEvent.change(searchInput, {
    target: {
      value: "pizza",
    },
  });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});
