import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import './style.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import CallMadeIcon from '@material-ui/icons/CallMade';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    textAlign: 'center',
    margin: '0 auto',
    background: 'black',
    borderRadius: 27,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  arrowBtn: {
    borderRadius: 30,
    background: grey[900],
    color: '#ffffff',
  },
  avatar: {
    backgroundColor: grey[900],
  },
  left: {
    paddingLeft: 3,
  },
  white: {
    color: 'white',
  },
  grey: {
    color: 'grey',
  },
  topSpacing: {
    marginTop: 20,
  },
  bold: {
    fontWeight: 'bold',
    color: 'white',
  },
  topSpacing70: {
    marginTop: 70,
  },
  topSpacing12: {
    marginTop: 17,
  },
  topLeftSpacing: {
    marginLeft: -19,
    marginTop: 20,
  },
  titleSpacing: {
    marginTop: -44,
  },
  maxBtn: {
    borderRadius: 9,
    border: '2px solid white'
  },
  maxPosi: {
    position: 'absolute',
    top: 127,
    right: -170,
  },
  marginLeft: {
    marginLeft: 80,
  },
  sizeWhite: {
    color: 'white',
    fontSize: 15,
  },
  contentSpacing: {
    padding: 44,
    color: 'grey',
    textAlign: 'left',
  },
  button: {
    background: '#0566c7',
    width: '80%',
    borderRadius: 17,
    padding: 20
  },
  imgspacing: {
    marginLeft: -87,
  },
  spacingwhite: {
    color: 'white',
    padding: 10,
  },
  hPadding: {
    padding: '0px 30px',
  },
  fontSizeGrey: {
    fontSize: 37,
    color: 'grey',
  },
  typoGrey: {
    marginLeft: -12,
    color: 'grey',
  },
  firstTitle: {
    marginTop: -8,
  },
  firstsubTitle: {
    marginTop: -4,
  },
  secTitle: {
    marginTop: 44,
  },
  secsubTitle: {
    marginTop: -5,
    marginLeft: 16,
  },
  thirdTitle: {
    marginTop: 47,
  },
  thirdsubTitle: {
    marginTop: -5,
    marginLeft: 12,
  },
  iconLeft: {
    marginLeft: 25,
  },
  pSpacing: {
    paddingBottom: 80,
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="black-background">
      <div className="top-spacing">
        <IconButton aria-label="add to favorites" className={classes.arrowBtn}>
          <ArrowBackIosIcon fontSize="small" className={classes.left} />
        </IconButton>
      </div>
      <div>
        <Card className={classes.root}>
          <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.topSpacing}>
            <Grid item>
              <Typography variant="h6" component="h5" className={classes.white}>
                Deposit
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="h5" className={classes.grey}>
                Withdraw
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.topSpacing70}>
            <Grid item md={8}>
              <Grid container direction="column" justify="flex-end" alignItems="center" className={classes.marginLeft}>
                <Grid item>
                  <Typography variant="h2" component="h5" className={classes.bold}>
                    0 ETH
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="h5" className={classes.grey}>
                    $0.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} className={classes.topSpacing12}>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                  <Button variant="outlined" size="medium" color="primary" className={classes.maxBtn}>
                    <Typography variant="h6" component="h6" className={classes.sizeWhite}>
                      MAX
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" spacing={5} className={classes.topSpacing}>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <img src={image1} />
                </Grid>
                <Grid item>
                  <span className="label-size">Metamask</span>
                </Grid>
                <Grid item className={classes.topSpacing}>
                  <span className="sublabel-size"> Balance: 14.94782 ETH</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <img src={image3} />
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <img src={image2} />
                </Grid>
                <Grid item>
                  <span className="label-size">Casino Wallet</span>
                </Grid>
                <Grid item className={classes.topSpacing}>
                  <span className="sublabel-size">Balance: 0 ETH </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <CardContent>
            <Typography className={classes.contentSpacing}>
              We use <span className={classes.white}>Polygon</span> for 5x faster transaction speeds and lower fees.
            All your deposits stya in your Metamask wallet and we swap the network using <span className={classes.white}>Connext</span> for faster deposit and withdrawals.
          </Typography>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<img src={image1} className={classes.imgspacing} />}
            >
              <Typography variant="h5" component="h5" className={classes.white}>
                Deposit ETH
            </Typography>
            </Button>
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item className={classes.topSpacing}>
                <span className="bottomlabel-size">Gas Fee:</span> <span className="label-size">0.0 ETH ($0.00)</span>
              </Grid>
            </Grid>
            <Grid className={classes.topSpacing}></Grid>
          </CardContent>
        </Card>
      </div>

      <div className={classes.topSpacing}>
        <Card className={classes.root}>
          <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.topSpacing}>
            <Grid item className={classes.topSpacing}>
              <Typography variant="h4" component="h5" className={classes.bold}>
                Deposit Pending
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="flex-start">
            <Grid item className={classes.hPadding}>
              <span className="white-font-size">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus pellentesque molis.</span>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" spacing={2} className={classes.topLeftSpacing}>
            <Grid item className={classes.iconLeft}>
              <Grid container direction="column" justify="center" spacing={1}>
                <Grid item>
                  <RadioButtonUncheckedOutlinedIcon className={classes.fontSizeGrey} />
                </Grid>
                <Grid item>
                  <VerticalAlignBottomIcon className={classes.fontSizeGrey} />
                </Grid>
                <Grid item>
                  <RadioButtonUncheckedOutlinedIcon className={classes.fontSizeGrey} />
                </Grid>
                <Grid item>
                  <VerticalAlignBottomIcon className={classes.fontSizeGrey} />
                </Grid>
                <Grid item>
                  <RadioButtonUncheckedOutlinedIcon className={classes.fontSizeGrey} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container direction="column">
                <Grid item className={classes.firstTitle}>
                  <Typography variant="h6" component="h5" className={classes.typoGrey}>
                    Located Transaction
                  </Typography>
                </Grid>
                <Grid item className={classes.firstsubTitle}>
                  <span className="label-size">We've found your deposit </span><CallMadeIcon className="label-size" />
                </Grid>
                <Grid item className={classes.secTitle}>
                  <Typography variant="h6" component="h5" className={classes.typoGrey}>
                    Block Confirmations
                  </Typography>
                </Grid>
                <Grid item className={classes.secsubTitle}>
                  <span className="label-size">This can take up to 30 minutes </span>
                </Grid>
                <Grid item className={classes.thirdTitle}>
                  <Typography variant="h6" component="h5" className={classes.typoGrey}>
                    Successful Deposit
                  </Typography>
                </Grid>
                <Grid item className={classes.thirdsubTitle}>
                  <span className="label-size">The tokens are in your wallet </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <CardContent className={classes.topSpacing}>
            <Button
              variant="contained"
              className={classes.button}
            >
              <Typography variant="h5" component="h5" className={classes.spacingwhite}>
                Back To Account
                </Typography>
            </Button>
            <Grid className={classes.topSpacing}></Grid>
          </CardContent>
        </Card>
      </div>
      <div className={classes.pSpacing}></div>
    </div>
  );
}