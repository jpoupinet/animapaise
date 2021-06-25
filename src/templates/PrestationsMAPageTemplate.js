import React from 'react';
import PropTypes from 'prop-types';

import Prestation from './prestation-ma';

const PrestationsMAPageTemplate = ({
  prestations,
  contentComponent,
}) => {
  return (
    <div>
      {
        prestations.map((prestation, i) =>
          <Prestation
            data={prestation}
            contentComponent={contentComponent}
            index={i}
            key={`prestation${i}`}
          />
        )
      }
    </div>
  )
};

PrestationsMAPageTemplate.propTypes = {
  prestations: PropTypes.array,
  contentComponent: PropTypes.func,
};

export default PrestationsMAPageTemplate;
