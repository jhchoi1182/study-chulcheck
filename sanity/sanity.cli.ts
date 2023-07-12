import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '900orqfu',
    dataset: 'production',
  },
  // graphql: [
  //   {
  //     playground: false,
  //     tag: 'experiment',
  //     workspace: 'staging',
  //     id: 'schema-experiment',
  //   },
  // ],
})
