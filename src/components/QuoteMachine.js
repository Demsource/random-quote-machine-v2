import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => (
    <Card>
        <CardContent>
            <Typography>
                <span id='text'>{props.selectedQuote.quote}</span> - <span id='author'>{props.selectedQuote.author}</span>
            </Typography>
        </CardContent>
        <CardActions>
            <Button id='new-quote' size='small' onClick={props.assignNewQuoteIndex}>Next Quote</Button>
            <IconButton id='tweet-quote' target='_blank' href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote} - ${props.selectedQuote.author}`}>
                <FontAwesomeIcon icon={faTwitter} size='md' />
            </IconButton>
        </CardActions>
    </Card>
)

export default QuoteMachine;