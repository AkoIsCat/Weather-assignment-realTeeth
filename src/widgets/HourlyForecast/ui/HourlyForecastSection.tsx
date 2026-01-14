import { Card } from '../../../shared';
import { HourlyForecastList } from './HourlyForecastList';

const dummy = [
  {
    time: 12,
    temp: 5,
    icon: '',
  },
  {
    time: 15,
    temp: 7,
    icon: '',
  },
  {
    time: 18,
    temp: 1,
    icon: '',
  },
  {
    time: 21,
    temp: -6,
    icon: '',
  },
  {
    time: 24,
    temp: -10,
    icon: '',
  },
  {
    time: 3,
    temp: -10,
    icon: '',
  },
];

export const HourlyForecastSection = () => {
  return (
    <section className="lg:col-span-7 px-4">
      <Card width="hourlyDesktop">
        <div className="px-6 pb-4 pt-6">시간대 별 날씨</div>
        <HourlyForecastList data={dummy} />
      </Card>
    </section>
  );
};
