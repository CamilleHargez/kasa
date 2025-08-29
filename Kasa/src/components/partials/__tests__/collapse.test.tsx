import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Collapse from "../Collapse"


vi.mock("@/assets/arrow_top.png", () => ({
  default: "mocked-arrow-image.png",
}))

describe("Collapse Component", () => {
  // Test 1: Vérifier que le composant se rend correctement
  it("renders with title and content when open", () => {
    
    const mockToggle = vi.fn() 
    const title = "Mon titre de test"
    const content = "Contenu à afficher"

    render(
      <Collapse title={title} isOpen={true} onToggle={mockToggle}>
        {content}
      </Collapse>,
    )

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(content)).toBeInTheDocument()
    expect(screen.getByAltText("Flèche")).toBeInTheDocument()
  })

  // Test 2: Vérifier que le contenu est caché quand fermé
  it("hides content when closed", () => {
    const mockToggle = vi.fn()
    const title = "Mon titre"
    const content = "Contenu caché"

    render(
      <Collapse title={title} isOpen={false} onToggle={mockToggle}>
        {content}
      </Collapse>,
    )

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.queryByText(content)).not.toBeInTheDocument()
  })
})
