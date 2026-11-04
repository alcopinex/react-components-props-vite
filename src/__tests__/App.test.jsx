import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../components/App";

test("renders blog name, about text, and article titles", () => {
  render(<App />);

  // Check if blog title from Header renders
  const headerElement = screen.getByText(/Overreacted/i);
  expect(headerElement).toBeInTheDocument();

  // Check if image in About component has correct alt text
  const logoImage = screen.getByAltText("blog logo");
  expect(logoImage).toBeInTheDocument();

  // Check if an article title renders
  const articleTitle = screen.getByText(/Components 101/i);
  expect(articleTitle).toBeInTheDocument();
});