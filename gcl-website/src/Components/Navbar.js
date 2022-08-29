import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();

  const tabs = [
    { label: 'About Us', href: '/about' },
    { label: 'Join Clubs', href: '/join-clubs' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Shop', href: '/shop' },
    { label: 'Mailing List', href: 'https://mailchi.mp/97830933907d/signup' },
    { label: 'Contact', href: '/contact' },
  ];

  // Set the currently selected tab
  const initialValue = tabs.findIndex((tab) =>
    location.pathname.includes(tab.href)
  );
  const [value, setValue] = useState(initialValue >= 0 ? initialValue : false);

  // The anchor for the navigation menu (which displays on small screens)
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);

  // Breakpoint for small vs. large screens
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: theme.spacing(2),
        }}
      >
        <Link
          to="/"
          style={{ height: theme.spacing(4) }}
          onClick={() => setValue(false)}
        >
          <Box
            component="img"
            alt="Girls Code Lincoln"
            src="/assets/img/girlscodelincoln-nav.svg"
            sx={{
              height: 'inherit',
              maxWidth: '45vw',
            }}
          />
        </Link>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: theme.spacing(2),
          }}
        >
          {isLargeScreen && (
            <NavbarTabs tabs={tabs} value={value} setValue={setValue} />
          )}

          <Button
            component={Link}
            to="/donate"
            variant="contained"
            color="secondary"
          >
            Donate
          </Button>

          {!isLargeScreen && (
            <>
              <IconButton
                aria-label="Toggle Navigation Menu"
                id="toggle-navigation-menu"
                color="inherit"
                sx={{ height: theme.spacing(6), width: theme.spacing(6) }}
                onClick={(event) =>
                  setMenuAnchorElement(
                    Boolean(menuAnchorElement) ? null : event.currentTarget
                  )
                }
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>

              <Menu
                anchorEl={menuAnchorElement}
                open={Boolean(menuAnchorElement)}
                onClose={() => setMenuAnchorElement(null)}
                MenuListProps={{
                  'aria-labelledby': 'toggle-navigation-menu',
                }}
              >
                <NavbarTabs
                  tabs={tabs}
                  value={value}
                  setValue={setValue}
                  orientation="vertical"
                />
              </Menu>
            </>
          )}
        </Box>
      </AppBar>

      <Box sx={theme.mixins.toolbar} />
    </>
  );
};

const NavbarTabs = (props) => {
  return (
    <Tabs
      value={props.value}
      onChange={(event, value) => props.setValue(value)}
      aria-label="navigation"
      indicatorColor="secondary"
      textColor="inherit"
      orientation={props.orientation}
    >
      {props.tabs.map((tab) =>
        tab.href.startsWith('/') || tab.href.startsWith('#') ? (
          <Tab
            component={Link}
            label={tab.label}
            to={tab.href}
            key={tab.href}
          />
        ) : (
          <Tab component="a" label={tab.label} href={tab.href} key={tab.href} />
        )
      )}
    </Tabs>
  );
};

export default Navbar;
