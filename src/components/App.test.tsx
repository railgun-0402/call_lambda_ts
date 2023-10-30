import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios");

test("画面描写テスト", () => {
  render(<App />);
  // h2タグの文言が存在するかテスト
  const btnElement = screen.getByText("Call Lambda!");
  expect(btnElement).toBeInTheDocument();
});

test("API接続のテスト", async () => {
  render(<App />);
  const responseMock = {
    data: {
      city: "tokyo",
      key: "XXX",
    },
    status: 200,
  };
  const res = (axios.get as any).mockResolvedValue(responseMock);
  console.log(`res = ${res}`);

  const button = screen.getByText("Call Lambda func");
  fireEvent.click(button);

  await waitFor(() => {
    // 正しい引数を与えられて呼び出されたかどうかを確認
    expect(axios.get).toHaveBeenCalledWith("https:~");
  });
  expect(responseMock.status).toBe(200);
});
