import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import publication from './schemas/publication'
import project from './schemas/project'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, author, publication, blockContent],
}
