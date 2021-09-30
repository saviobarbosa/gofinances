import React from "react";
import { render } from "@testing-library/react-native";

import { Profile } from "../../screens/Profile";

describe("Profile Screen", () => {
    test("check if show correctly user input name placeholder", () => {
        const { getByPlaceholderText } = render(<Profile />);

        const inputName = getByPlaceholderText("Nome");

        expect(inputName).toBeTruthy();
    });

    test("checks if user data has been loaded", () => {
        const { getByTestId } = render(<Profile />);

        const inputName = getByTestId("input-name");
        const surname = getByTestId("input-surname");

        expect(inputName.props.value).toEqual("Sávio");
        expect(surname.props.value).toEqual("Barbosa");
    });

    test("checks if title render correctly", () => {
        const { getByTestId } = render(<Profile />);

        const textTitle = getByTestId("text-title");

        expect(textTitle.props.children).toContain("Profile");
    });
});