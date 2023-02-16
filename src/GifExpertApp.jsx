import { useState } from "react"
import { AddCategory, GifGrid} from "./components"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Demon Slayer'])

  const onAddCategory = (NewCategory) => {

    if (categories.includes(NewCategory)) return

    setCategories([NewCategory, ...categories])
  }

  // const onAddCategory = () => setCategories(categories.concat ('Naruto'))

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory
        NewCategory={onAddCategory}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }

    </>
  )
}