import { Avatar, BottomNavigation, BottomNavigationAction, Box, Card, Paper, SvgIcon, Typography } from "@mui/material";
import Head from "next/head";
import NotificationIcon from '../images/Notification.svg';
import SearchIcon from '../images/Search.svg';
import Profile from '../images/profile.png';
import ArrowIcon from '@mui/icons-material/ArrowForward';
import WalletIcon from '../images/Group.svg';
import HomeIcon from '../images/home.svg';
import V3Icon from '../images/v3.svg';
import V4Icon from '../images/v4.svg';
import OfferIcon from '../images/offer.svg';


function Transaction({ transaction }) {
  return (

          <Box  
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 7,
              paddingRight: 7,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                }}
            >
              <Avatar 
                sx={{
                  width: 49,
                  height: 49,
                  marginRight: 3,
                  }}
                src={"https://mui.com/static/images/avatar/1.jpg"} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'start',
                  }}
              >
                <Typography 
                  sx={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginTop: -1,
                    }}
                variant="body1" >
                  Samwell A.
                </Typography>
                <Typography 
                  sx={{
                    fontSize: '16px',
                    color: '#61697D',
                    }}
                  variant="body2" >
                  10 Apr, 08:37
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" >
              - <span style={{fontSize: "14px"}}>TOKEN</span> 187
            </Typography>
          </Box>
  )
}

function WalletCard({ wallet, active }) {
  return (
    <Card
      sx={{
        minWidth: 210,
        width: 198,
        minHeight: 230,
        backgroundColor: active? theme => theme.palette.primary.main: '#F1F5FF',
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        padding: 5,
        color: active? 'white': '#474B4F',
        borderRadius: 5,
        }}
      elevation={0}
    >
      <SvgIcon component={WalletIcon} 
        viewBox="0 0 20 20"
        sx={{
          width: 20,
          height: 20,
          fill: '#474B4F',
          }}
      />
      <Box>
      <Typography variant="h5" >
        Token 200
      </Typography>
      <Typography 
        variant="body2" >
        Jun 21, 2021
      </Typography>
      </Box>
      <Box>
      <Typography variant="caption" >
        WALLET 
      </Typography>
      <Typography variant="body2" >
        Greenstand
      </Typography>
      </Box>
    </Card>
  )
}

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginTop: 8,
            paddingLeft: 7,
            paddingRight: 7,
            }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              width: '100%',
              }}
          >
            <Avatar src={"https://mui.com/static/images/avatar/1.jpg"} 
              sx={{
                width: 49,
                height: 49,
                marginRight: 3,
                }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                }}
            >
              <Typography variant="h1"
                sx={{
                  fontSize: '14px',
                  }}
              >Total Balance</Typography>
              <Typography 
                sx={{
                  fontSize: '22px',
                  fontWeight: '600',
                  marginTop: .8,
                  }}
                variant="h2">Token 4,822,142</Typography>
            </Box>
          </Box>
          <SvgIcon component={SearchIcon}
            sx={{

              width: 28,
              height: 28,
            }}
            viewBox="0 0 28 28"
          />
          <SvgIcon component={NotificationIcon}
            sx={{

              width: 28,
              height: 30,
              marginLeft: 7,
            }}
            viewBox="0 0 28 30"
          />
        </Box>
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginTop: 9.5,
            paddingLeft: 7,
            paddingRight: 7,
            }}
            >
            <Typography variant="h5" >
              Wallets
            </Typography>
            <ArrowIcon />
        </Box>
        <Box
          sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'row',
            wrap: 'nowrap',
            overflow: 'auto',
            overflowX: 'hidden',
            }}
        >
          {[{},{}].map((wallet, index) => (
          <WalletCard 
            wallet={wallet}
            active={index === 0}
          />
          ))}
        </Box>
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginTop: 9.5,
            paddingLeft: 7,
            paddingRight: 7,
            }}
            >
            <Typography variant="h5" >
              Last Transactions
            </Typography>
            <ArrowIcon />
        </Box>
        <Box>
          {[{},{},{},{},{},{}].map((transaction, index) => (
            <Transaction transaction={transaction} />
            ))}
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
          <BottomNavigation
            value={'Recents'}
            sx={{
              "& svg": {
                width: 36,
                height: 36,
                },
                }}
          >
            <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
            <BottomNavigationAction label="v3" icon={<V3Icon />} />
            <BottomNavigationAction label="v4" icon={<V4Icon />} />
            <BottomNavigationAction label="offer" icon={<OfferIcon />} />
          </BottomNavigation>
        </Paper>
      </main>
    </div>
  )
}
