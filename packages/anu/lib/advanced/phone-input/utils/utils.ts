import { DripsyFinalTheme } from 'dripsy';

import { CountryCodeObject } from '../types';

export const getItemStyles = (theme: DripsyFinalTheme) => {
  const containerStyle = {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  } as const;
  const flagStyle = {
    height: 15,
    width: 25,
  };
  const emojiStyle = {
    fontSize: 14,
    lineHeight: 18,
  };
  const countryNameStyle = {
    fontSize: 14,
    lineHeight: 18,
    color: theme.colors.$onSurface,
    marginLeft: 12,
    marginRight: 6,
    flex: 1,
  };

  const countryCodeStyle = {
    fontSize: 14,
    lineHeight: 18,
    color: theme.colors.$onSurfaceVariant,
  };

  return { containerStyle, flagStyle, emojiStyle, countryCodeStyle, countryNameStyle };
};

export const getDefaultStyles = () => {
  const defaultTextFieldStyles = {
    width: 264,
  };
  const defaultResultsContainerStyle = {
    width: 264,
    maxHeight: 400,
  };
  const defaultSelectedFlagStyle = {
    height: 15,
    width: 25,
  };
  const defaultSelectedEmojiStyle = {
    fontSize: 16,
    lineHeight: 20,
  };
  const defaultTextInputStyle = {
    paddingLeft: 8,
    paddingRight: 0,
    maxWidth: 135,
  };
  return {
    defaultTextFieldStyles,
    defaultResultsContainerStyle,
    defaultSelectedFlagStyle,
    defaultSelectedEmojiStyle,
    defaultTextInputStyle,
  };
};

