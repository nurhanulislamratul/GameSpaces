import { Link } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { logOut, selectAuth } from "@/redux/features/auth/AuthSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAppDispatch } from "@/redux/hook";
import user_photo from "../../assets/icons/user.png";

const Navbar = () => {
  const user = useSelector(selectAuth);
  const dispatch = useAppDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="flex h-16 md:h-20 w-full shrink-0 justify-between items-center px-4 md:px-6 shadow-sm lg:shadow-none sticky z-50 backdrop-blur-3xl bg-white/50">
      {/* sidebar for small screen */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="/" className="flex items-center gap-2 group">
            <h1 className="text-xl font-extrabold">
              <span className="text-primary">Game</span>Space
            </h1>
          </Link>
          <nav className="mt-6 grid gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              onClick={closeSidebar}
            >
              Home
            </Link>
            <Link
              to="/facilities"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Facilities
            </Link>
            <Link
              to="/about-us"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Contact
            </Link>
            <Link
              to="/blogs"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Blogs
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Navbar for large screen */}
      <div className="hidden lg:flex">
        <Link to="/" className="flex items-center gap-2 group">
          <h1 className="text-2xl font-extrabold">
            <span className="text-primary">Game</span>Spaces
          </h1>
        </Link>
      </div>

      {/* Nav menus */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              to="/"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Home
            </Link>
          </NavigationMenuLink>

          {/* Facilities */}
          <NavigationMenuLink asChild>
            <Link
              to="/facilities"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Facilities
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              to="/about-us"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              About Us
            </Link>
          </NavigationMenuLink>

          {/* contact */}
          <NavigationMenuLink asChild>
            <HashLink
              to="/contact"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Contact
            </HashLink>
          </NavigationMenuLink>

          {/* blogs */}
          <NavigationMenuLink asChild>
            <HashLink
              to="/blogs"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Blogs
            </HashLink>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side menu items */}
      <h1 className="lg:hidden text-xl md:text-2xl font-extrabold">
        <span className="text-primary">Game</span>Spaces
      </h1>

      {user.accessToken ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {user?.user ? (
              <Button
                variant="outline"
                className="overflow-hidden rounded-full size-10 p-0 hover:border-primary"
              >
                <img
                  src={user_photo}
                  className="overflow-hidden rounded-full"
                />
              </Button>
            ) : (
              <Button
                variant="outline"
                className="overflow-hidden rounded-full size-10 p-2"
              >
                <User size={24} className="overflow-hidden rounded-full" />
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <p>{user?.user?.name}</p>
              <p className="font-normal text-xs text-zinc-600">
                {user?.user?.email}
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to={"/dashboard/index"}>
              <DropdownMenuItem className="cursor-pointer">
                Dashboard
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => dispatch(logOut())}
              className="text-destructive cursor-pointer"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center gap-1">
          <Link to={"/sign-up"} className="hidden lg:block">
            <Button
              variant={"ghost"}
              className="text-base relative flex items-center gap-2"
            >
              Sign up
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button className="text-base relative flex items-center gap-2">
              Login
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
