import { FooterProps } from 'components/footer/footer';

export const footerLinks: FooterProps = {
  links: [
    {
      heading: 'footer:list1-heading',
      items: [
        {
          title: 'footer:list1-item1-title',
          link: '/getting-started',
        },
        {
          title: 'footer:list1-item2-title',
          link: '/theming',
        },
        {
          title: 'footer:list1-item3-title',
          link: '/components/avatar',
        },
        {
          title: 'footer:list1-item4-title',
          link: 'https://www.npmjs.com/package/@anu-dev/core',
        },
      ],
    },
    {
      heading: 'footer:list2-heading',
      items: [
        {
          title: 'footer:list2-item1-title',
          link: 'https://discord.gg/S5pxcHyHXR',
        },
        {
          title: 'footer:list2-item2-title',
          link: 'https://github.com/mocktheta/anu',
        },
        {
          title: 'footer:list2-item3-title',
          link: 'https://github.com/mocktheta/anu/issues',
        },
      ],
    },
  ],
};