export const countryCodes: CountryCodeObject[] = [
  {
    name: 'Afghanistan',
    alt: 'AF',
    flag: 'https://flagcdn.com/af.svg',
    countryCode: '+93',
    emoji: '🇦🇫',
  },
  {
    name: 'Albania',
    alt: 'AL',
    flag: 'https://flagcdn.com/al.svg',
    countryCode: '+355',
    emoji: '🇦🇱',
  },
  {
    name: 'Algeria',
    alt: 'DZ',
    flag: 'https://flagcdn.com/dz.svg',
    countryCode: '+213',
    emoji: '🇩🇿',
  },
  {
    name: 'American Samoa',
    alt: 'AS',
    flag: 'https://flagcdn.com/as.svg',
    countryCode: '+1684',
    emoji: '🇦🇸',
  },
  {
    name: 'Andorra',
    alt: 'AD',
    flag: 'https://flagcdn.com/ad.svg',
    countryCode: '+376',
    emoji: '🇦🇩',
  },
  {
    name: 'Angola',
    alt: 'AO',
    flag: 'https://flagcdn.com/ao.svg',
    countryCode: '+244',
    emoji: '🇦🇴',
  },
  {
    name: 'Anguilla',
    alt: 'AI',
    flag: 'https://flagcdn.com/ai.svg',
    countryCode: '+1264',
    emoji: '🇦🇮',
  },
  {
    name: 'Antigua and Barbuda',
    alt: 'AG',
    flag: 'https://flagcdn.com/ag.svg',
    countryCode: '+1268',
    emoji: '🇦🇬',
  },
  {
    name: 'Argentina',
    alt: 'AR',
    flag: 'https://flagcdn.com/ar.svg',
    countryCode: '+54',
    emoji: '🇦🇷',
  },
  {
    name: 'Armenia',
    alt: 'AM',
    flag: 'https://flagcdn.com/am.svg',
    countryCode: '+374',
    emoji: '🇦🇲',
  },
  {
    name: 'Aruba',
    alt: 'AW',
    flag: 'https://flagcdn.com/aw.svg',
    countryCode: '+297',
    emoji: '🇦🇼',
  },
  {
    name: 'Australia',
    alt: 'AU',
    flag: 'https://flagcdn.com/au.svg',
    countryCode: '+61',
    emoji: '🇦🇺',
  },
  {
    name: 'Austria',
    alt: 'AT',
    flag: 'https://flagcdn.com/at.svg',
    countryCode: '+43',
    emoji: '🇦🇹',
  },
  {
    name: 'Azerbaijan',
    alt: 'AZ',
    flag: 'https://flagcdn.com/az.svg',
    countryCode: '+994',
    emoji: '🇦🇿',
  },
  {
    name: 'Bahamas',
    alt: 'BS',
    flag: 'https://flagcdn.com/bs.svg',
    countryCode: '+1242',
    emoji: '🇧🇸',
  },
  {
    name: 'Bahrain',
    alt: 'BH',
    flag: 'https://flagcdn.com/bh.svg',
    countryCode: '+973',
    emoji: '🇧🇭',
  },
  {
    name: 'Bangladesh',
    alt: 'BD',
    flag: 'https://flagcdn.com/bd.svg',
    countryCode: '+880',
    emoji: '🇧🇩',
  },
  {
    name: 'Barbados',
    alt: 'BB',
    flag: 'https://flagcdn.com/bb.svg',
    countryCode: '+1246',
    emoji: '🇧🇧',
  },
  {
    name: 'Belarus',
    alt: 'BY',
    flag: 'https://flagcdn.com/by.svg',
    countryCode: '+375',
    emoji: '🇧🇾',
  },
  {
    name: 'Belgium',
    alt: 'BE',
    flag: 'https://flagcdn.com/be.svg',
    countryCode: '+32',
    emoji: '🇧🇪',
  },
  {
    name: 'Belize',
    alt: 'BZ',
    flag: 'https://flagcdn.com/bz.svg',
    countryCode: '+501',
    emoji: '🇧🇿',
  },
  {
    name: 'Benin',
    alt: 'BJ',
    flag: 'https://flagcdn.com/bj.svg',
    countryCode: '+229',
    emoji: '🇧🇯',
  },
  {
    name: 'Bermuda',
    alt: 'BM',
    flag: 'https://flagcdn.com/bm.svg',
    countryCode: '+1441',
    emoji: '🇧🇲',
  },
  {
    name: 'Bhutan',
    alt: 'BT',
    flag: 'https://flagcdn.com/bt.svg',
    countryCode: '+975',
    emoji: '🇧🇹',
  },
  {
    name: 'Bolivia',
    alt: 'BO',
    flag: 'https://flagcdn.com/bo.svg',
    countryCode: '+591',
    emoji: '🇧🇴',
  },
  {
    name: 'Bonaire, Sint Eustatius & Saba',
    alt: 'BQ',
    flag: 'https://flagcdn.com/bq.svg',
    countryCode: '+599',
    emoji: '🇧🇶',
  },
  {
    name: 'Bosnia & Herzegovina',
    alt: 'BA',
    flag: 'https://flagcdn.com/ba.svg',
    countryCode: '+387',
    emoji: '🇧🇦',
  },
  {
    name: 'Botswana',
    alt: 'BW',
    flag: 'https://flagcdn.com/bw.svg',
    countryCode: '+267',
    emoji: '🇧🇼',
  },
  {
    name: 'Brazil',
    alt: 'BR',
    flag: 'https://flagcdn.com/br.svg',
    countryCode: '+55',
    emoji: '🇧🇷',
  },
  {
    name: 'British Indian Ocean Territory',
    alt: 'IO',
    flag: 'https://flagcdn.com/io.svg',
    countryCode: '+246',
    emoji: '🇮🇴',
  },
  {
    name: 'British Virgin Islands',
    alt: 'VG',
    flag: 'https://flagcdn.com/vg.svg',
    countryCode: '+1284',
    emoji: '🇻🇬',
  },
  {
    name: 'Brunei Darussalam',
    alt: 'BN',
    flag: 'https://flagcdn.com/bn.svg',
    countryCode: '+673',
    emoji: '🇧🇳',
  },
  {
    name: 'Bulgaria',
    alt: 'BG',
    flag: 'https://flagcdn.com/bg.svg',
    countryCode: '+359',
    emoji: '🇧🇬',
  },
  {
    name: 'Burkina Faso',
    alt: 'BF',
    flag: 'https://flagcdn.com/bf.svg',
    countryCode: '+226',
    emoji: '🇧🇫',
  },
  {
    name: 'Burundi',
    alt: 'BI',
    flag: 'https://flagcdn.com/bi.svg',
    countryCode: '+257',
    emoji: '🇧🇮',
  },
  {
    name: 'Cambodia',
    alt: 'KH',
    flag: 'https://flagcdn.com/kh.svg',
    countryCode: '+855',
    emoji: '🇰🇭',
  },
  {
    name: 'Cameroon',
    alt: 'CM',
    flag: 'https://flagcdn.com/cm.svg',
    countryCode: '+237',
    emoji: '🇨🇲',
  },
  {
    name: 'Canada',
    alt: 'CA',
    flag: 'https://flagcdn.com/ca.svg',
    countryCode: '+1',
    emoji: '🇨🇦',
  },
  {
    name: 'Cape Verde',
    alt: 'CV',
    flag: 'https://flagcdn.com/cv.svg',
    countryCode: '+238',
    emoji: '🇨🇻',
  },
  {
    name: 'Cayman Islands',
    alt: 'KY',
    flag: 'https://flagcdn.com/ky.svg',
    countryCode: '+1345',
    emoji: '🇰🇾',
  },
  {
    name: 'Central African Republic',
    alt: 'CF',
    flag: 'https://flagcdn.com/cf.svg',
    countryCode: '+236',
    emoji: '🇨🇫',
  },
  {
    name: 'Chad',
    alt: 'TD',
    flag: 'https://flagcdn.com/td.svg',
    countryCode: '+235',
    emoji: '🇹🇩',
  },
  {
    name: 'Chile',
    alt: 'CL',
    flag: 'https://flagcdn.com/cl.svg',
    countryCode: '+56',
    emoji: '🇨🇱',
  },
  {
    name: 'China',
    alt: 'CN',
    flag: 'https://flagcdn.com/cn.svg',
    countryCode: '+86',
    emoji: '🇨🇳',
  },
  {
    name: 'Colombia',
    alt: 'CO',
    flag: 'https://flagcdn.com/co.svg',
    countryCode: '+57',
    emoji: '🇨🇴',
  },
  {
    name: 'Comoros',
    alt: 'KM',
    flag: 'https://flagcdn.com/km.svg',
    countryCode: '+269',
    emoji: '🇰🇲',
  },
  {
    name: 'Cook Islands',
    alt: 'CK',
    flag: 'https://flagcdn.com/ck.svg',
    countryCode: '+682',
    emoji: '🇨🇰',
  },
  {
    name: 'Costa Rica',
    alt: 'CR',
    flag: 'https://flagcdn.com/cr.svg',
    countryCode: '+506',
    emoji: '🇨🇷',
  },
  {
    name: 'Croatia',
    alt: 'HR',
    flag: 'https://flagcdn.com/hr.svg',
    countryCode: '+385',
    emoji: '🇭🇷',
  },
  {
    name: 'Cuba',
    alt: 'CU',
    flag: 'https://flagcdn.com/cu.svg',
    countryCode: '+53',
    emoji: '🇨🇺',
  },
  {
    name: 'Curaçao',
    alt: 'CW',
    flag: 'https://flagcdn.com/cw.svg',
    countryCode: '+599',
    emoji: '🇨🇼',
  },
  {
    name: 'Cyprus',
    alt: 'CY',
    flag: 'https://flagcdn.com/cy.svg',
    countryCode: '+357',
    emoji: '🇨🇾',
  },
  {
    name: 'Czech Republic',
    alt: 'CZ',
    flag: 'https://flagcdn.com/cz.svg',
    countryCode: '+420',
    emoji: '🇨🇿',
  },
  {
    name: 'Denmark',
    alt: 'DK',
    flag: 'https://flagcdn.com/dk.svg',
    countryCode: '+45',
    emoji: '🇩🇰',
  },
  {
    name: 'Djibouti',
    alt: 'DJ',
    flag: 'https://flagcdn.com/dj.svg',
    countryCode: '+253',
    emoji: '🇩🇯',
  },
  {
    name: 'Dominica',
    alt: 'DM',
    flag: 'https://flagcdn.com/dm.svg',
    countryCode: '+1767',
    emoji: '🇩🇲',
  },
  {
    name: 'Dominican Republic',
    alt: 'DO',
    flag: 'https://flagcdn.com/do.svg',
    countryCode: '+1809',
    emoji: '🇩🇴',
  },
  {
    name: 'Dominican Republic',
    alt: 'DO',
    flag: 'https://flagcdn.com/do.svg',
    countryCode: '+1829',
    emoji: '🇩🇴',
  },
  {
    name: 'Dominican Republic',
    alt: 'DO',
    flag: 'https://flagcdn.com/do.svg',
    countryCode: '+1849',
    emoji: '🇩🇴',
  },
  {
    name: 'DR Congo',
    alt: 'CD',
    flag: 'https://flagcdn.com/cd.svg',
    countryCode: '+243',
    emoji: '🇨🇩',
  },
  {
    name: 'Ecuador',
    alt: 'EC',
    flag: 'https://flagcdn.com/ec.svg',
    countryCode: '+593',
    emoji: '🇪🇨',
  },
  {
    name: 'Egypt',
    alt: 'EG',
    flag: 'https://flagcdn.com/eg.svg',
    countryCode: '+20',
    emoji: '🇪🇬',
  },
  {
    name: 'El Salvador',
    alt: 'SV',
    flag: 'https://flagcdn.com/sv.svg',
    countryCode: '+503',
    emoji: '🇸🇻',
  },
  {
    name: 'Equatorial Guinea',
    alt: 'GQ',
    flag: 'https://flagcdn.com/gq.svg',
    countryCode: '+240',
    emoji: '🇬🇶',
  },
  {
    name: 'Eritrea',
    alt: 'ER',
    flag: 'https://flagcdn.com/er.svg',
    countryCode: '+291',
    emoji: '🇪🇷',
  },
  {
    name: 'Estonia',
    alt: 'EE',
    flag: 'https://flagcdn.com/ee.svg',
    countryCode: '+372',
    emoji: '🇪🇪',
  },
  {
    name: 'Eswatini',
    alt: 'SZ',
    flag: 'https://flagcdn.com/sz.svg',
    countryCode: '+268',
    emoji: '🇸🇿',
  },
  {
    name: 'Ethiopia',
    alt: 'ET',
    flag: 'https://flagcdn.com/et.svg',
    countryCode: '+251',
    emoji: '🇪🇹',
  },
  {
    name: 'Falkland Islands',
    alt: 'FK',
    flag: 'https://flagcdn.com/fk.svg',
    countryCode: '+500',
    emoji: '🇫🇰',
  },
  {
    name: 'Faroe Islands',
    alt: 'FO',
    flag: 'https://flagcdn.com/fo.svg',
    countryCode: '+298',
    emoji: '🇫🇴',
  },
  {
    name: 'Fiji',
    alt: 'FJ',
    flag: 'https://flagcdn.com/fj.svg',
    countryCode: '+679',
    emoji: '🇫🇯',
  },
  {
    name: 'Finland',
    alt: 'FI',
    flag: 'https://flagcdn.com/fi.svg',
    countryCode: '+358',
    emoji: '🇫🇮',
  },
  {
    name: 'France',
    alt: 'FR',
    flag: 'https://flagcdn.com/fr.svg',
    countryCode: '+33',
    emoji: '🇫🇷',
  },
  {
    name: 'French Guiana',
    alt: 'GF',
    flag: 'https://flagcdn.com/gf.svg',
    countryCode: '+594',
    emoji: '🇬🇫',
  },
  {
    name: 'French Polynesia',
    alt: 'PF',
    flag: 'https://flagcdn.com/pf.svg',
    countryCode: '+689',
    emoji: '🇵🇫',
  },

  {
    name: 'Gabon',
    alt: 'GA',
    flag: 'https://flagcdn.com/ga.svg',
    countryCode: '+241',
    emoji: '🇬🇦',
  },
  {
    name: 'Gambia',
    alt: 'GM',
    flag: 'https://flagcdn.com/gm.svg',
    countryCode: '+220',
    emoji: '🇬🇲',
  },
  {
    name: 'Georgia',
    alt: 'GE',
    flag: 'https://flagcdn.com/ge.svg',
    countryCode: '+995',
    emoji: '🇬🇪',
  },
  {
    name: 'Germany',
    alt: 'DE',
    flag: 'https://flagcdn.com/de.svg',
    countryCode: '+49',
    emoji: '🇩🇪',
  },
  {
    name: 'Ghana',
    alt: 'GH',
    flag: 'https://flagcdn.com/gh.svg',
    countryCode: '+233',
    emoji: '🇬🇭',
  },
  {
    name: 'Gibraltar',
    alt: 'GI',
    flag: 'https://flagcdn.com/gi.svg',
    countryCode: '+350',
    emoji: '🇬🇮',
  },
  {
    name: 'Greece',
    alt: 'GR',
    flag: 'https://flagcdn.com/gr.svg',
    countryCode: '+30',
    emoji: '🇬🇷',
  },
  {
    name: 'Greenland',
    alt: 'GL',
    flag: 'https://flagcdn.com/gl.svg',
    countryCode: '+299',
    emoji: '🇬🇱',
  },
  {
    name: 'Grenada',
    alt: 'GD',
    flag: 'https://flagcdn.com/gd.svg',
    countryCode: '+1473',
    emoji: '🇬🇩',
  },
  {
    name: 'Guadeloupe',
    alt: 'GP',
    flag: 'https://flagcdn.com/gp.svg',
    countryCode: '+590',
    emoji: '🇬🇵',
  },
  {
    name: 'Guam',
    alt: 'GU',
    flag: 'https://flagcdn.com/gu.svg',
    countryCode: '+1671',
    emoji: '🇬🇺',
  },
  {
    name: 'Guatemala',
    alt: 'GT',
    flag: 'https://flagcdn.com/gt.svg',
    countryCode: '+502',
    emoji: '🇬🇹',
  },
  {
    name: 'Guinea',
    alt: 'GN',
    flag: 'https://flagcdn.com/gn.svg',
    countryCode: '+224',
    emoji: '🇬🇳',
  },
  {
    name: 'Guinea-Bissau',
    alt: 'GW',
    flag: 'https://flagcdn.com/gw.svg',
    countryCode: '+245',
    emoji: '🇬🇼',
  },
  {
    name: 'Guyana',
    alt: 'GY',
    flag: 'https://flagcdn.com/gy.svg',
    countryCode: '+592',
    emoji: '🇬🇾',
  },
  {
    name: 'Haiti',
    alt: 'HT',
    flag: 'https://flagcdn.com/ht.svg',
    countryCode: '+509',
    emoji: '🇭🇹',
  },
  {
    name: 'Honduras',
    alt: 'HN',
    flag: 'https://flagcdn.com/hn.svg',
    countryCode: '+504',
    emoji: '🇭🇳',
  },
  {
    name: 'Hong Kong',
    alt: 'HK',
    flag: 'https://flagcdn.com/hk.svg',
    countryCode: '+852',
    emoji: '🇭🇰',
  },
  {
    name: 'Hungary',
    alt: 'HU',
    flag: 'https://flagcdn.com/hu.svg',
    countryCode: '+36',
    emoji: '🇭🇺',
  },
  {
    name: 'Iceland',
    alt: 'IS',
    flag: 'https://flagcdn.com/is.svg',
    countryCode: '+354',
    emoji: '🇮🇸',
  },
  {
    name: 'India',
    alt: 'IN',
    flag: 'https://flagcdn.com/in.svg',
    countryCode: '+91',
    emoji: '🇮🇳',
  },
  {
    name: 'Indonesia',
    alt: 'ID',
    flag: 'https://flagcdn.com/id.svg',
    countryCode: '+62',
    emoji: '🇮🇩',
  },
  {
    name: 'Iran',
    alt: 'IR',
    flag: 'https://flagcdn.com/ir.svg',
    countryCode: '+98',
    emoji: '🇮🇷',
  },
  {
    name: 'Iraq',
    alt: 'IQ',
    flag: 'https://flagcdn.com/iq.svg',
    countryCode: '+964',
    emoji: '🇮🇶',
  },
  {
    name: 'Ireland',
    alt: 'IE',
    flag: 'https://flagcdn.com/ie.svg',
    countryCode: '+353',
    emoji: '🇮🇪',
  },
  {
    name: 'Israel',
    alt: 'IL',
    flag: 'https://flagcdn.com/il.svg',
    countryCode: '+972',
    emoji: '🇮🇱',
  },
  {
    name: 'Italy',
    alt: 'IT',
    flag: 'https://flagcdn.com/it.svg',
    countryCode: '+39',
    emoji: '🇮🇹',
  },
  {
    name: 'Ivory Coast',
    alt: 'CI',
    flag: 'https://flagcdn.com/ci.svg',
    countryCode: '+225',
    emoji: '🇨🇮',
  },
  {
    name: 'Jamaica',
    alt: 'JM',
    flag: 'https://flagcdn.com/jm.svg',
    countryCode: '+1876',
    emoji: '🇯🇲',
  },
  {
    name: 'Japan',
    alt: 'JP',
    flag: 'https://flagcdn.com/jp.svg',
    countryCode: '+81',
    emoji: '🇯🇵',
  },
  {
    name: 'Jordan',
    alt: 'JO',
    flag: 'https://flagcdn.com/jo.svg',
    countryCode: '+962',
    emoji: '🇯🇴',
  },
  {
    name: 'Kazakhstan',
    alt: 'KZ',
    flag: 'https://flagcdn.com/kz.svg',
    countryCode: '+7',
    emoji: '🇰🇿',
  },
  {
    name: 'Kenya',
    alt: 'KE',
    flag: 'https://flagcdn.com/ke.svg',
    countryCode: '+254',
    emoji: '🇰🇪',
  },
  {
    name: 'Kiribati',
    alt: 'KI',
    flag: 'https://flagcdn.com/ki.svg',
    countryCode: '+686',
    emoji: '🇰🇮',
  },
  {
    name: 'Kosovo',
    alt: 'XK',
    flag: 'https://flagcdn.com/xk.svg',
    countryCode: '+383',
    emoji: '🇽🇰',
  },
  {
    name: 'Kuwait',
    alt: 'KW',
    flag: 'https://flagcdn.com/kw.svg',
    countryCode: '+965',
    emoji: '🇰🇼',
  },
  {
    name: 'Kyrgyzstan',
    alt: 'KG',
    flag: 'https://flagcdn.com/kg.svg',
    countryCode: '+996',
    emoji: '🇰🇬',
  },
  {
    name: 'Laos',
    alt: 'LA',
    flag: 'https://flagcdn.com/la.svg',
    countryCode: '+856',
    emoji: '🇱🇦',
  },
  {
    name: 'Latvia',
    alt: 'LV',
    flag: 'https://flagcdn.com/lv.svg',
    countryCode: '+371',
    emoji: '🇱🇻',
  },
  {
    name: 'Lebanon',
    alt: 'LB',
    flag: 'https://flagcdn.com/lb.svg',
    countryCode: '+961',
    emoji: '🇱🇧',
  },
  {
    name: 'Lesotho',
    alt: 'LS',
    flag: 'https://flagcdn.com/ls.svg',
    countryCode: '+266',
    emoji: '🇱🇸',
  },
  {
    name: 'Liberia',
    alt: 'LR',
    flag: 'https://flagcdn.com/lr.svg',
    countryCode: '+231',
    emoji: '🇱🇷',
  },
  {
    name: 'Libya',
    alt: 'LY',
    flag: 'https://flagcdn.com/ly.svg',
    countryCode: '+218',
    emoji: '🇱🇾',
  },
  {
    name: 'Liechtenstein',
    alt: 'LI',
    flag: 'https://flagcdn.com/li.svg',
    countryCode: '+423',
    emoji: '🇱🇮',
  },
  {
    name: 'Lithuania',
    alt: 'LT',
    flag: 'https://flagcdn.com/lt.svg',
    countryCode: '+370',
    emoji: '🇱🇹',
  },
  {
    name: 'Luxembourg',
    alt: 'LU',
    flag: 'https://flagcdn.com/lu.svg',
    countryCode: '+352',
    emoji: '🇱🇺',
  },
  {
    name: 'Macau',
    alt: 'MO',
    flag: 'https://flagcdn.com/mo.svg',
    countryCode: '+853',
    emoji: '🇲🇴',
  },
  {
    name: 'Madagascar',
    alt: 'MG',
    flag: 'https://flagcdn.com/mg.svg',
    countryCode: '+261',
    emoji: '🇲🇬',
  },
  {
    name: 'Malawi',
    alt: 'MW',
    flag: 'https://flagcdn.com/mw.svg',
    countryCode: '+265',
    emoji: '🇲🇼',
  },
  {
    name: 'Malaysia',
    alt: 'MY',
    flag: 'https://flagcdn.com/my.svg',
    countryCode: '+60',
    emoji: '🇲🇾',
  },
  {
    name: 'Maldives',
    alt: 'MV',
    flag: 'https://flagcdn.com/mv.svg',
    countryCode: '+960',
    emoji: '🇲🇻',
  },
  {
    name: 'Mali',
    alt: 'ML',
    flag: 'https://flagcdn.com/ml.svg',
    countryCode: '+223',
    emoji: '🇲🇱',
  },
  {
    name: 'Malta',
    alt: 'MT',
    flag: 'https://flagcdn.com/mt.svg',
    countryCode: '+356',
    emoji: '🇲🇹',
  },
  {
    name: 'Marshall Islands',
    alt: 'MH',
    flag: 'https://flagcdn.com/mh.svg',
    countryCode: '+692',
    emoji: '🇲🇭',
  },
  {
    name: 'Martinique',
    alt: 'MQ',
    flag: 'https://flagcdn.com/mq.svg',
    countryCode: '+596',
    emoji: '🇲🇶',
  },
  {
    name: 'Mauritania',
    alt: 'MR',
    flag: 'https://flagcdn.com/mr.svg',
    countryCode: '+222',
    emoji: '🇲🇷',
  },
  {
    name: 'Mauritius',
    alt: 'MU',
    flag: 'https://flagcdn.com/mu.svg',
    countryCode: '+230',
    emoji: '🇲🇺',
  },
  {
    name: 'Mexico',
    alt: 'MX',
    flag: 'https://flagcdn.com/mx.svg',
    countryCode: '+52',
    emoji: '🇲🇽',
  },
  {
    name: 'Micronesia',
    alt: 'FM',
    flag: 'https://flagcdn.com/fm.svg',
    countryCode: '+691',
    emoji: '🇫🇲',
  },
  {
    name: 'Moldova',
    alt: 'MD',
    flag: 'https://flagcdn.com/md.svg',
    countryCode: '+373',
    emoji: '🇲🇩',
  },
  {
    name: 'Monaco',
    alt: 'MC',
    flag: 'https://flagcdn.com/mc.svg',
    countryCode: '+377',
    emoji: '🇲🇨',
  },
  {
    name: 'Mongolia',
    alt: 'MN',
    flag: 'https://flagcdn.com/mn.svg',
    countryCode: '+976',
    emoji: '🇲🇳',
  },
  {
    name: 'Montenegro',
    alt: 'ME',
    flag: 'https://flagcdn.com/me.svg',
    countryCode: '+382',
    emoji: '🇲🇪',
  },
  {
    name: 'Montserrat',
    alt: 'MS',
    flag: 'https://flagcdn.com/ms.svg',
    countryCode: '+1664',
    emoji: '🇲🇸',
  },
  {
    name: 'Morocco',
    alt: 'MA',
    flag: 'https://flagcdn.com/ma.svg',
    countryCode: '+212',
    emoji: '🇲🇦',
  },
  {
    name: 'Mozambique',
    alt: 'MZ',
    flag: 'https://flagcdn.com/mz.svg',
    countryCode: '+258',
    emoji: '🇲🇿',
  },
  {
    name: 'Myanmar',
    alt: 'MM',
    flag: 'https://flagcdn.com/mm.svg',
    countryCode: '+95',
    emoji: '🇲🇲',
  },
  {
    name: 'Namibia',
    alt: 'NA',
    flag: 'https://flagcdn.com/na.svg',
    countryCode: '+264',
    emoji: '🇳🇦',
  },
  {
    name: 'Nauru',
    alt: 'NR',
    flag: 'https://flagcdn.com/nr.svg',
    countryCode: '+674',
    emoji: '🇳🇷',
  },
  {
    name: 'Nepal',
    alt: 'NP',
    flag: 'https://flagcdn.com/np.svg',
    countryCode: '+977',
    emoji: '🇳🇵',
  },
  {
    name: 'Netherlands',
    alt: 'NL',
    flag: 'https://flagcdn.com/nl.svg',
    countryCode: '+31',
    emoji: '🇳🇱',
  },
  {
    name: 'New Caledonia',
    alt: 'NC',
    flag: 'https://flagcdn.com/nc.svg',
    countryCode: '+687',
    emoji: '🇳🇨',
  },
  {
    name: 'New Zealand',
    alt: 'NZ',
    flag: 'https://flagcdn.com/nz.svg',
    countryCode: '+64',
    emoji: '🇳🇿',
  },
  {
    name: 'Nicaragua',
    alt: 'NI',
    flag: 'https://flagcdn.com/ni.svg',
    countryCode: '+505',
    emoji: '🇳🇮',
  },
  {
    name: 'Niger',
    alt: 'NE',
    flag: 'https://flagcdn.com/ne.svg',
    countryCode: '+227',
    emoji: '🇳🇪',
  },
  {
    name: 'Nigeria',
    alt: 'NG',
    flag: 'https://flagcdn.com/ng.svg',
    countryCode: '+234',
    emoji: '🇳🇬',
  },
  {
    name: 'Niue',
    alt: 'NU',
    flag: 'https://flagcdn.com/nu.svg',
    countryCode: '+683',
    emoji: '🇳🇺',
  },
  {
    name: 'Norfolk Island',
    alt: 'NF',
    flag: 'https://flagcdn.com/nf.svg',
    countryCode: '+672',
    emoji: '🇳🇫',
  },
  {
    name: 'North Korea',
    alt: 'KP',
    flag: 'https://flagcdn.com/kp.svg',
    countryCode: '+850',
    emoji: '🇰🇵',
  },
  {
    name: 'North Macedonia',
    alt: 'MK',
    flag: 'https://flagcdn.com/mk.svg',
    countryCode: '+389',
    emoji: '🇲🇰',
  },
  {
    name: 'Northern Mariana Islands',
    alt: 'MP',
    flag: 'https://flagcdn.com/mp.svg',
    countryCode: '+1670',
    emoji: '🇲🇵',
  },
  {
    name: 'Norway',
    alt: 'NO',
    flag: 'https://flagcdn.com/no.svg',
    countryCode: '+47',
    emoji: '🇳🇴',
  },
  {
    name: 'Oman',
    alt: 'OM',
    flag: 'https://flagcdn.com/om.svg',
    countryCode: '+968',
    emoji: '🇴🇲',
  },
  {
    name: 'Pakistan',
    alt: 'PK',
    flag: 'https://flagcdn.com/pk.svg',
    countryCode: '+92',
    emoji: '🇵🇰',
  },
  {
    name: 'Palau',
    alt: 'PW',
    flag: 'https://flagcdn.com/pw.svg',
    countryCode: '+680',
    emoji: '🇵🇼',
  },
  {
    name: 'Palestine',
    alt: 'PS',
    flag: 'https://flagcdn.com/ps.svg',
    countryCode: '+970',
    emoji: '🇵🇸',
  },
  {
    name: 'Panama',
    alt: 'PA',
    flag: 'https://flagcdn.com/pa.svg',
    countryCode: '+507',
    emoji: '🇵🇦',
  },
  {
    name: 'Papua New Guinea',
    alt: 'PG',
    flag: 'https://flagcdn.com/pg.svg',
    countryCode: '+675',
    emoji: '🇵🇬',
  },
  {
    name: 'Paraguay',
    alt: 'PY',
    flag: 'https://flagcdn.com/py.svg',
    countryCode: '+595',
    emoji: '🇵🇾',
  },
  {
    name: 'Peru',
    alt: 'PE',
    flag: 'https://flagcdn.com/pe.svg',
    countryCode: '+51',
    emoji: '🇵🇪',
  },
  {
    name: 'Philippines',
    alt: 'PH',
    flag: 'https://flagcdn.com/ph.svg',
    countryCode: '+63',
    emoji: '🇵🇭',
  },
  {
    name: 'Pitcairn Islands',
    alt: 'PN',
    flag: 'https://flagcdn.com/pn.svg',
    countryCode: '+64',
    emoji: '🇵🇳',
  },
  {
    name: 'Poland',
    alt: 'PL',
    flag: 'https://flagcdn.com/pl.svg',
    countryCode: '+48',
    emoji: '🇵🇱',
  },
  {
    name: 'Portugal',
    alt: 'PT',
    flag: 'https://flagcdn.com/pt.svg',
    countryCode: '+351',
    emoji: '🇵🇹',
  },
  {
    name: 'Puerto Rico',
    alt: 'PR',
    flag: 'https://flagcdn.com/pr.svg',
    countryCode: '+1',
    emoji: '🇵🇷',
  },
  {
    name: 'Qatar',
    alt: 'QA',
    flag: 'https://flagcdn.com/qa.svg',
    countryCode: '+974',
    emoji: '🇶🇦',
  },
  {
    name: 'Republic of the Congo',
    alt: 'CG',
    flag: 'https://flagcdn.com/cg.svg',
    countryCode: '+242',
    emoji: '🇨🇬',
  },
  {
    name: 'Réunion',
    alt: 'RE',
    flag: 'https://flagcdn.com/re.svg',
    countryCode: '+262',
    emoji: '🇷🇪',
  },
  {
    name: 'Romania',
    alt: 'RO',
    flag: 'https://flagcdn.com/ro.svg',
    countryCode: '+40',
    emoji: '🇷🇴',
  },
  {
    name: 'Russia',
    alt: 'RU',
    flag: 'https://flagcdn.com/ru.svg',
    countryCode: '+7',
    emoji: '🇷🇺',
  },
  {
    name: 'Rwanda',
    alt: 'RW',
    flag: 'https://flagcdn.com/rw.svg',
    countryCode: '+250',
    emoji: '🇷🇼',
  },
  {
    name: 'Saint Helena',
    alt: 'SH',
    flag: 'https://flagcdn.com/sh.svg',
    countryCode: '+247',
    emoji: '🇸🇭',
  },
  {
    name: 'Saint Helena',
    alt: 'SH',
    flag: 'https://flagcdn.com/sh.svg',
    countryCode: '+290',
    emoji: '🇸🇭',
  },
  {
    name: 'Saint Kitts and Nevis',
    alt: 'KN',
    flag: 'https://flagcdn.com/kn.svg',
    countryCode: '+1869',
    emoji: '🇰🇳',
  },
  {
    name: 'Saint Lucia',
    alt: 'LC',
    flag: 'https://flagcdn.com/lc.svg',
    countryCode: '+1758',
    emoji: '🇱🇨',
  },
  {
    name: 'Saint Pierre & Miquelon',
    alt: 'PM',
    flag: 'https://flagcdn.com/pm.svg',
    countryCode: '+508',
    emoji: '🇵🇲',
  },
  {
    name: 'Saint Vincent & the Grenadines',
    alt: 'VC',
    flag: 'https://flagcdn.com/vc.svg',
    countryCode: '+1784',
    emoji: '🇻🇨',
  },
  {
    name: 'Samoa',
    alt: 'WS',
    flag: 'https://flagcdn.com/ws.svg',
    countryCode: '+685',
    emoji: '🇼🇸',
  },
  {
    name: 'San Marino',
    alt: 'SM',
    flag: 'https://flagcdn.com/sm.svg',
    countryCode: '+378',
    emoji: '🇸🇲',
  },
  {
    name: 'São Tomé & Príncipe',
    alt: 'ST',
    flag: 'https://flagcdn.com/st.svg',
    countryCode: '+239',
    emoji: '🇸🇹',
  },
  {
    name: 'Saudi Arabia',
    alt: 'SA',
    flag: 'https://flagcdn.com/sa.svg',
    countryCode: '+966',
    emoji: '🇸🇦',
  },
  {
    name: 'Senegal',
    alt: 'SN',
    flag: 'https://flagcdn.com/sn.svg',
    countryCode: '+221',
    emoji: '🇸🇳',
  },
  {
    name: 'Serbia',
    alt: 'RS',
    flag: 'https://flagcdn.com/rs.svg',
    countryCode: '+381',
    emoji: '🇷🇸',
  },
  {
    name: 'Seychelles',
    alt: 'SC',
    flag: 'https://flagcdn.com/sc.svg',
    countryCode: '+248',
    emoji: '🇸🇨',
  },
  {
    name: 'Sierra Leone',
    alt: 'SL',
    flag: 'https://flagcdn.com/sl.svg',
    countryCode: '+232',
    emoji: '🇸🇱',
  },
  {
    name: 'Singapore',
    alt: 'SG',
    flag: 'https://flagcdn.com/sg.svg',
    countryCode: '+65',
    emoji: '🇸🇬',
  },
  {
    name: 'Sint Maarten',
    alt: 'SX',
    flag: 'https://flagcdn.com/sx.svg',
    countryCode: '+1721',
    emoji: '🇸🇽',
  },
  {
    name: 'Slovakia',
    alt: 'SK',
    flag: 'https://flagcdn.com/sk.svg',
    countryCode: '+421',
    emoji: '🇸🇰',
  },
  {
    name: 'Slovenia',
    alt: 'SI',
    flag: 'https://flagcdn.com/si.svg',
    countryCode: '+386',
    emoji: '🇸🇮',
  },
  {
    name: 'Solomon Islands',
    alt: 'SB',
    flag: 'https://flagcdn.com/sb.svg',
    countryCode: '+677',
    emoji: '🇸🇧',
  },
  {
    name: 'Somalia',
    alt: 'SO',
    flag: 'https://flagcdn.com/so.svg',
    countryCode: '+252',
    emoji: '🇸🇴',
  },
  {
    name: 'South Africa',
    alt: 'ZA',
    flag: 'https://flagcdn.com/za.svg',
    countryCode: '+27',
    emoji: '🇿🇦',
  },
  {
    name: 'South Korea',
    alt: 'KR',
    flag: 'https://flagcdn.com/kr.svg',
    countryCode: '+82',
    emoji: '🇰🇷',
  },
  {
    name: 'South Sudan',
    alt: 'SS',
    flag: 'https://flagcdn.com/ss.svg',
    countryCode: '+211',
    emoji: '🇸🇸',
  },
  {
    name: 'Spain',
    alt: 'ES',
    flag: 'https://flagcdn.com/es.svg',
    countryCode: '+34',
    emoji: '🇪🇸',
  },
  {
    name: 'Sri Lanka',
    alt: 'LK',
    flag: 'https://flagcdn.com/lk.svg',
    countryCode: '+94',
    emoji: '🇱🇰',
  },
  {
    name: 'Sudan',
    alt: 'SD',
    flag: 'https://flagcdn.com/sd.svg',
    countryCode: '+249',
    emoji: '🇸🇩',
  },
  {
    name: 'Suriname',
    alt: 'SR',
    flag: 'https://flagcdn.com/sr.svg',
    countryCode: '+597',
    emoji: '🇸🇷',
  },
  {
    name: 'Sweden',
    alt: 'SE',
    flag: 'https://flagcdn.com/se.svg',
    countryCode: '+46',
    emoji: '🇸🇪',
  },
  {
    name: 'Switzerland',
    alt: 'CH',
    flag: 'https://flagcdn.com/ch.svg',
    countryCode: '+41',
    emoji: '🇨🇭',
  },
  {
    name: 'Syria',
    alt: 'SY',
    flag: 'https://flagcdn.com/sy.svg',
    countryCode: '+963',
    emoji: '🇸🇾',
  },
  {
    name: 'Taiwan',
    alt: 'TW',
    flag: 'https://flagcdn.com/tw.svg',
    countryCode: '+886',
    emoji: '🇹🇼',
  },
  {
    name: 'Tajikistan',
    alt: 'TJ',
    flag: 'https://flagcdn.com/tj.svg',
    countryCode: '+992',
    emoji: '🇹🇯',
  },
  {
    name: 'Tanzania',
    alt: 'TZ',
    flag: 'https://flagcdn.com/tz.svg',
    countryCode: '+255',
    emoji: '🇹🇿',
  },
  {
    name: 'Thailand',
    alt: 'TH',
    flag: 'https://flagcdn.com/th.svg',
    countryCode: '+66',
    emoji: '🇹🇭',
  },
  {
    name: 'Timor-Leste',
    alt: 'TL',
    flag: 'https://flagcdn.com/tl.svg',
    countryCode: '+670',
    emoji: '🇹🇱',
  },
  {
    name: 'Togo',
    alt: 'TG',
    flag: 'https://flagcdn.com/tg.svg',
    countryCode: '+228',
    emoji: '🇹🇬',
  },
  {
    name: 'Tokelau',
    alt: 'TK',
    flag: 'https://flagcdn.com/tk.svg',
    countryCode: '+690',
    emoji: '🇹🇰',
  },
  {
    name: 'Tonga',
    alt: 'TO',
    flag: 'https://flagcdn.com/to.svg',
    countryCode: '+676',
    emoji: '🇹🇴',
  },
  {
    name: 'Trinidad & Tobago',
    alt: 'TT',
    flag: 'https://flagcdn.com/tt.svg',
    countryCode: '+1868',
    emoji: '🇹🇹',
  },
  {
    name: 'Tunisia',
    alt: 'TN',
    flag: 'https://flagcdn.com/tn.svg',
    countryCode: '+216',
    emoji: '🇹🇳',
  },
  {
    name: 'Turkey',
    alt: 'TR',
    flag: 'https://flagcdn.com/tr.svg',
    countryCode: '+90',
    emoji: '🇹🇷',
  },
  {
    name: 'Turkmenistan',
    alt: 'TM',
    flag: 'https://flagcdn.com/tm.svg',
    countryCode: '+993',
    emoji: '🇹🇲',
  },
  {
    name: 'Turks and Caicos Islands',
    alt: 'TC',
    flag: 'https://flagcdn.com/tc.svg',
    countryCode: '+1649',
    emoji: '🇹🇨',
  },
  {
    name: 'Tuvalu',
    alt: 'TV',
    flag: 'https://flagcdn.com/tv.svg',
    countryCode: '+688',
    emoji: '🇹🇻',
  },
  {
    name: 'Uganda',
    alt: 'UG',
    flag: 'https://flagcdn.com/ug.svg',
    countryCode: '+256',
    emoji: '🇺🇬',
  },
  {
    name: 'Ukraine',
    alt: 'UA',
    flag: 'https://flagcdn.com/ua.svg',
    countryCode: '+380',
    emoji: '🇺🇦',
  },
  {
    name: 'United Arab Emirates',
    alt: 'AE',
    flag: 'https://flagcdn.com/ae.svg',
    countryCode: '+971',
    emoji: '🇦🇪',
  },
  {
    name: 'United Kingdom',
    alt: 'GB',
    flag: 'https://flagcdn.com/gb.svg',
    countryCode: '+44',
    emoji: '🇬🇧',
  },
  {
    name: 'United States of America',
    alt: 'US',
    flag: 'https://flagcdn.com/us.svg',
    countryCode: '+1',
    emoji: '🇺🇸',
  },
  {
    name: 'United States Virgin Islands',
    alt: 'VI',
    flag: 'https://flagcdn.com/vi.svg',
    countryCode: '+1340',
    emoji: '🇻🇮',
  },
  {
    name: 'Uruguay',
    alt: 'UY',
    flag: 'https://flagcdn.com/uy.svg',
    countryCode: '+598',
    emoji: '🇺🇾',
  },
  {
    name: 'Uzbekistan',
    alt: 'UZ',
    flag: 'https://flagcdn.com/uz.svg',
    countryCode: '+998',
    emoji: '🇺🇿',
  },
  {
    name: 'Vanuatu',
    alt: 'VU',
    flag: 'https://flagcdn.com/vu.svg',
    countryCode: '+678',
    emoji: '🇻🇺',
  },

  {
    name: 'Venezuela',
    alt: 'VE',
    flag: 'https://flagcdn.com/ve.svg',
    countryCode: '+58',
    emoji: '🇻🇪',
  },
  {
    name: 'Vietnam',
    alt: 'VN',
    flag: 'https://flagcdn.com/vn.svg',
    countryCode: '+84',
    emoji: '🇻🇳',
  },
  {
    name: 'Wallis and Futuna',
    alt: 'WF',
    flag: 'https://flagcdn.com/wf.svg',
    countryCode: '+681',
    emoji: '🇼🇫',
  },
  {
    name: 'Yemen',
    alt: 'YE',
    flag: 'https://flagcdn.com/ye.svg',
    countryCode: '+967',
    emoji: '🇾🇪',
  },
  {
    name: 'Zambia',
    alt: 'ZM',
    flag: 'https://flagcdn.com/zm.svg',
    countryCode: '+260',
    emoji: '🇿🇲',
  },
  {
    name: 'Zimbabwe',
    alt: 'ZW',
    flag: 'https://flagcdn.com/zw.svg',
    countryCode: '+263',
    emoji: '🇿🇼',
  },
];
