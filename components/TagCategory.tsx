import React from "react"
import { Button, Grid } from "@nextui-org/react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"

type CategoryItems = {
  id: number
  content: string
}

export default function TagCategory({}) {
  const categoryItems: CategoryItems[] = [
    { id: 1, content: "do something" },
    { id: 2, content: "go somewhere" },
    { id: 3, content: "go somewhere" },
    { id: 4, content: "go somewhere" },
    { id: 5, content: "go somewhere" },
    { id: 6, content: "go somewhere" },
    { id: 7, content: "go somewhere" },
    { id: 8, content: "go somewhere" },
    { id: 9, content: "go somewhere" },
  ]
  return (
    <Grid.Container gap={1}>
      {categoryItems.map((categoryItem: CategoryItems) => {
        return (
          <Grid key={categoryItem.id}>
            <Button color="secondary" auto ghost>
              {categoryItem.content}
            </Button>
          </Grid>
        )
      })}
    </Grid.Container>
  )
}
