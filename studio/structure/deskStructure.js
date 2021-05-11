import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'
import landingPages from './landingPages'

const hiddenTypes = ['companyInfo', 'homepage', 'page', 'route', 'siteSettings']

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.documentListItem()
        .title('Homepage')
        .schemaType('homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),
      landingPages,
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])