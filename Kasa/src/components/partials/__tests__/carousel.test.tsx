import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import '@testing-library/jest-dom'
import Carousel from "../Carousel"

vi.mock("@/assets/arrow_left.png", () => ({
    default: "/mock-arrow-left.png",
}))

vi.mock("@/assets/arrow_right.png", () => ({
    default: "/mock-arrow-right.png",
}))

describe("Carousel Component", () => {
    const mockPictures = [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
    ]

    it("navigates to next image when right arrow is clicked", () => {
        render(<Carousel pictures={mockPictures} />)

        const rightArrow = document.querySelector(".arrow_right")
        const mainImage = document.querySelector(".propertyPicture") as HTMLImageElement

        fireEvent.click(rightArrow!)

        expect(mainImage).toHaveAttribute("src", mockPictures[1])
        expect(screen.getByText("2 / 3")).toBeInTheDocument()
    })

    it("navigates to previous image when left arrow is clicked", () => {
        render(<Carousel pictures={mockPictures} />)

        const leftArrow = document.querySelector(".arrow_left")
        const mainImage = document.querySelector(".propertyPicture") as HTMLImageElement

        fireEvent.click(leftArrow!)

        expect(mainImage).toHaveAttribute("src", mockPictures[2])
        expect(screen.getByText("3 / 3")).toBeInTheDocument()
    })

    it("loops back to first image after last image", () => {
        render(<Carousel pictures={mockPictures} />)

        const rightArrow = document.querySelector(".arrow_right")
        const mainImage = document.querySelector(".propertyPicture") as HTMLImageElement

        fireEvent.click(rightArrow!) 
        fireEvent.click(rightArrow!) 
        fireEvent.click(rightArrow!) 

        expect(mainImage).toHaveAttribute("src", mockPictures[0])
        expect(screen.getByText("1 / 3")).toBeInTheDocument()
    })

})
