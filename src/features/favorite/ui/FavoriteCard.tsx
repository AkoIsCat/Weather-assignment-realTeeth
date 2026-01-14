import { WeatherIcon } from '../../../shared';
import { CurrentTmp } from '../../../entities/weather';
import { Card } from '../../../shared';
import { useNavigate } from 'react-router-dom';

// 임시 타입. 나중에 실제 데이터에 맞춰서 바꿀것.
type PropsType = {
  city: string;
  curTmp: number;
  minTmp: number;
  maxTmp: number;
};

export const FavoriteCard = ({ city, curTmp, minTmp, maxTmp }: PropsType) => {
  const navigate = useNavigate();

  return (
    <Card width="favoriteCard">
      <div
        className="flex"
        onClick={() => {
          navigate(`/?location=${city}`);
        }}
      >
        <div>
          <p>{city}</p>
          <CurrentTmp curTmp={curTmp} />
        </div>
        {/* <WeatherIcon icon="icon" description="dummy" /> */}
      </div>
      <div className="flex gap-2 text-xs">
        <span>최고 {maxTmp} |</span>
        <span>최저 {minTmp}</span>
        {/* <TodayTmp type="max" minTmp={maxTmp} />
        <TodayTmp type="min" minTmp={minTmp} /> */}
      </div>
    </Card>
  );
};
