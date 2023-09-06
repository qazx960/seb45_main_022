interface CommentProps {
  profileImg: string;
  nickname: string;
  label: string;
  text: string;
  timeCreated: string;
}

const Comments = ({
  profileImg,
  nickname,
  label,
  text,
  timeCreated,
}: CommentProps) => {
  return (
    <div className="border-b border-solid border-gray-400  py-2 flex p-4 ">
      <div className="flex flex-col items-center justify-center w-20">
        <img src={profileImg} alt="profile image" width={45} />
        <span className="font-[Pretendard] font-semibold">{nickname}</span>
        <span className="font-[Pretendard] ">{label}</span>
      </div>
      <div className="flex text-sm   w-full p-4">
        <span className="font-[Pretendard] font-normal">{text}</span>
      </div>
      <div className="w-10 text-center">
        <span className="font-[Pretendard] text-sm text-gray-500 ">
          {timeCreated}
        </span>
      </div>
    </div>
  );
};

export default Comments;
