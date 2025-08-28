import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Carousel from "../Carousel"

// Mock des images pour les tests
vi.mock("@/assets/arrow_left.png", () => ({
    default: "/mock-arrow-left.png",
}))

vi.mock("@/assets/arrow_right.png", () => ({
    default: "/mock-arrow-right.png",
}))

describe("Carousel Component", () => {
    // Données de test : tableau d'images
    const mockPictures = [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
    ]

    it("navigates to next image when right arrow is clicked", () => {
        render(<Carousel pictures={mockPictures} />)

        // ÉTAPE 1: Trouver la flèche droite et l'image principale
        const rightArrow = document.querySelector(".arrow_right")
        const mainImage = document.querySelector(".propertyPicture") as HTMLImageElement

        // ÉTAPE 2: Cliquer sur la flèche droite
        fireEvent.click(rightArrow!)

        // ÉTAPE 3: Vérifier que l'image a changé (image 2)
        expect(mainImage).toHaveAttribute("src", mockPictures[1])

        // ÉTAPE 4: Vérifier que la pagination a été mise à jour
        expect(screen.getByText("2 / 3")).toBeInTheDocument()
    })

    it("navigates to previous image when left arrow is clicked", () => {
        render(<Carousel pictures={mockPictures} />)

        const leftArrow = document.querySelector(".arrow_left")
        const mainImage = document.querySelector(".propertyPicture") as HTMLImageElement

        // ÉTAPE 1: Cliquer sur la flèche gauche depuis la première image
        fireEvent.click(leftArrow!)

        // ÉTAPE 2: Doit aller à la dernière image (logique de boucle)
        expect(mainImage).toHaveAttribute("src", mockPictures[2])
        expect(screen.getByText("3 / 3")).toBeInTheDocument()
    })

    it("loops back to first image after last image", () => {
        render(<Carousel pictures={mockPictures} />)

        const rightArrow = document.querySelector(".arrow_right")
        const mainImage = document.querySelector(".propertyPicture") as HTMLImageElement
        // ÉTAPE 1: Naviguer jusqu'à la dernière image
        fireEvent.click(rightArrow!) // Image 2
        fireEvent.click(rightArrow!) // Image 3

        // ÉTAPE 2: Cliquer encore pour revenir à la première
        fireEvent.click(rightArrow!) // Retour à l'image 1

        // ÉTAPE 3: Vérifier qu'on est revenu au début
        expect(mainImage).toHaveAttribute("src", mockPictures[0])
        expect(screen.getByText("1 / 3")).toBeInTheDocument()
    })

})
