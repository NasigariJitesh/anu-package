import { getTheme } from 'anu/config';
import { Accordion, FlatList, Typography } from 'anu/lib';
import AccordionChildren from 'anu/lib/composites/accordion/components/accordion-children';
import AccordionTitle from 'anu/lib/composites/accordion/components/accordion-title';
import { Sx, View } from 'dripsy';
import { Source_Sans_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { TextLink } from 'solito/link';

const theme = getTheme();

const source = Source_Sans_Pro({
  weight: ['600'],
  style: 'normal',
  subsets: ['latin'],
});

type Link = { title: string; link: string };

interface ComponentLinks extends Link {
  variants: Link[];
}

interface Links extends Link {
  components: ComponentLinks[];
}

interface SubIndex {
  title: string;
}

interface HeadingProps {
  heading: string;
  links: SubIndex[];
}

const Group = (props: HeadingProps) => {
  return (
    <FlatList
      contentContainerStyle={style.groupList}
      data={props.links}
      renderItem={({ item }) => {
        return (
          <>
            {/* <Typography.Title style={style.groupName}>{item.title}</Typography.Title> */}
            <Accordion
              sx={{ backgroundColor: 'pink' }}
              title={
                <AccordionTitle iconProps={{ size: 18, style: { opacity: 0.7 } }} style={style.groupName}>
                  {item.title}
                </AccordionTitle>
              }
            >
              <AccordionChildren>
                <Typography.Title style={style.heading}>Hello</Typography.Title>
              </AccordionChildren>
            </Accordion>
            {/* <Components links={item.components} /> */}
          </>
        );
      }}
    />
  );
};

// const Components = (props: { links: ComponentLinks[] }) => {
//   const { pathname } = useRouter();

//   return (
//     <FlatList
//       data={props.links}
//       renderItem={({ item }) => {
//         return (
//           <>
//             <Typography.Title style={[style.componentName, pathname === item.link ? style.active : {}]}>
//               <TextLink href={item.link}>{item.title}</TextLink>
//             </Typography.Title>
//             <Categories links={item.variants} />
//           </>
//         );
//       }}
//     />
//   );
// };

// const Categories = (props: { links: Link[] }) => {
//   const { pathname } = useRouter();

//   return (
//     <FlatList
//       data={props.links}
//       renderItem={({ item }) => {
//         return (
//           <Typography.Title style={[style.categoryName, pathname === item.link ? style.active : {}]}>
//             <TextLink href={item.link}>{item.title}</TextLink>
//           </Typography.Title>
//         );
//       }}
//     />
//   );
// };

const Index = (props: HeadingProps) => {
  return (
    <>
      <Typography.Title style={style.heading}>{props.heading}</Typography.Title>
      <Group {...props} />
    </>
  );
};

const Sidebar = () => {
  return (
    <View sx={style.container}>
      <Index
        heading='Components Overview'
        links={[
          {
            title: 'Inputs',

            // components: [
            //   {
            //     link: '/button',
            //     title: 'Button',
            //     variants: [
            //       {
            //         link: '/button#regular',
            //         title: 'Regular',
            //       },
            //     ],
            //   },
            // ],
          },
        ]}
      />
    </View>
  );
};

const style = {
  container: {
    maxWidth: 320,
    width: '100%',
  } as Sx,
  heading: {
    fontFamily: source.style.fontFamily,
    fontSize: 18,
  },
  groupName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
  },
  componentName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginLeft: 20,
    marginVertical: 10,
  },
  categoryName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginLeft: 40,
    marginBottom: 10,
  },
  groupList: {
    marginVertical: 15,
  },
  active: {
    color: theme.colors.$primary,
    opacity: 1,
  },
} as const;

export default Sidebar;
