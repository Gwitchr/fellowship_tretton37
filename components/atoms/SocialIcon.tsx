import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SocialIcon({link,icon}){
  return <li className="block w-5 h-5 mx-1">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
        style={{ maxWidth: "20px" }}
    >
      <FontAwesomeIcon

        icon={icon}
      />
    </a>
  </li>
}

export default SocialIcon
