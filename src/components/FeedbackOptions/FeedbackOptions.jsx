import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
