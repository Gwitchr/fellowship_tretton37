import {useState} from 'react';
import { iNinja } from "../../../types";
import {shorten} from '../../../utils';

function NinjaCard(props: { info: iNinja }): JSX.Element {
  const { info } = props;
  console.log({mainText:info.mainText})
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
        src={info?.imagePortraitUrl}
        alt={`${info?.name} profile`}
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          {info?.mainText?.length
            ? info.mainText.slice(0,1).map((el, i) => (
                <p key={i} className="text-lg font-semibold pb-2">{shorten(el,80)}</p>
              ))
            : null}
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">Sarah Dayan</div>
          <div className="text-gray-500">Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default NinjaCard;
