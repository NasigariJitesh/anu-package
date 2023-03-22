import { FooterProps } from 'components/footer/footer';

export const footerLinks: FooterProps = {
  links: [
    {
      heading: 'footer:list1-heading',
      items: [],
    },
    {
      heading: 'footer:list2-heading',
      items: [
        {
          title: 'footer:list2-item1-title',
          link: '#',
        },
        {
          title: 'footer:list2-item2-title',
          link: '#',
        },
        {
          title: 'footer:list2-item3-title',
          link: '#',
        },
        {
          title: 'footer:list2-item4-title',
          link: '/components/badge',
        },
      ],
    },
    {
      heading: 'footer:list3-heading',
      items: [
        {
          title: 'footer:list3-item1-title',
          link: 'https://discord.com/invite/XyuPshkm',
        },
        {
          title: 'footer:list3-item2-title',
          link: '#',
        },
        {
          title: 'footer:list3-item3-title',
          link: '#',
        },
      ],
    },
  ],
};
