import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:1337/graphql',
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/types.ts': {
      config: {
        useTypeImports: true,
      },
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}

export default config
