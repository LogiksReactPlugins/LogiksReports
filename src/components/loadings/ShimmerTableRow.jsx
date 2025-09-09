const ShimmerTableRow = ({ columns }) => {
  return (
    <tr className="animate-pulse">
      {columns.map(([key]) => (
        <td key={key} className="px-4 sm:px-6 py-2">
          <div className="h-4 w-4/5 shimmer rounded"></div>
        </td>
      ))}
    </tr>
  );
};


export default ShimmerTableRow