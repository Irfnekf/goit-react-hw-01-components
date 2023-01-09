import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import { generateColor } from '../../Utils';

export function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(statsElem => (
          <li
            key={statsElem.id}
            className={css.item}
            style={{
              backgroundColor: generateColor(),
            }}
          >
            <span className={css.label}>{statsElem.label}</span>
            <span className={css.percentage}>{statsElem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
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
  title: PropTypes.string.isRequired,
};
