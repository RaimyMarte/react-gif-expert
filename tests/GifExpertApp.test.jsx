import { act, fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en GifExpertApp', () => {
    const category = 'naruto'
    const newCategory = 'saitama'
    const onAddCategory = jest.fn()

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()
    })

    test('onAddCategory ha sido llamada', () => {

        render(<GifExpertApp />)

        expect(onAddCategory).toHaveBeenCalled

    })

    test('onAddCategory debe llamar setCategories si la categoria es diferente', () => {

    })

    test('onAddCategory NO debe de llamar setCategories si la categoria es igual', () => {

    })
})