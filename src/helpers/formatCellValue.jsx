export default function formatCellValue (value, formatter) {
    if (!value && value !== false) return '';

    switch (formatter?.toLowerCase()) {
      case 'checkbox':
        return (
          <input
            type="checkbox"
            checked={Boolean(value)}
            readOnly
            className="w-4 h-4 text-green-600 accent-green-600 cursor-default"
          />
        );

      case 'date':
        return new Date(value).toLocaleDateString();

      case 'time':
        return new Date(value).toLocaleTimeString();

      case 'datetime':
        return new Date(value).toLocaleString();

      case 'currency':
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        }).format(value);

      case 'number':
      case 'num':
        return <span className="text-center">{Number(value).toLocaleString()}</span>;

      case 'url':
        return value ? (
          <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {value}
          </a>
        ) : null;

      case 'email':
        return value ? (
          <a href={`mailto:${value}`} className="text-blue-600 underline">
            {value}
          </a>
        ) : null;

      case 'tel':
      case 'mob':
      case 'phone':
      case 'mobile':
        return value ? (
          <a href={`tel:${value}`} className="text-blue-600 underline">
            {value}
          </a>
        ) : null;

      case 'geoloc':
      case 'geolocation':
      case 'geoaddress':
        return value ? (
          <a
            href={`https://www.google.com/maps/place/${encodeURIComponent(value)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {value}
          </a>
        ) : null;

      case 'color':
        return value ? (
          <div className="flex items-center justify-center">
            <span className="w-5 h-5 rounded-full border" style={{ backgroundColor: value }}></span>
          </div>
        ) : null;

      case 'avatar':
        return (
          <img
            src={value || '/images/user.png'}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        );

      case 'photo':
      case 'picture':
      case 'media':
        return (
          <img
            src={value || '/images/noimg.png'}
            alt="media"
            className="w-12 h-12 rounded object-cover"
          />
        );

      case 'file':
      case 'attachment':
        return value ? (
          <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            FILE
          </a>
        ) : (
          'No File'
        );

      case 'json':
        try {
          const parsed = typeof value === 'string' ? JSON.parse(value) : value;
          return (
            <pre className="whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded">
              {JSON.stringify(parsed, null, 2)}
            </pre>
          );
        } catch {
          return String(value);
        }

      case 'pretty':
        return (
          <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-100 p-2 rounded">
            {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
          </pre>
        );

      case 'uppercase':
        return String(value).toUpperCase();

      case 'lowercase':
        return String(value).toLowerCase();

      case 'html':
        return <div dangerouslySetInnerHTML={{ __html: value }} />;

      default:
        return String(value);
    }
  };
