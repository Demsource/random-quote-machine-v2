import React, { Component } from 'react';
import {random} from 'lodash';
import QuoteMachine from './components/QuoteMachine';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(data => data.json())
        .then(quotes => this.setState({quotes: quotes.quotes}, this.assignNewQuoteIndex))
  }
  
  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  generateNewQuoteIndex() {
    if(!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({selectedQuoteIndex: this.generateNewQuoteIndex()});
  }
  
  render() {
    // console.log('quotes', this.state.quotes ,'index', this.state.selectedQuoteIndex);
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify={"center"} container>
        <Grid xs={9} lg={6} item>
          { this.selectedQuote ?
            <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
            : null
          }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
