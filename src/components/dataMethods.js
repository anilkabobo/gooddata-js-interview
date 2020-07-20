import dayjs from 'dayjs';
import { grossProfitMeasure, dateAttributeInMonths, dateAttribute } from '../constants';

export function getMonthFilter(activeMonth, activeYear) {
  const date =  dayjs().year(activeYear);
  const format = 'YYYY-MM-DD';
  const month = date.month(activeMonth).date(1).format(format);
  const nextMonth = date.month(activeMonth + 1).date(1).subtract(1, 'day').format(format);

  return {
    absoluteDateFilter: {
      dataSet: {
        uri: dateAttribute
      },
      from: month,
      to: nextMonth
    }
  };
}

export function getMeasures() {
  return [{
    measure: {
      localIdentifier: 'm1',
      definition: {
        measureDefinition: {
          item: {
            uri: grossProfitMeasure
          }
        }
      },
      alias: '$ Gross Profit'
    }
  }];
}

export function getViewBy() {
  return {
    visualizationAttribute: {
      displayForm: {
        uri: dateAttributeInMonths
      },
      localIdentifier: 'a1'
    }
  };
}