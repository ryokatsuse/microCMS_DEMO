import { Tag } from './tag'

export type microCmsData = {
  id: string
  name: string
  image: { url: string }
  body: string
  tags: Tag[]
}
