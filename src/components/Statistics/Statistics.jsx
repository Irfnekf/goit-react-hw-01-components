import PropTypes from 'prop-types';
import { generateColor } from '../../Utils';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

function Statistics({ stats, title }) {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(statsElem => (
          <StatItem
            key={statsElem.id}
            style={{
              backgroundColor: generateColor(),
            }}
          >
            <StatLabel>{statsElem.label}</StatLabel>
            <StatPercentage>{statsElem.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
export default Statistics;
