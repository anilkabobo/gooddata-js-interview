// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component, Fragment } from 'react';
import { PropTypes as RPT } from 'prop-types';
import '@gooddata/react-components/styles/css/main.css';

class Selects extends Component {

  renderMonthsDropdown() {
    const { handleMonthChange }= this.props;

    return (
      <select defaultValue="0" data-testid="selectMonth" onChange={handleMonthChange}>
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>
    );
  }

  renderYearsDropdown() {
    const { handleYearChange }= this.props;

    return (
      <select defaultValue="2015" data-testid="selectYear" onChange={handleYearChange}>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
      </select>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderMonthsDropdown()} {this.renderYearsDropdown()}
      </Fragment>
    );
  }
}

Selects.propTypes = {
  handleYearChange: RPT.func,
  handleMonthChange: RPT.func
};

export default Selects;