"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Collapse from "../Collapse"

// Mock de l'image pour éviter les erreurs de chargement
vi.mock("@/assets/arrow_top.png", () => ({
  default: "mocked-arrow-image.png",
}))

describe("Collapse Component", () => {
  // Test 1: Vérifier que le composant se rend correctement
  it("renders with title and content when open", () => {
    // ÉTAPE 1: On prépare nos données de test
    const mockToggle = vi.fn() // Fonction simulée pour onToggle
    const title = "Mon titre de test"
    const content = "Contenu à afficher"

    // ÉTAPE 2: On rend le composant avec nos props
    render(
      <Collapse title={title} isOpen={true} onToggle={mockToggle}>
        {content}
      </Collapse>,
    )

    // ÉTAPE 3: On vérifie que les éléments sont présents
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(content)).toBeInTheDocument()
    expect(screen.getByAltText("Flèche")).toBeInTheDocument()
  })

  // Test 2: Vérifier que le contenu est caché quand fermé
  it("hides content when closed", () => {
    const mockToggle = vi.fn()
    const title = "Mon titre"
    const content = "Contenu caché"

    // On rend avec isOpen=false
    render(
      <Collapse title={title} isOpen={false} onToggle={mockToggle}>
        {content}
      </Collapse>,
    )

    // Le titre doit être visible
    expect(screen.getByText(title)).toBeInTheDocument()
    // Mais pas le contenu
    expect(screen.queryByText(content)).not.toBeInTheDocument()
  })
})
