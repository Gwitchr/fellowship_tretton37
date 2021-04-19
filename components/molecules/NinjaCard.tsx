import { CSSProperties } from "react";
import Image from "next/image";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "../atoms";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { iNinja } from "../../types";
import { shorten } from "../../utils";

import styles from "../../styles/NinjaCard.module.css";

function NinjaCard(props: {
  info: iNinja;
  className: string;
  style: CSSProperties;
}): JSX.Element {
  const { info, className, ...rest } = props;
  return (
    <figure
      className={`${className} md:flex bg-gray-100 rounded-xl p-8 md:p-0  shadow text-center`}
      {...rest}
    >
      <Image
        className={`${styles.ninja_card} w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover  `}
        src={
          info.imagePortraitUrl || "https://source.unsplash.com/300x300/?user"
        }
        alt={`${info?.name} profile`}
        width="300"
        height="300"
      />

      <div className="pt-6 md:p-8 text-center md:text-left space-y-4 border-l-4 border-green-400">
        <blockquote>
          {info?.mainText?.length
            ? info.mainText.slice(0, 1).map((el, i) => (
                <p key={i} className="text-lg font-semibold pb-2">
                  {shorten(el, 80)}
                </p>
              ))
            : null}
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">{info?.name || "Name"}</div>
          <div className="text-gray-500">{info?.office || "Name"}</div>
          <div>
            <ul className="flex justify-center md:justify-start items-center">
              {info?.email ? (
                <SocialIcon link={`mailto:${info.email}`} icon={faEnvelope} />
              ) : null}
              {info?.linkedIn ? (
                <SocialIcon
                  link={`https://linkedin.com${info.linkedIn}`}
                  icon={faGithub}
                />
              ) : null}
              {info?.gitHub ? (
                <SocialIcon
                  link={`https://github.com/${info.gitHub}`}
                  icon={faGithub}
                />
              ) : null}
              {info?.twitter ? (
                <SocialIcon
                  link={`https://twitter.com/${info.twitter}`}
                  icon={faTwitter}
                />
              ) : null}
              {info?.stackOverflow ? (
                <SocialIcon
                  link={`https://stackoverflow.com/${info.stackOverflow}`}
                  icon={faStackOverflow}
                />
              ) : null}
            </ul>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default NinjaCard;
