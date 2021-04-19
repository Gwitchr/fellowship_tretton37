import { useState, CSSProperties } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { iNinja } from "../../../types";
import { shorten } from "../../../utils";

function NinjaCard(props: {
  info: iNinja;
  className: string;
  style: CSSProperties;
}): JSX.Element {
  const { info, className, ...rest } = props;
  return (
    <figure
      className={`${className} md:flex bg-gray-100 rounded-xl p-8 md:p-0  shadow`}
      {...rest}
    >
      {info?.imagePortraitUrl ? (
        <Image
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover  "
          src={info.imagePortraitUrl}
          alt={`${info?.name} profile`}
          width="384"
          height="512"
        />
      ) : null}

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
            <ul className="flex justify-start items-center">
              {info?.email ? (
                <li className="block w-5 h-5 mx-1">
                  <a
                    href={info.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ maxWidth: "20px" }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              ) : null}
              {info?.linkedIn ? (
                <li className="block w-5 h-5 mx-1">
                  <a
                    href={info.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                      style={{ maxWidth: "20px" }}
                  >
                    <FontAwesomeIcon

                      icon={faLinkedin}
                    />
                  </a>
                </li>
              ) : null}
              {info?.gitHub ? (
                <li className="block w-5 h-5 mx-1">
                  <a
                    href={info.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                      style={{ maxWidth: "20px" }}
                  >
                    <FontAwesomeIcon

                      icon={faGithub}
                    />
                  </a>
                </li>
              ) : null}
              {info?.twitter ? (
                <li className="block w-5 h-5 mx-1">
                  <a
                    href={info.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ maxWidth: "20px" }}
                  >
                    <FontAwesomeIcon

                      icon={faTwitter}
                    />
                  </a>
                </li>
              ) : null}
              {info?.stackOverflow ? (
                <li className="block w-5 h-5 mx-1">
                  <a
                    href={info.stackOverflow}
                    target="_blank"
                    rel="noopener noreferrer"
                      style={{ maxWidth: "20px" }}
                  >
                    <FontAwesomeIcon

                      icon={faStackOverflow}
                    />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default NinjaCard;
