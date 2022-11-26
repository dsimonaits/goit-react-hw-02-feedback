import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';
import { ListItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onFeedbackClick }) => {
  const optionsArr = Object.keys(options);
  return (
    <List>
      {optionsArr.map(option => {
        const buttonName = option[0].toUpperCase() + option.slice(1);

        return (
          <ListItem key={option}>
            <button tybe="button" onClick={() => onFeedbackClick(option)}>
              {buttonName}
            </button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};
