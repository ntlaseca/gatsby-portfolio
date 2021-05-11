import { MdBusiness } from 'react-icons/md'

export default {
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  // You probably want to uncomment the next line once you've made a companyInfo document in the Studio. This will remove the companyInfo document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  icon: MdBusiness,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string'
    },
    {
      name: 'city',
      title: 'City',
      type: 'string'
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string'
    }
  ]
}
