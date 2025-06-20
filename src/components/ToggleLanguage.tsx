import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Toggle } from './ui/toggle';

const flags: Record<string, React.ReactNode> = {
  es: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="circleFlagsMx0">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#circleFlagsMx0)">
        <path fill="#eee" d="M144 0h223l33 256l-33 256H144l-32-256z" />
        <path fill="#496e2d" d="M0 0h144v512H0z" />
        <path fill="#d80027" d="M368 0h144v512H368z" />
        <path fill="#ffda44" d="M256 277v10h12l10-22z" />
        <path
          fill="#496e2d"
          d="M160 242a96 96 0 0 0 192 0h-11a85 85 0 0 1-170 0zm39 17l-4 2c-2 2-2 6 1 8c15 14 34 22 54 24v17h12v-17c20-2 39-10 54-24c3-2 3-6 1-8s-6-2-8 0a78 78 0 0 1-53 21c-19 0-38-8-53-21z"
        />
        <path
          fill="#338af3"
          d="M256 316c-14 0-28-5-40-13l6-9c20 13 48 13 68 0l7 9c-12 8-26 13-41 13"
        />
        <path
          fill="#751a46"
          d="M256 174c22 11 12 33 11 34l-2-4c-5-11-18-18-31-18v11c6 0 11 5 11 11c-7 7-9 17-4 26l4 8l-13 23l29-7l18 18v-11l11 11l23-11l-35-21l-5-21l28 16c4 11 12 21 23 26c9-83-42-91-61-91z"
        />
        <path
          fill="#6da544"
          d="M222 271c-15 0-33-12-38-40l11-2c4 23 18 31 27 31q4.5 0 6-3c0-2 0-3-6-5c-3-1-7-2-10-5c-10-12 4-24 11-30c1-1 2-2 1-3c0 0-2-2-5-2c-7 0-12-4-14-11c-2-6 2-13 8-17l5 11c-2 0-2 2-2 4c0 0 1 2 3 2c7 0 14 4 16 9c1 3 2 9-5 15c-7 7-11 12-9 15l5 1c5 2 14 5 13 17c-1 8-8 13-17 13h-1z"
        />
        <path fill="#ffda44" d="m234 186l-12 11v11l18-9c3-1 3-5 1-7z" />
        <circle cx="172" cy="275" r="8" fill="#ffda44" />
        <circle cx="189" cy="302" r="8" fill="#ffda44" />
        <circle cx="216" cy="323" r="8" fill="#ffda44" />
        <circle cx="297" cy="323" r="8" fill="#ffda44" />
        <circle cx="324" cy="302" r="8" fill="#ffda44" />
        <circle cx="341" cy="275" r="8" fill="#ffda44" />
        <rect
          width="34"
          height="22"
          x="239"
          y="299"
          fill="#ff9811"
          rx="11"
          ry="11"
        />
      </g>
    </svg>
  ),
  en: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="circleFlagsUsUm0">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#circleFlagsUsUm0)">
        <path
          fill="#eee"
          d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"
        />
        <path
          fill="#d80027"
          d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
        />
        <path fill="#0052b4" d="M0 0h256v256H0Z" />
        <path
          fill="#eee"
          d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"
        />
      </g>
    </svg>
  ),
};

export default function ToggleLanguage() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <Toggle
      className="rounded-full hover:bg-slate-400 dark:hover:bg-slate-800"
      aria-label="Toggle Language"
      onClick={() => changeLanguage(lang === 'es' ? 'en' : 'es')}
    >
      {lang === 'es' ? flags['en'] : flags['es']}
    </Toggle>
  );
}
