import { WeatherIcon } from '../../../shared';
import { CurrentTmp } from '../../../entities/weather';
import { Card } from '../../../shared';
import { PencilIcon } from '../../../shared';
import type { FavoriteStateType } from '../model/types';
import { useFavoriteStore } from '../model/favoriteStore';
import { useWeather, useWeatherDetail } from '../../../entities/weather';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const FavoriteCard = ({
  location,
  alias,
  lat,
  lon,
}: FavoriteStateType) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newAlias, setNewAlias] = useState(alias);
  const navigate = useNavigate();
  const { updateLocationName } = useFavoriteStore();
  const weather = useWeather(lat, lon);
  const weatherDetail = useWeatherDetail(weather);

  // 편집 시작
  const onClickEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  // 편집 완료 (엔터 키 또는 포커스 아웃)
  const onSave = () => {
    updateLocationName(newAlias, location);
    setIsEditing(false);
  };

  return (
    <Card width="favoriteCard">
      <div
        className="flex justify-between"
        onClick={() => {
          navigate(`/?location=${location}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <div className="flex flex-col gap-3 lg:gap-0">
          <div className="flex items-center gap-2">
            {isEditing ? (
              <input
                autoFocus
                value={newAlias}
                onChange={(e) => setNewAlias(e.target.value)}
                onBlur={onSave} // 포커스 잃으면 저장
                onKeyDown={(e) => e.key === 'Enter' && onSave()} // 엔터 치면 저장
                onClick={(e) => e.stopPropagation()} // navigate 방지
                className="bg-gray-100 border rounded px-1 text-black w-30"
              />
            ) : (
              <>
                <p className="text-lg">{alias}</p>
                <PencilIcon onClick={onClickEdit} />
              </>
            )}
          </div>
          <CurrentTmp curTmp={Math.floor(weather?.current.temp)} />
        </div>
        <WeatherIcon
          icon={weather?.current.weather[0]?.icon}
          description={weather?.current.weather[0]?.description}
          width="favorite"
        />
      </div>
      <div className="flex gap-2 text-xs">
        <span>최고 {weatherDetail?.maxTmp}° |</span>
        <span>최저 {weatherDetail?.minTmp}°</span>
      </div>
    </Card>
  );
};
