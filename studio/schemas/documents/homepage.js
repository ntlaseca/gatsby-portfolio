import { MdHome } from 'react-icons/md'

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: MdHome,
  liveEdit: false,
  // Uncomment the next line if you want to prevent pages from being created or deleted in the Studio.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'introBlock',
      title: 'Intro block',
      type: 'blockText'
    }
  ]
}
