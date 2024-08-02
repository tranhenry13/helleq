import Discord from "../../api/userInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className='p-5 md:rounded-xl bg-white shadow-sm text-neutral-800'>
      <Discord></Discord>
      <div className='flex mt-4 gap-2 text-xl'>
        <Tippy animation='scale' content='Gmail'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500' href='kitomcchill@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </Tippy>
        <Tippy animation='scale' content='Github'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500' href='https://github.com/kitomcvn'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Tippy>
        <Tippy animation='scale' content='Discord'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500'
            href='https://discord.com/users/1261118171222380674'>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </Tippy>
        <Tippy animation='scale' content='Youtube'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500' href='https://www.youtube.com/@nglequyen327'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </Tippy>
        <Tippy animation='scale' content='Facebook'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500' href='https://facebook.com/profile.php?id=61560052055671'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;
