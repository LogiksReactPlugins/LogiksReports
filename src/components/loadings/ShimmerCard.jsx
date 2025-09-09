const ShimmerCard = () => {
  return (
    <div className="rounded-lg shadow-sm bg-white p-2 animate-pulse">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          {/* Title + Description */}
          <div className="flex-1 min-w-0">
            <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
        {/* Checkbox Placeholder */}
        {/* <div className="h-4 w-4 bg-gray-300 rounded"></div> */}
      </div>

      {/* Body */}
      <div className="space-y-2 mb-1">
        <div className="h-3 bg-gray-200 rounded w-20"></div>
        <div className="h-3 bg-gray-200 rounded w-28"></div>
        <div className="h-3 bg-gray-200 rounded w-16"></div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-2 border-t border-gray-100 pt-1">
        <div className="h-6 w-6 bg-gray-300 rounded"></div>
        <div className="h-6 w-6 bg-gray-300 rounded"></div>
        <div className="h-6 w-6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
export default ShimmerCard