import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { useAppSelector } from "@/redux/hook";
import { getToday } from "@/utils/getToday";
import player_img from "@/assets/images/player.webp";

const WelcomeBanner = () => {
  const user = useAppSelector(selectCurrentUser);

  const today = getToday();

  return (
    <div className="flex justify-between bg-gradient-to-r from-primary to-purple-400 rounded-2xl text-white">
      <div className="flex flex-col gap-4 justify-between p-8 md:p-10 xl:p-14">
        <p className="text-sm md:text-base">{today}</p>
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-sm md:text-base">
            Keep your player portal updated to access the latest features
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:pr-10 xl:pr-14 pt-2 items-center">
        <img src={player_img} alt="player image" className="w-full md:w-64" />
      </div>
    </div>
  );
};

export default WelcomeBanner;
