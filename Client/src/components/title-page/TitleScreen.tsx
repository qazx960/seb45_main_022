import Backdrop from '../common/Backdrop';

interface Props {
  onClick: () => void;
}

const TitleScreen = ({ onClick }: Props) => {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center gap-[15rem]"
      onClick={onClick}
    >
      <Backdrop />
      <h1 className="text-white font-extrabold font-default text-[8rem] tracking-wide drop-shadow-[10px_10px_2px_#000] z-10 pointer-events-none">
        STAT & US
      </h1>
      <p className="text-white text-[2rem] z-10 animate-[blink_.8s_alternate_infinite] pointer-events-none">
        CLICK ANYWHERE TO ACCESS
      </p>
    </div>
  );
};

export default TitleScreen;
