import { dataBooks } from "../utils/data"

export const getBookBySlug = (slug: string) => {
  return dataBooks.find((book) => book.slug === slug)
}