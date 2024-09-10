import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import Logo from "../../utils/Logo";
const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <div className="flex">
        <div className="bg-red-400 w-12 h-12 mr-1 flex items-center overflow-hidden rounded-full">
          <Logo className="rounded-full" />
        </div>
        <div className="">
          <SearchInput />
        </div>
      </div>
      <div className="divider px-3 h-[2px] border-t border-gray-600 my-4 w-full"></div>

      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
