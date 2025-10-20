// Personal Palette – Content type glyphs representing mediums softly.
import './ContentTypeIcon.module.css';

type ContentTypeIconProps = {
  type: 'book' | 'movie' | 'drama' | 'anime' | 'music' | 'event' | 'learning' | 'other';
  className?: string;
};

const ContentTypeIcon = ({ type, className }: ContentTypeIconProps) => {
  const stroke = '#333333';
  const size = 32;

  switch (type) {
    case 'book':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" role="img">
          <path
            d="M5 4h9a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H6a1 1 0 0 0-1 1V5a1 1 0 0 1 1-1z"
            fill="none"
            stroke={stroke}
            strokeWidth={1.5}
          />
          <path d="M17 6h2a1 1 0 0 1 1 1v12" stroke={stroke} strokeWidth={1.5} fill="none" />
        </svg>
      );
    case 'movie':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" role="img">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            fill="none"
            stroke={stroke}
            strokeWidth={1.5}
          />
          <polygon points="10,9 15,12 10,15" fill={stroke} opacity={0.7} />
        </svg>
      );
    case 'music':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" role="img">
          <path
            d="M9 18a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm0 0V6l10-2v9"
            fill="none"
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="17" cy="15" r="2" fill={stroke} opacity={0.7} />
        </svg>
      );
    case 'event':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" role="img">
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
            fill="none"
            stroke={stroke}
            strokeWidth={1.5}
          />
          <line x1="3" y1="9" x2="21" y2="9" stroke={stroke} strokeWidth={1.5} />
          <circle cx="8" cy="13" r="1" fill={stroke} />
          <circle cx="12" cy="13" r="1" fill={stroke} />
          <circle cx="16" cy="13" r="1" fill={stroke} />
        </svg>
      );
    case 'learning':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" role="img">
          <path
            d="M4 7l8-3 8 3-8 3-8-3zm0 5l8 3 8-3"
            fill="none"
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
          <path d="M12 10v8" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
        </svg>
      );
    case 'drama':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" role="img">
          <path
            d="M4 5h16v7c0 4-3 7-8 7s-8-3-8-7z"
            fill="none"
            stroke={stroke}
            strokeWidth={1.5}
          />
          <path d="M8 11h.01M16 11h.01" stroke={stroke} strokeWidth={2} strokeLinecap="round" />
          <path d="M9 14c.6.7 1.7 1.2 3 1.2S14.4 14.7 15 14" stroke={stroke} strokeWidth={1.5} />
        </svg>
      );
    case 'anime':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" role="img">
          <circle cx="12" cy="12" r="8" fill="none" stroke={stroke} strokeWidth={1.5} />
          <path d="M6 9c1.2 1 2.8 1.5 6 1.5S16.8 10 18 9" stroke={stroke} strokeWidth={1.5} />
          <circle cx="9" cy="13" r="1" fill={stroke} />
          <circle cx="15" cy="13" r="1" fill={stroke} />
        </svg>
      );
    default:
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" role="img">
          <circle cx="12" cy="12" r="9" fill="none" stroke={stroke} strokeWidth={1.5} />
          <path
            d="M9 12h6"
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

export default ContentTypeIcon;
