import { FC } from "react";

import SideLinks from "../side-links/SideLinks";

import { Leagues } from "@/constants/Leagues";

const Sidebar: FC = async () => {
  return (
    <section className="px-2 md:px-4 py-2 bg-gradient-to-b from-[rgb(45,59,87)] to-transparent rounded-md">
      <div>
        <h1 className="font-bold text-xl mb-4 text-textBlue">
          Sport{` > `}Football Leagues
        </h1>

        <ul className="space-y-2">
          {Leagues && Leagues.map((league) => (
            <div key={league?.id} className="flex">
              <SideLinks
                href={league.href}
                name={league?.name}
                src={league?.emblem}
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
