import { STATUS_ICON } from '../../utility/status';
import {
  CATEGORY_ICON,
  CATEGORY_NAME,
  CATEGORY_STATUS_MAP,
} from '../../utility/category';
import { useNavigate } from 'react-router-dom';
import { CategoryCode } from '../../api/category';

interface Props {
  categoryCode: CategoryCode;
}

const Header = ({ categoryCode }: Props) => {
  const nav = useNavigate();

  return (
    <div
      className={`w-full h-[60px] flex justify-center items-center gap-[220px]`}
    >
      {/* 닉네임 */}
      <p
        className=" text-[1.5rem] font-bold mt-[100px] cursor-pointer"
        style={{ fontFamily: 'Pretendard' }}
      >
        ⚔️ 헬창용사님
      </p>

      {/* 아이콘, 카테고리 이름 */}
      <div
        className="w-[250px] flex justify-between items-center cursor-pointer"
        onClick={() => nav(-1)}
      >
        <img
          className="w-[50px] h-[50px]"
          src={CATEGORY_ICON[categoryCode]}
          alt="Icon"
        />
        <span className="text-[2rem] font-bold mb-[0.5rem]">
          {CATEGORY_NAME[categoryCode]}
        </span>
        <img
          className="w-[50px] h-[50px]"
          src={CATEGORY_ICON[categoryCode]}
          alt="Icon"
        />
      </div>

      {/* 스탯 아이콘, 레벨, 경험치 바 */}
      <div className="flex flex-col justify-center items-end gap-[0.5rem] cursor-pointer mt-[100px]">
        <div className="flex gap-[1rem]">
          <img
            className="w-[1rem] h-[1rem]"
            src={STATUS_ICON[CATEGORY_STATUS_MAP[categoryCode]]}
            alt="titleIcon"
          />
          <span className="text-[1rem]">Lv.100</span>
        </div>

        <div className="flex">
          <div className="relative w-[10rem] h-[1rem] p-[0.5rem] bg-gray-300 rounded-full overflow-hidden flex justify-start items-center">
            <div
              className="h-full bg-yellow-500 rounded-full"
              style={{
                width: `${(0 / 100) * 100}%`,
              }}
            ></div>
            <span className="absolute left-[1rem] text-xs text-gray-400">
              {`${0} / ${100}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;