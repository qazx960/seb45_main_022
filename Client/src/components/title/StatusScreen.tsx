import { useEffect, useState } from 'react';
import Backdrop from '../common/Backdrop';
import Button from '../common/Button';
import axios from 'axios';
import StatusChart from './StatusChart';
import StatusListItem from './StatusListItem';

interface Props {
  showDefault?: () => void;
}

interface Status {
  statName: string;
  statLevel: number;
  statExp: number;
  requiredExp: number;
}

interface UserInfo {
  id: number;
  email: string;
  nickName: string;
  profileImage: string;
  attendance: boolean;
  statuses: Status[];
}

const StatusScreen = ({ showDefault }: Props) => {
  const [status, setStatus] = useState<Status[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data }: { data: UserInfo } = await axios.get('user/test.json');
        setStatus(data.statuses);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Backdrop>
      <div className="relative w-full h-full flex flex-col justify-center items-center gap-[2rem]">
        <div className="w-[1200px] h-[600px] p-5 bg-[url('/src/assets/common/modal-frame-note.png')] bg-center bg-cover bg-no-repeat flex flex-row justify-between">
          <div className="w-[500px] h-[600px] p-5 flex flex-col gap-[1rem] justify-center items-center">
            <h1 className="text-[2rem] ml-5">YOUR STATUS</h1>
            <StatusChart status={status} />
          </div>
          <div className="w-[500px] h-[600px] px-5 pb-10 flex flex-col justify-center items-center gap-2">
            {status.map((stat, i) => (
              <StatusListItem key={i} status={stat} statusCode={i} />
            ))}
          </div>
        </div>
        <Button onClick={showDefault}>Close</Button>
      </div>
    </Backdrop>
  );
};

export default StatusScreen;
