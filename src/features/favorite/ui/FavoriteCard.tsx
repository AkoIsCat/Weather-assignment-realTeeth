import { WeatherIcon } from '../../../shared';
import { CurrentTmp } from '../../../entities/weather';
import { Card } from '../../../shared';
import { PencilIcon } from '../../../shared';
import { useNavigate } from 'react-router-dom';
import type { FavoriteStateType } from '../model/types';


export const FavoriteCard = ({
  location,
  alias,
  curTmp,
  minTmp,
  maxTmp,
  icon,
  description,
}: FavoriteStateType) => {
  const navigate = useNavigate();

  const onClickEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(e, 'click');
  };

  return (
    <Card width="favoriteCard">
      <div
        className="flex justify-between"
        onClick={() => {
          navigate(`/?location=${location}`);
        }}
      >
        <div className="flex flex-col gap-3 lg:gap-0">
          <div className="flex items-center gap-2">
            <p className="text-lg">{alias}</p>
            <PencilIcon onClick={onClickEdit} />
          </div>
          <CurrentTmp curTmp={curTmp} />
        </div>
        <WeatherIcon icon={icon} description={description} width="favorite" />
      </div>
      <div className="flex gap-2 text-xs">
        <span>최고 {maxTmp}° |</span>
        <span>최저 {minTmp}°</span>
      </div>
    </Card>
  );
};
