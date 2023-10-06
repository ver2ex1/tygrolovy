import { headerStyles } from './styles';
import { Box, Menu as MUIMenu, MenuItem } from '@mui/material';
import Logo from '../../assets/images/Logo';
import UkraineFlag from '../../assets/images/UkraineFlag';
import UKFlag from '../../assets/images/UKFlag';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import { slide as Menu } from 'react-burger-menu';
import { Link as AnchorLink } from 'react-scroll/modules';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ArrowDown from '@/assets/images/ArrowDown';

const links = [
  { href: 'about', title: 'about.title_fund' },
  { href: 'report', title: 'reporting.title' },
  { href: 'contacts', title: 'contacts.title' },
];

const Header = () => {
  const classes = headerStyles();
  const router = useRouter();
  const [activeLng, setActiveLng] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('i18nextLng')) ||
      'ua'
  );
  const { t, i18n } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const handleSideBar = () => {
    setOpen(!isOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  const handleChangeLanguage = ({ value }) => {
    setActiveLng(value);
    i18n.changeLanguage(value);
    router.push(
      {
        route: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: value }
    );
  };
  const { width } = useWindowSize();
  return (
    <Box sx={classes.wrapper}>
      <AnchorLink to='/'>
        <Logo sx={classes.logo} />
      </AnchorLink>
      {width >= 660 && (
        <Box sx={classes.links}>
          {links.map((link, index) => (
            <Box sx={classes.link} key={link.href}>
              <AnchorLink to={link.href}>
                <span>{t(link.title)}</span>
              </AnchorLink>
            </Box>
          ))}
        </Box>
      )}
      {width >= 660 && (
        <Box sx={classes.actions}>
          <AnchorLink to='donate' style={classes.donate}>
            {t('donate.title')}
          </AnchorLink>
          <Box
            sx={classes.langDropDown}
            onClick={handleOpenMenu}
            aria-controls='language-menu'
            aria-haspopup='true'
          >
            {activeLng === 'ua' ? <UkraineFlag /> : <UKFlag />}
            <ArrowDown
              sx={{
                ...classes.arrowDown,
                opacity: anchorEl ? '0' : '1',
              }}
            />
          </Box>
          <MUIMenu
            id='language-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            sx={classes.langDropDownContent}
          >
            <MenuItem
              onClick={() => {
                handleChangeLanguage({ value: 'ua' });
                handleCloseMenu();
              }}
              sx={classes.langDropDownItem}
            >
              <UkraineFlag /> UA
              <ArrowDown sx={classes.arrowUp} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleChangeLanguage({ value: 'eng' });
                handleCloseMenu();
              }}
              sx={classes.langDropDownItem}
            >
              <UKFlag /> EN
            </MenuItem>
          </MUIMenu>
        </Box>
      )}
      {width < 660 && (
        <>
          {/* <Switch
            color='success'
            icon={<UkraineFlag />}
            checkedIcon={<UKFlag />}
            disableRipple
            onChange={(event) => handleSwitch({ event })}
            checked={checked}
            sx={classes.switch}
          /> */}
          <Menu
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
            right
            isOpen={isOpen}
            onOpen={handleSideBar}
            onClose={handleSideBar}
            styles={{
              bmBurgerButton: {
                position: 'absolute',
                width: '30px',
                height: '24px',
                right: '35px',
                top: '45px',
              },
              bmBurgerBars: {
                background: '#34422f',
              },
              bmBurgerBarsHover: {
                background: '#fff',
              },
              bmCrossButton: {
                height: '24px',
                width: '24px',
              },
              bmCross: {
                background: '#fff',
              },
              bmMenuWrap: {
                position: 'fixed',
                height: '100%',
                top: 0,
                width: width > 375 ? '300px' : '100%',
              },
              bmMenu: {
                background: '#34422f',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em',
              },
              bmItemList: {
                padding: '0.8em',
              },
              bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <Box sx={classes.links}>
              {links.map((link, index) => (
                <Box sx={classes.mobileLink} key={link.href}>
                  <Link href={`#${link.href}`} onClick={closeSideBar}>
                    {t(link.title)}
                  </Link>
                  {links.length - 1 !== index && width >= 660 && (
                    <div style={classes.divider}></div>
                  )}
                </Box>
              ))}
              <Link
                href='#donate'
                style={classes.mobileDonate}
                onClick={closeSideBar}
              >
                {t('donate.title')}
              </Link>
            </Box>
          </Menu>
        </>
      )}
    </Box>
  );
};

export default Header;
