import type { WeatherData } from '../../../entities/weather';
import { Card } from '../../../shared';
import { HourlyForecastList } from './HourlyForecastList';

export const HourlyForecastSection = ({ data }: { data: WeatherData[] }) => {
  return (
    <section className="lg:col-span-8 px-4 lg:pr-10">
      <Card width="hourlyDesktop">
        <div className="px-6 pb-4 pt-6">시간대 별 날씨</div>
        <HourlyForecastList data={data} />
      </Card>
    </section>
  );
};
