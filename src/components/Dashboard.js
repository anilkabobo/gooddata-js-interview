// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import Selects from './Selects';
import { ColumnChart } from '@gooddata/react-components';
import { PropTypes as RPT } from 'prop-types';
import { connect } from 'react-redux';
import { PROJECT_ID } from '../constants';
import { getMonthFilter, getMeasures, getViewBy } from './dataMethods';
import { updateActiveMonth, updateActiveYear } from '../redux/charts/actions';

import '@gooddata/react-components/styles/css/main.css';

class Dashboard extends Component {

  handleMonthChange = (e) => {
    const { updateActiveMonth } = this.props;

    updateActiveMonth(e.target.value);
  }

  handleYearChange = (e) => {
    const { updateActiveYear } = this.props;

    updateActiveYear(e.target.value);
  }

  render() {
    const { activeMonth, activeYear } = this.props;
    const filters = [getMonthFilter(activeMonth, activeYear)];
    const measures = getMeasures(this.props);
    const viewBy = getViewBy();

    return (
      <div className="App">
        <h1>$ Gross Profit in month
          <Selects
            handleYearChange={this.handleYearChange}
            handleMonthChange={this.handleMonthChange}
          />
        </h1>
        <div>
          <ColumnChart
            measures={measures}
            filters={filters}
            projectId={PROJECT_ID}
          />
        </div>
        <h1>$ Gross Profit - All months</h1>
        <div>
          <ColumnChart
            measures={measures}
            viewBy={viewBy}
            projectId={PROJECT_ID}
          />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  activeMonth: RPT.oneOfType([RPT.string, RPT.number]).isRequired,
  activeYear: RPT.oneOfType([RPT.string, RPT.number]).isRequired,
  updateActiveMonth: RPT.func,
  updateActiveYear: RPT.func
};

const mapStateToProps = state => {
  return {
    activeMonth: state.charts.activeMonth,
    activeYear: state.charts.activeYear
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveMonth: month => {
      dispatch(updateActiveMonth(month));
    },
    updateActiveYear: year => {
      dispatch(updateActiveYear(year));
    }
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;